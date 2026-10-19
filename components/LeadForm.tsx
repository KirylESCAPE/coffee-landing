'use client';

import { useEffect, useRef, useState } from 'react';
import { captureAttribution, type Attribution } from '@/lib/attribution';
import { validateByPhone } from '@/lib/validation';

type Interest = 'subscription' | 'order' | 'question';
type Status = 'idle' | 'sending' | 'success' | 'duplicate' | 'error';

export function LeadForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<Interest>('subscription');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [phoneHint, setPhoneHint] = useState<string | null>(null);
  const attrRef = useRef<Attribution | null>(null);
  const lockRef = useRef(false);

  useEffect(() => {
    attrRef.current = captureAttribution();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (lockRef.current || status === 'sending') return;

    const pErr = validateByPhone(phone);
    setPhoneHint(pErr);
    if (pErr) return;

    lockRef.current = true;
    setStatus('sending');
    setError(null);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone, interest, comment,
          ...(attrRef.current ?? {}),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? 'Что-то пошло не так');
        setStatus('error');
        return;
      }

      setStatus(json.duplicate ? 'duplicate' : 'success');
      setName(''); setPhone(''); setComment('');
    } catch {
      setError('Нет связи. Проверьте интернет или позвоните нам.');
      setStatus('error');
    } finally {
      lockRef.current = false;
    }
  }

  if (status === 'success' || status === 'duplicate') {
    return (
      <div className="rounded-2xl bg-[#2b1b12] text-[#f4e9dc] p-8">
        <h3 className="font-serif text-2xl mb-2">
          {status === 'duplicate' ? 'Заявка уже принята' : 'Готово!'}
        </h3>
        <p className="opacity-80">
          Перезвоним в течение часа в рабочее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm mb-1">Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          className="w-full rounded-lg border border-[#e2d5c4] bg-[#fffaf3] px-4 py-3 outline-none focus:border-[#8a4a25]"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Телефон</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setPhoneHint(validateByPhone(phone))}
          placeholder="+375 (29) 123-45-67"
          required
          className="w-full rounded-lg border border-[#e2d5c4] bg-[#fffaf3] px-4 py-3 outline-none focus:border-[#8a4a25]"
        />
        {phoneHint && (
          <p className="mt-1 text-sm text-[#b1451f]">{phoneHint}</p>
        )}
      </div>

      <fieldset>
        <legend className="block text-sm mb-2">Что интересует</legend>
        <div className="flex flex-wrap gap-2">
          {(['subscription','order','question'] as const).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setInterest(k)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                interest === k
                  ? 'bg-[#2b1b12] text-[#f4e9dc] border-[#2b1b12]'
                  : 'border-[#e2d5c4] text-[#2b1b12]'
              }`}
            >
              {k === 'subscription' ? 'Подписка'
                : k === 'order' ? 'Разовый заказ' : 'Вопрос'}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="block text-sm mb-1">
          Комментарий <span className="opacity-50">(необязательно)</span>
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          maxLength={500}
          className="w-full rounded-lg border border-[#e2d5c4] bg-[#fffaf3] px-4 py-3 outline-none focus:border-[#8a4a25]"
        />
      </div>

      {error && (
        <div className="rounded-lg bg-[#fbe9e1] text-[#8a2f0d] px-4 py-3 text-sm">
          {error}{' '}
          <button
            type="button"
            className="underline"
            onClick={() => setStatus('idle')}
          >
            Попробовать снова
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-[#8a4a25] text-[#fffaf3] px-6 py-3 font-medium transition hover:bg-[#6f3a1d] disabled:opacity-60"
      >
        {status === 'sending' ? 'Отправляем…' : 'Оставить заявку'}
      </button>
    </form>
  );
}
