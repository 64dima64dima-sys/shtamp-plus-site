"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type CaseItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string | null;
};

type Category = {
  id: string;
  title: string;
  cases: CaseItem[];
};

const categories: Category[] = [
  {
    id: "pechati-i-shtampy",
    title: "Печати и штампы",
    cases: [
      // TODO: добавить кейсы
    ],
  },
  {
    id: "poligrafiya",
    title: "Полиграфия",
    cases: [
      {
        id: 1,
        title: "Визитки",
        description:
          "Изготовление визиток с двусторонней печатью и ламинацией для сотрудников логистической компании.",
        image: "/images/cases/business-cards.jpg",
        price: null,
      },
    ],
  },
  {
    id: "naruzhnaya-reklama",
    title: "Наружная реклама",
    cases: [
      {
        id: 2,
        title: "Печать баннеров",
        description:
          "Изготовление наружных баннеров любого размера с проклейкой кармана и установкой люверсов.",
        image: "/images/cases/banner.jpg",
        price: null,
      },
      {
        id: 3,
        title: "Информационные стенды",
        description:
          "Производство стендов с алюминиевым профилем и прозрачными карманами для документов и объявлений.",
        image: "/images/cases/stand.jpg",
        price: null,
      },
      {
        id: 4,
        title: "Наружная реклама (PRIVAT)",
        description:
          "Печать и размещение рекламных щитов. Кампания для men's club PRIVAT.",
        image: "/images/cases/billboard-1.jpg",
        price: null,
      },
      {
        id: 5,
        title: "Наружная реклама (KFC)",
        description:
          "Федеральная рекламная кампания KFC. Производство и монтаж билбордов в Саратове.",
        image: "/images/cases/billboard-2.jpg",
        price: null,
      },
      {
        id: 6,
        title: "Дизайн билборда (Семена)",
        description:
          "Разработка макета и печать билборда для весенней распродажи семян.",
        image: "/images/cases/billboard-3.jpg",
        price: null,
      },
    ],
  },
  {
    id: "suvenirnaya-produktsiya",
    title: "Сувенирная продукция",
    cases: [
      {
        id: 7,
        title: "Сувенирные кружки",
        description:
          "Полноцветная сублимационная печать на кружках. Отличный вариант для корпоративных подарков и промо-акций.",
        image: "/images/cases/mugs.jpg",
        price: null,
      },
      {
        id: 8,
        title: "Корпоративный мерч",
        description:
          "Комплексное брендирование: футболки, сумки, блокноты, ручки и другая продукция с вашим логотипом.",
        image: "/images/cases/merch.jpg",
        price: null,
      },
    ],
  },
];

export default function Cases() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      categories.forEach((category) => {
        initial[category.id] = true;
      });
      return initial;
    }
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      const onlyOneOpen: Record<string, boolean> = {};
      categories.forEach((category) => {
        onlyOneOpen[category.id] = category.id === hash;
      });
      setOpenCategories(onlyOneOpen);
    }
  }, []);

  function toggleCategory(id: string) {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

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

      {/* ===== КАТЕГОРИИ КЕЙСОВ ===== */}
      <section className="px-6 py-16 max-w-6xl mx-auto space-y-6">
        {categories.map((category) => {
          const isOpen = openCategories[category.id];

          return (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-24 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h2 className="text-xl md:text-2xl font-bold text-[#1A3A6C]">
                  {category.title}
                </h2>
                <span className="text-[#1A3A6C] text-xl">
                  {isOpen ? "▼" : "►"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6">
                  {category.cases.length === 0 ? (
                    <p className="text-gray-500">
                      Скоро здесь появятся примеры работ.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.cases.map((item) => (
                        <div
                          key={item.id}
                          className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                          <div className="relative w-full aspect-[4/3]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
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
                            {item.price && (
                              <p className="mt-2 text-sm font-semibold text-[#D4AF37]">
                                {item.price}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
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