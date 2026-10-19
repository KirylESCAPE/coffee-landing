import Image from 'next/image';

export function Hero() {
  return (
    <section className="px-6 pt-12 md:pt-20 pb-16 max-w-6xl mx-auto">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a4a25]">
            Обжарка кофе · Минск · с 2019
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mt-4 leading-[1.05]">
            Обжариваем по четвергам.<br />
            Доставляем в пятницу.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">
            Партии по 5 кг. Зерно у вас дома на 1–3 день после обжарки.
            Аня и Дмитрий — раньше за стойкой, теперь за ростором.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#form"
              className="rounded-lg bg-[#8a4a25] text-[#fffaf3] px-6 py-3 hover:bg-[#6f3a1d] transition"
            >
              Оставить заявку
            </a>
            <a
              href="#coffee"
              className="rounded-lg border border-[#e2d5c4] px-6 py-3 hover:border-[#8a4a25] transition"
            >
              Посмотреть сорта
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 text-sm">
            <div>
              <dt className="opacity-60">Партия</dt>
              <dd className="font-serif text-2xl">5 кг</dd>
            </div>
            <div>
              <dt className="opacity-60">От ростера</dt>
              <dd className="font-serif text-2xl">1–3 дня</dd>
            </div>
            <div>
              <dt className="opacity-60">Обжарка</dt>
              <dd className="font-serif text-2xl">чт</dd>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Обжарщик проверяет партию зёрен"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
