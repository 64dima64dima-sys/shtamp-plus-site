export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#1A3A6C] text-white px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
        Штамп Плюс
      </h1>

      <p className="mt-4 text-xl md:text-2xl text-white">
        Рекламное агентство в Саратове
      </p>

      <p className="mt-6 max-w-xl text-base md:text-lg text-gray-200">
        Изготовление печатей и штампов, полиграфия, наружная реклама, таблички и сувенирная продукция — быстро и качественно.
      </p>

      <a
        href="#contacts"
        className="mt-8 px-6 py-3 bg-[#D4AF37] text-[#1A3A6C] font-semibold rounded-lg hover:opacity-90 transition"
      >
        Связаться с нами
      </a>
    </main>
  );
}