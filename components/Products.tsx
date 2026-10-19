function RoastDots({ level }: { level: number }) {
  return (
    <span className="inline-flex gap-1" aria-label={`Обжарка ${level} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i < level ? 'bg-[#8a4a25]' : 'bg-[#e2d5c4]'}`}
        />
      ))}
    </span>
  );
}

const PRODUCTS = [
  {
    name: 'Эфиопия Иргачеффе',
    notes: 'цветочный, бергамот, светлая обжарка',
    weight: '250 г',
    price: 32,
    roast: 2,
    brew: 'Фильтр · V60 · Aeropress',
  },
  {
    name: 'Колумбия Уила',
    notes: 'карамель, красное яблоко',
    weight: '250 г',
    price: 29,
    roast: 3,
    brew: 'Фильтр · гейзер · латте',
  },
  {
    name: 'Бразилия Серрадо',
    notes: 'орех, шоколад, под эспрессо',
    weight: '250 г',
    price: 26,
    roast: 4,
    brew: 'Эспрессо · молоко',
  },
  {
    name: 'Дрип-пакеты, ассорти',
    notes: '10 штук, на разные сорта',
    weight: '10 шт',
    price: 18,
    roast: 3,
    brew: 'Залил кипятком — готово',
  },
];

export function Products() {
  return (
    <section id="coffee" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a4a25]">Ассортимент</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">Что обжариваем сейчас</h2>
        </div>
        <p className="hidden md:block text-sm opacity-60 max-w-xs">
          Список меняется: сорта выбираем по свежему урожаю. Актуальные — при заявке.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {PRODUCTS.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-[#e2d5c4] p-6 bg-[#fffaf3] hover:border-[#8a4a25] transition"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-xl">{p.name}</h3>
              <RoastDots level={p.roast} />
            </div>
            <p className="mt-2 opacity-75 text-sm">{p.notes}</p>
            <p className="mt-3 font-mono text-xs opacity-60">{p.brew}</p>
            <div className="mt-5 flex items-baseline justify-between">
              <span className="text-sm opacity-60">{p.weight}</span>
              <span className="font-serif text-2xl">{p.price} BYN</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
