export function Subscription() {
  return (
    <section id="sub" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="rounded-3xl bg-[#2b1b12] text-[#f4e9dc] p-8 md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d9a97e]">Подписка</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">
              Две пачки в месяц. Без ваших напоминаний.
            </h2>
            <p className="mt-4 opacity-85 max-w-lg">
              2 пачки по 250 г раз в месяц. Сорт выбираем вместе, меняете когда захотите.
              Доставка по Минску — бесплатно, в пятницу.
            </p>

            <ul className="mt-6 space-y-2 text-sm opacity-90">
              <li>· Меняем сорт по вашей просьбе</li>
              <li>· Пауза или отмена — в один клик</li>
              <li>· Скидка на разовые заказы между поставками</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#3a2417] p-6">
            <p className="font-serif text-4xl">54 BYN <span className="text-base opacity-60">/ мес</span></p>
            <p className="mt-2 text-sm opacity-75">Вместо 58–64 BYN при разовой покупке.</p>
            <a
              href="#form"
              className="inline-block mt-6 rounded-lg bg-[#f4e9dc] text-[#2b1b12] px-5 py-3 hover:bg-white transition"
            >
              Оформить подписку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
