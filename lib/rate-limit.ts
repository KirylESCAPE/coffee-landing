import { prisma } from './db';
import { normalizePhone } from './validation';

const WINDOW_MS = 10 * 60 * 1000; // 10 минут

export async function findRecentDuplicate(phone: string) {
  const normalized = normalizePhone(phone);
  const since = new Date(Date.now() - WINDOW_MS);

  return prisma.lead.findFirst({
    where: {
      phone: normalized,
      createdAt: { gte: since },
    },
    orderBy: { createdAt: 'desc' },
  });
}
