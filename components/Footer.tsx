export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-[#e2d5c4] mt-8">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <p className="font-serif text-lg">Кварта</p>
          <p className="opacity-70 mt-1">Обжарка кофе в Минске с 2019 года.</p>
        </div>
        <div>
          <p className="font-medium mb-2">Мастерская</p>
          <p className="opacity-70">Минск, ул. Короля, 9</p>
          <p className="opacity-70">Пн–Пт 8:00–20:00</p>
          <p className="opacity-70">Сб–Вс 10:00–18:00</p>
        </div>
        <div>
          <p className="font-medium mb-2">Связь</p>
          <p className="opacity-70">+375 (29) 123-45-67</p>
          <p className="opacity-70">hello@kvarta.by</p>
          <p className="opacity-70">Instagram: @kvarta.coffee</p>
        </div>
        <div>
          <p className="font-medium mb-2">Доставка</p>
          <p className="opacity-70">Пятница по Минску</p>
          <p className="opacity-70">От 50 BYN — бесплатно</p>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-10 text-xs opacity-50">
        © {new Date().getFullYear()} Кварта. Все права защищены.
      </p>
    </footer>
  );
}
