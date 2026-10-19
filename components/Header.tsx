export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#fffaf3]/85 border-b border-[#e2d5c4]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-tight">
          Кварта
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#fresh" className="hover:text-[#8a4a25]">Свежесть</a>
          <a href="#coffee" className="hover:text-[#8a4a25]">Кофе</a>
          <a href="#sub" className="hover:text-[#8a4a25]">Подписка</a>
          <a href="#delivery" className="hover:text-[#8a4a25]">Доставка</a>
        </nav>
        <a
          href="#form"
          className="text-sm rounded-lg bg-[#8a4a25] text-[#fffaf3] px-4 py-2 hover:bg-[#6f3a1d] transition"
        >
          Заявка
        </a>
      </div>
    </header>
  );
}
