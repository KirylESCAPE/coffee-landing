const TIMELINE = [
  { day: 'Чт', title: 'Обжарка', text: 'Партия 5 кг. Ручной контроль, логируем каждый замер.' },
  { day: 'Пт', title: 'Упаковка и доставка', text: 'Клапанные пакеты. По Минску — курьером.' },
  { day: 'Сб', title: 'У вас дома', text: 'Газы выходят, вкус раскрывается. Идеально для фильтра.' },
];

export function Freshness() {
  return (
    <section id="fresh" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8a4a25]">Свежесть</p>
      <h2 className="font-serif text-3xl md:text-4xl mt-3 max-w-2xl">
        Всё, что мы продаём — это то, что зерно попадает к вам через день-два после обжарки.
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TIMELINE.map((t) => (
          <div key={t.title} className="rounded-2xl border border-[#e2d5c4] p-6 bg-[#fffaf3]">
            <div className="font-mono text-sm text-[#8a4a25]">{t.day}</div>
            <h3 className="font-serif text-xl mt-2">{t.title}</h3>
            <p className="opacity-75 mt-2 text-sm">{t.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl opacity-75">
        Мы не храним зерно на складе. Обжарили в четверг — развезли в пятницу.
        Что не уехало, то уехало на следующей неделе или ушло в дрип-пакеты.
      </p>
    </section>
  );
}
