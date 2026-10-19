import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { LeadSchema, normalizePhone, validateByPhone } from '@/lib/validation';
import { findRecentDuplicate } from '@/lib/rate-limit';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Некорректный запрос' },
      { status: 400 }
    );
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Проверьте поля формы', issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const phoneError = validateByPhone(data.phone);
  if (phoneError) {
    return NextResponse.json(
      { ok: false, error: phoneError, field: 'phone' },
      { status: 422 }
    );
  }

  const phone = normalizePhone(data.phone);

  try {
    const dup = await findRecentDuplicate(phone);
    if (dup) {
      return NextResponse.json({
        ok: true,
        duplicate: true,
        message: 'Заявка уже принята. Менеджер свяжется с вами.',
      });
    }

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone,
        interest: data.interest,
        comment: data.comment || null,
        utmSource: data.utmSource ?? null,
        utmMedium: data.utmMedium ?? null,
        utmCampaign: data.utmCampaign ?? null,
        utmContent: data.utmContent ?? null,
        utmTerm: data.utmTerm ?? null,
        referrer: data.referrer ?? null,
        landingPage: data.landingPage ?? null,
      },
      select: { id: true, createdAt: true },
    });

    // Опционально: Telegram-уведомление
    notifyTelegram(lead.id, data, phone).catch(() => {});

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error('[lead] create failed', err);
    return NextResponse.json(
      {
        ok: false,
        error: 'Не удалось отправить заявку. Позвоните: +375 (29) 123-45-67',
      },
      { status: 500 }
    );
  }
}

async function notifyTelegram(
  id: string,
  data: { name: string; interest: string; comment?: string },
  phone: string
) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return;

  const label: Record<string, string> = {
    subscription: 'Подписка',
    order: 'Разовый заказ',
    question: 'Вопрос',
  };

  const text = [
    `🟢 Новая заявка ${id}`,
    `Имя: ${data.name}`,
    `Телефон: ${phone}`,
    `Интерес: ${label[data.interest] ?? data.interest}`,
    data.comment ? `Комментарий: ${data.comment}` : null,
  ].filter(Boolean).join('\n');

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text }),
  });
}
