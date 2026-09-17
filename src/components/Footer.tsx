export default function Footer() {
  return (
    <footer className="bg-[#12294F] text-gray-200 px-6 py-8 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="text-[#D4AF37] font-semibold mb-1">Штамп Плюс</p>
          <p>г. Саратов, ул. имени Н.Г. Чернышевского, 100</p>
        </div>

        <div>
          <p>Телефон: +7 (845) 34-55-83</p>
          <p>Email: info@rashtamp.ru</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Штамп Плюс. Все права защищены.
      </p>
    </footer>
  );
}