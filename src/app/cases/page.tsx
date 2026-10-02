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
      { id: 1, title: "Печать №1", description: "Изготовление печати", image: "/images/cases/shtamp_1.jpg", price: null },
      { id: 2, title: "Печать №2", description: "Изготовление печати", image: "/images/cases/shtamp_2.jpg", price: null },
      { id: 3, title: "Печать №3", description: "Изготовление печати", image: "/images/cases/shtamp_3.jpg", price: null },
      { id: 4, title: "Печать №4", description: "Изготовление печати", image: "/images/cases/shtamp_4.jpg", price: null },
      { id: 5, title: "Печать №5", description: "Изготовление печати", image: "/images/cases/shtamp_5.jpg", price: null },
      { id: 6, title: "Печать №6", description: "Изготовление печати", image: "/images/cases/shtamp_6.jpg", price: null },
      { id: 7, title: "Печать №7", description: "Изготовление печати", image: "/images/cases/shtamp_7.jpg", price: null },
      { id: 8, title: "Печать №8", description: "Изготовление печати", image: "/images/cases/shtamp_8.jpg", price: null },
    ],
  },
  {
    id: "poligrafiya",
    title: "Полиграфия",
    cases: [
      { id: 9, title: "Визитки", description: "Изготовление визиток с двусторонней печатью и ламинацией", image: "/images/cases/business-cards.jpg", price: null },
      { id: 10, title: "Полиграфия №1", description: "Печатная продукция", image: "/images/cases/poligrafiy_1.jpg", price: null },
      { id: 11, title: "Полиграфия №2", description: "Печатная продукция", image: "/images/cases/poligrafiy_2.jpg", price: null },
      { id: 12, title: "Полиграфия №3", description: "Печатная продукция", image: "/images/cases/poligrafiy_3.jpg", price: null },
      { id: 13, title: "Полиграфия №4", description: "Печатная продукция", image: "/images/cases/poligrafiy_4.jpg", price: null },
      { id: 14, title: "Полиграфия №5", description: "Печатная продукция", image: "/images/cases/poligrafiy_5.jpg", price: null },
      { id: 15, title: "Полиграфия №6", description: "Печатная продукция", image: "/images/cases/poligrafiy_6.jpg", price: null },
    ],
  },
  {
    id: "naruzhnaya-reklama",
    title: "Наружная реклама",
    cases: [
      { id: 16, title: "Наружная реклама (PRIVAT)", description: "Печать и размещение рекламных щитов", image: "/images/cases/billboard-1.jpg", price: null },
      { id: 17, title: "Наружная реклама (KFC)", description: "Производство и монтаж билбордов", image: "/images/cases/billboard-2.jpg", price: null },
      { id: 18, title: "Дизайн билборда", description: "Разработка макета и печать билборда", image: "/images/cases/billboard-3.jpg", price: null },
      { id: 19, title: "Информационный стенд №1", description: "Производство стендов", image: "/images/cases/stand_1.jpg", price: null },
      { id: 20, title: "Информационный стенд №2", description: "Производство стендов", image: "/images/cases/stand_2.jpg", price: null },
      { id: 21, title: "Информационный стенд №3", description: "Производство стендов", image: "/images/cases/stand_3.jpg", price: null },
      { id: 22, title: "Информационный стенд №4", description: "Производство стендов", image: "/images/cases/stand_4.jpg", price: null },
      { id: 23, title: "Информационный стенд №5", description: "Производство стендов", image: "/images/cases/stand_5.jpg", price: null },
      { id: 24, title: "Информационный стенд №6", description: "Производство стендов", image: "/images/cases/stand_6.jpg", price: null },
      { id: 25, title: "Информационный стенд №7", description: "Производство стендов", image: "/images/cases/stand_7.jpg", price: null },
      { id: 26, title: "Информационный стенд №8", description: "Производство стендов", image: "/images/cases/stand_8.jpg", price: null },
      { id: 27, title: "Информационный стенд №9", description: "Производство стендов", image: "/images/cases/stand_9.jpg", price: null },
    ],
  },
  {
    id: "suvenirnaya-produktsiya",
    title: "Сувенирная продукция",
    cases: [
      { id: 28, title: "Сувенирные кружки", description: "Полноцветная сублимационная печать на кружках", image: "/images/cases/mugs.jpg", price: null },
      { id: 29, title: "Корпоративный мерч", description: "Комплексное брендирование", image: "/images/cases/merch.jpg", price: null },
      { id: 30, title: "Сувенирка №1", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_1.jpg", price: null },
      { id: 31, title: "Сувенирка №2", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_2.jpg", price: null },
      { id: 32, title: "Сувенирка №3", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_3.jpg", price: null },
      { id: 33, title: "Сувенирка №4", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_4.jpg", price: null },
      { id: 34, title: "Сувенирка №5", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_5.jpg", price: null },
      { id: 35, title: "Сувенирка №6", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_6.jpg", price: null },
      { id: 36, title: "Сувенирка №7", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_7.jpg", price: null },
      { id: 37, title: "Сувенирка №8", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_8.jpg", price: null },
      { id: 38, title: "Сувенирка №9", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_9.jpg", price: null },
      { id: 39, title: "Сувенирка №10", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_10.jpg", price: null },
      { id: 40, title: "Сувенирка №11", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_11.jpg", price: null },
      { id: 41, title: "Сувенирка №12", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_12.jpg", price: null },
      { id: 42, title: "Сувенирка №13", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_13.jpg", price: null },
      { id: 43, title: "Сувенирка №14", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_14.jpg", price: null },
      { id: 44, title: "Сувенирка №15", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_15.jpg", price: null },
      { id: 45, title: "Сувенирка №16", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_16.jpg", price: null },
      { id: 46, title: "Сувенирка №17", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_17.jpg", price: null },
      { id: 47, title: "Сувенирка №18", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_18.jpg", price: null },
      { id: 48, title: "Сувенирка №19", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_19.jpg", price: null },
      { id: 49, title: "Сувенирка №20", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_20.jpg", price: null },
      { id: 50, title: "Сувенирка №21", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_21.jpg", price: null },
      { id: 51, title: "Сувенирка №22", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_22.jpg", price: null },
      { id: 52, title: "Сувенирка №23", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_23.jpg", price: null },
      { id: 53, title: "Сувенирка №24", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_24.jpg", price: null },
      { id: 54, title: "Сувенирка №25", description: "Сувенирная продукция с логотипом", image: "/images/cases/Suvenirka_25.jpg", price: null },
    ],
  },
  {
    id: "it-uslugi",
    title: "IT-услуги",
    cases: [],
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
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Наши работы
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Несколько примеров выполненных заказов — от сувенирной продукции до
          наружной рекламы.
        </p>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto space-y-6">
        {categories.map((category) => {
          const isOpen = openCategories[category.id];
          const isItServices = category.id === "it-uslugi";

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
                  {isItServices ? (
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://t.me/shtamp_plus_chat_bot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#1A3A6C] font-semibold hover:text-[#D4AF37] transition"
                        >
                          <span>✈️</span>
                          <span>Telegram-бот</span>
                          <span className="ml-auto text-sm text-gray-500">
                            @shtamp_plus_chat_bot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vk.ru/club241562222"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#1A3A6C] font-semibold hover:text-[#D4AF37] transition"
                        >
                          <span>💬</span>
                          <span>ВК-бот</span>
                          <span className="ml-auto text-sm text-gray-500">
                            vk.ru/club241562222
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://rashtamp.ru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#1A3A6C] font-semibold hover:text-[#D4AF37] transition"
                        >
                          <span>🌐</span>
                          <span>Сайт</span>
                          <span className="ml-auto text-sm text-gray-500">
                            rashtamp.ru
                          </span>
                        </a>
                      </li>
                    </ul>
                  ) : category.cases.length === 0 ? (
                    <p className="text-gray-500">
                      Скоро здесь появятся примеры работ.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.cases.map((item) => (
                        <div
                          key={item.id}
                          className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                          <div className="relative w-full aspect-square">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover"
                            />
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