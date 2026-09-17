import Image from "next/image";
import Link from "next/link";

// Массив с данными о выполненных работах.
// Чтобы добавить новый кейс в будущем — достаточно дописать один объект в этот массив.
const cases = [
  {
    id: 1,
    title: "Сувенирные кружки",
    description:
      "Полноцветная сублимационная печать на кружках. Отличный вариант для корпоративных подарков и промо-акций.",
    image: "/images/cases/mugs.jpg",
  },
  {
    id: 2,
    title: "Печать баннеров",
    description:
      "Изготовление наружных баннеров любого размера с проклейкой кармана и установкой люверсов.",
    image: "/images/cases/banner.jpg",
  },
  {
    id: 3,
    title: "Корпоративный мерч",
    description:
      "Комплексное брендирование: футболки, сумки, блокноты, ручки и другая продукция с вашим логотипом.",
    image: "/images/cases/merch.jpg",
  },
  {
    id: 4,
    title: "Информационные стенды",
    description:
      "Производство стендов с алюминиевым профилем и прозрачными карманами для документов и объявлений.",
    image: "/images/cases/stand.jpg",
  },
  {
    id: 5,
    title: "Наружная реклама (PRIVAT)",
    description:
      "Печать и размещение рекламных щитов. Кампания для men's club PRIVAT.",
    image: "/images/cases/billboard-1.jpg",
  },
  {
    id: 6,
    title: "Наружная реклама (KFC)",
    description:
      "Федеральная рекламная кампания KFC. Производство и монтаж билбордов в Саратове.",
    image: "/images/cases/billboard-2.jpg",
  },
  {
    id: 7,
    title: "Дизайн билборда (Семена)",
    description:
      "Разработка макета и печать билборда для весенней распродажи семян.",
    image: "/images/cases/billboard-3.jpg",
  },
  {
    id: 8,
    title: "Визитки",
    description:
      "Изготовление визиток с двусторонней печатью и ламинацией для сотрудников логистической компании.",
    image: "/images/cases/business-cards.jpg",
  },
];

export default function Cases() {
  return (
    <main className="bg-gray-50">
      {/* ===== HERO-СЕКЦИЯ ===== */}
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Наши работы
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Несколько примеров выполненных заказов — от сувенирной продукции до
          наружной рекламы.
        </p>
      </section>

      {/* ===== СЕТКА КАРТОЧЕК ===== */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Обёртка с фиксированным соотношением сторон 4:3 */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1A3A6C]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ПРИЗЫВ К ДЕЙСТВИЮ ===== */}
      <section className="bg-white px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
          Хотите так же?
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Расскажите о своей задаче — подберём решение и сроки под ваш проект.
        </p>
        <Link
          href="/contacts"
          className="inline-block mt-6 px-8 py-3 bg-[#D4AF37] text-[#1A3A6C] font-semibold rounded-lg hover:opacity-90 transition"
        >
          Обсудить проект
        </Link>
      </section>
    </main>
  );
}