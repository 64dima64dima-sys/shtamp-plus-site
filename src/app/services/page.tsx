import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <main className="bg-gray-50">
      {/* ===== ЗАГОЛОВОК СТРАНИЦЫ ===== */}
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Наши услуги
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Полный цикл — от печатей и визиток до наружной рекламы и сувенирной продукции.
        </p>
      </section>

      {/* ===== УСЛУГА 1: ПЕЧАТИ И ШТАМПЫ ===== */}
      <section
        id="pechati-i-shtampy"
        className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
            Печати и штампы
          </h2>
          <p className="mt-4 text-gray-700">
            Изготавливаем печати и штампы для ИП, ООО и частных лиц на собственном
            оборудовании. Подбираем оснастку под ваши задачи — от простого карманного
            штампа до автоматической печати повышенной прочности.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔️ Печати организаций и ИП</li>
            <li>✔️ Именные и должностные штампы</li>
            <li>✔️ Факсимиле подписи</li>
            <li>✔️ Готовность от 30 минут</li>
          </ul>

          <p className="mt-4 text-sm text-gray-500">
            Стоимость: от 150 до 750 ₽ в зависимости от типа оснастки.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="inline-block px-6 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Заказать
            </Link>
            <Link
              href="/cases#pechati-i-shtampy"
              className="inline-block px-6 py-3 bg-white text-[#1A3A6C] font-semibold rounded-lg border-2 border-[#1A3A6C] hover:bg-[#1A3A6C] hover:text-white transition"
            >
              Показать кейсы →
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-square rounded-xl shadow-md overflow-hidden bg-white">
          <Image
            src="/images/services/shtampy.jpg"
            alt="Печати и штампы"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== УСЛУГА 2: ПОЛИГРАФИЯ ===== */}
      <section id="poligrafiya" className="scroll-mt-24 bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative w-full aspect-square rounded-xl shadow-md overflow-hidden bg-gray-50">
            <Image
              src="/images/services/poligrafiya.jpg"
              alt="Полиграфия"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
              Полиграфия
            </h2>
            <p className="mt-4 text-gray-700">
              Печатаем визитки, буклеты, бланки и листовки любым тиражом.
              Поможем с макетом, если его ещё нет, или подготовим к печати
              ваш готовый дизайн.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔️ Визитки (одно- и двусторонние)</li>
              <li>✔️ Буклеты и брошюры</li>
              <li>✔️ Бланки строгой отчётности и документов</li>
              <li>✔️ Листовки и флаеры</li>
            </ul>

            <p className="mt-4 text-sm text-gray-500">
              Например, визитки (1000 шт) — от 800 до 1200 ₽.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-block px-6 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Заказать
              </Link>
              <Link
                href="/cases#poligrafiya"
                className="inline-block px-6 py-3 bg-white text-[#1A3A6C] font-semibold rounded-lg border-2 border-[#1A3A6C] hover:bg-[#1A3A6C] hover:text-white transition"
              >
                Показать кейсы →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== УСЛУГА 3: НАРУЖНАЯ РЕКЛАМА ===== */}
      <section
        id="naruzhnaya-reklama"
        className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
            Наружная реклама
          </h2>
          <p className="mt-4 text-gray-700">
            Производим баннеры, таблички, вывески и информационные стенды —
            для витрин, офисов, фасадов и выставочных мероприятий. Учитываем
            погодостойкость материалов и особенности монтажа.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔️ Баннеры любых размеров</li>
            <li>✔️ Таблички и вывески</li>
            <li>✔️ Информационные и рекламные стенды</li>
            <li>✔️ Помощь с монтажом</li>
          </ul>

          <p className="mt-4 text-sm text-gray-500">
            Баннеры — от 270 ₽/м², таблички — от 270 до 800 ₽.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="inline-block px-6 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Заказать
            </Link>
            <Link
              href="/cases#naruzhnaya-reklama"
              className="inline-block px-6 py-3 bg-white text-[#1A3A6C] font-semibold rounded-lg border-2 border-[#1A3A6C] hover:bg-[#1A3A6C] hover:text-white transition"
            >
              Показать кейсы →
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-square rounded-xl shadow-md overflow-hidden bg-white">
          <Image
            src="/images/services/naruzhka.jpg"
            alt="Наружная реклама"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== УСЛУГА 4: СУВЕНИРНАЯ ПРОДУКЦИЯ ===== */}
      <section id="suvenirnaya-produktsiya" className="scroll-mt-24 bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative w-full aspect-square rounded-xl shadow-md overflow-hidden bg-gray-50">
            <Image
              src="/images/services/suvenirka.jpg"
              alt="Сувенирная продукция"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
              Сувенирная продукция
            </h2>
            <p className="mt-4 text-gray-700">
              Наносим логотип на кружки, брелоки, ручки и пакеты — отличный
              вариант для подарков партнёрам, промо-акций и корпоративных
              мероприятий.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔️ Кружки с логотипом</li>
              <li>✔️ Брелоки</li>
              <li>✔️ Ручки с фирменной символикой</li>
              <li>✔️ Пакеты с печатью</li>
            </ul>

            <p className="mt-4 text-sm text-gray-500">
              Кружки с логотипом — от 300 до 500 ₽.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contacts"
                className="inline-block px-6 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Заказать
              </Link>
              <Link
                href="/cases#suvenirnaya-produktsiya"
                className="inline-block px-6 py-3 bg-white text-[#1A3A6C] font-semibold rounded-lg border-2 border-[#1A3A6C] hover:bg-[#1A3A6C] hover:text-white transition"
              >
                Показать кейсы →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}