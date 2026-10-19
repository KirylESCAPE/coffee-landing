import { z } from 'zod';

const BY_PHONE_CLEAN = /^(\+?375)(17|25|29|33|44)\d{7}$/;

export function normalizePhone(input: string): string {
  return input.replace(/[\s()\-]/g, '');
}

export function validateByPhone(input: string): string | null {
  const cleaned = normalizePhone(input);

  if (!cleaned) return 'Укажите телефон';

  if (!cleaned.startsWith('+375') && !cleaned.startsWith('375')) {
    return 'Белорусский номер должен начинаться с +375';
  }

  if (!BY_PHONE_CLEAN.test(cleaned)) {
    return 'Проверьте номер. Формат: +375 (29) 123-45-67';
  }

  return null;
}

export const LeadSchema = z.object({
  name: z.string().trim().min(2, 'Слишком короткое имя').max(60),
  phone: z.string().trim().min(6).max(20),
  interest: z.enum(['subscription', 'order', 'question']),
  comment: z.string().trim().max(500).optional().or(z.literal('')),
  utmSource: z.string().max(120).optional().nullable(),
  utmMedium: z.string().max(120).optional().nullable(),
  utmCampaign: z.string().max(120).optional().nullable(),
  utmContent: z.string().max(120).optional().nullable(),
  utmTerm: z.string().max(120).optional().nullable(),
  referrer: z.string().max(500).optional().nullable(),
  landingPage: z.string().max(500).optional().nullable(),
});
