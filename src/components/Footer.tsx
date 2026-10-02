export default function Footer() {
  return (
    <footer className="bg-[#12294F] text-gray-200 px-6 py-8 mt-auto">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="text-[#D4AF37] font-semibold mb-1">Штамп Плюс</p>
          <p>г. Саратов, ул. имени Н.Г. Чернышевского, 100, 2 этаж, офис 222</p>
        </div>

        <div>
          <p>
            Телефон:{" "}
            <a href="tel:+78453455883" className="hover:text-white transition">
              +7 (845) 34-55-83
            </a>
          </p>
          <p>
            Телефон:{" "}
            <a href="tel:+79033824326" className="hover:text-white transition">
              +7 (903) 382-43-26
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@rashtamp.ru" className="hover:text-white transition">
              info@rashtamp.ru
            </a>
          </p>
        </div>

        <div>
          <p className="text-[#D4AF37] font-semibold mb-1">Мы на связи</p>
          <p>
            <a
              href="https://t.me/shtamp_plus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Telegram-канал
            </a>
          </p>
          <p>
            <a
              href="https://t.me/shtamp_plus_64_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Telegram-бот
            </a>
          </p>
          <p>
            <a
              href="https://vk.ru/club241562222"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              ВКонтакте
            </a>
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Штамп Плюс. Все права защищены.
      </p>
    </footer>
  );
}