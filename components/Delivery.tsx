export function Delivery() {
  return (
    <section id="delivery" className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8a4a25]">Доставка и самовывоз</p>
      <h2 className="font-serif text-3xl md:text-4xl mt-3">Как забрать кофе</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-[#e2d5c4] p-6">
          <h3 className="font-serif text-xl">Доставка по Минску</h3>
          <p className="opacity-75 mt-2 text-sm">
            По пятницам. Курьер везёт свежую партию прямо со склада.
          </p>
          <dl className="mt-4 text-sm grid grid-cols-2 gap-y-2">
            <dt className="opacity-60">Стоимость</dt>
            <dd>5 BYN</dd>
            <dt className="opacity-60">Бесплатно</dt>
            <dd>от 50 BYN</dd>
            <dt className="opacity-60">День</dt>
            <dd>пятница</dd>
          </dl>
        </div>

        <div className="rounded-2xl border border-[#e2d5c4] p-6">
          <h3 className="font-serif text-xl">Самовывоз</h3>
          <p className="opacity-75 mt-2 text-sm">
            Минск, ул. Короля, 9. Заходите, попробуем вместе, подберём сорт.
          </p>
          <dl className="mt-4 text-sm grid grid-cols-2 gap-y-2">
            <dt className="opacity-60">Пн–Пт</dt>
            <dd>8:00–20:00</dd>
            <dt className="opacity-60">Сб–Вс</dt>
            <dd>10:00–18:00</dd>
            <dt className="opacity-60">Оплата</dt>
            <dd>карта, наличные</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
