import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ===== HERO-СЕКЦИЯ ===== */}
      <section className="bg-gradient-to-br from-[#1A3A6C] to-[#2E5A9E] text-white px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#D4AF37]">
          Штамп Плюс
        </h1>

        <p className="mt-4 text-xl md:text-2xl">
          Рекламное агентство в Саратове
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-200">
          Изготовление печатей и штампов, полиграфия, наружная реклама, таблички
          и сувенирная продукция — быстро, качественно, с собственным производством.
        </p>

        <Link
          href="/contacts"
          className="inline-block mt-8 px-8 py-3 bg-[#D4AF37] text-[#1A3A6C] font-semibold rounded-lg hover:opacity-90 transition"
        >
          Связаться с нами
        </Link>
      </section>

      {/* ===== НАШИ УСЛУГИ ===== */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3A6C]">
          Наши услуги
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl">🖋️</div>
            <h3 className="mt-4 text-lg font-semibold text-[#1A3A6C]">
              Печати и штампы
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Изготовление печатей и штампов любой сложности в короткие сроки.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl">🖨️</div>
            <h3 className="mt-4 text-lg font-semibold text-[#1A3A6C]">
              Полиграфия
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Визитки, буклеты, бланки и другая печатная продукция для бизнеса.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl">🪧</div>
            <h3 className="mt-4 text-lg font-semibold text-[#1A3A6C]">
              Наружная реклама
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Баннеры, таблички и вывески — заметно и качественно.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl">🎁</div>
            <h3 className="mt-4 text-lg font-semibold text-[#1A3A6C]">
              Сувенирная продукция
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Кружки, брелоки и другая продукция с вашим логотипом.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ПОЧЕМУ МЫ ===== */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A3A6C]">
            Почему мы
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl">⏳</div>
              <h3 className="mt-3 font-semibold text-[#1A3A6C]">
                Опыт более 10 лет
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Работаем с бизнесом Саратова и области уже больше десяти лет.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl">🏭</div>
              <h3 className="mt-3 font-semibold text-[#1A3A6C]">
                Собственное производство
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Изготавливаем продукцию сами — без посредников и переплат.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-3 font-semibold text-[#1A3A6C]">
                Быстрые сроки
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Большинство заказов выполняем в течение 1-2 рабочих дней.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl">🤝</div>
              <h3 className="mt-3 font-semibold text-[#1A3A6C]">
                Индивидуальный подход
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Учитываем пожелания каждого клиента, от идеи до готового изделия.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== КОНТАКТЫ ===== */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A6C]">
          Свяжитесь с нами
        </h2>

        <p className="mt-4 text-gray-700">
          г. Саратов, ул. имени Н.Г. Чернышевского, 100
        </p>
        <p className="mt-1 text-gray-700">
          Телефон: +7 (845) 34-55-83s
        </p>

        <Link
          href="/contacts"
          className="inline-block mt-8 px-8 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Написать нам
        </Link>
      </section>
    </main>
  );
}