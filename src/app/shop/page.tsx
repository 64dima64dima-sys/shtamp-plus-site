"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number | string;
  cartPrice?: number;
  image: string;
  category: string;
  note?: string;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type FlyItem = {
  id: number;
  startX: number;
  startY: number;
  image: string;
};

const products: Product[] = [
  { id: 1, title: "Печать «Тродат» (автоматическая, модель 2)", price: 1500, image: "/images/shop/trodat-avtomat-2.jpg", category: "Печати и штампы" },
  { id: 2, title: "Печать GRM (автоматическая, модель 2)", price: "от 900 ₽", cartPrice: 900, image: "/images/shop/grm-avtomat-2.jpg", category: "Печати и штампы" },
  { id: 3, title: "Печать «Врача» диаметр д.24-30мм", price: 1200, image: "/images/shop/trodat-avtomat-1.jpg", category: "Печати и штампы" },
  { id: 4, title: "Печать GRM (автоматическая, модель 1)", price: 2700, image: "/images/shop/grm-avtomat-1.jpg", category: "Печати и штампы" },
  { id: 5, title: "Печать ручная", price: 1200, image: "/images/shop/ruchnaya.jpg", category: "Печати и штампы" },
  { id: 6, title: "Полуавтоматическая печать", price: 1200, image: "/images/shop/poluavtomaticheskay.jpg", category: "Печати и штампы" },
  { id: 7, title: "Печать «Тродат» (карманная)", price: 1500, image: "/images/shop/trodat-karmannaya.jpg", category: "Печати и штампы" },
  { id: 8, title: "Визитки (от 100 шт)", price: 700, image: "/images/shop/vizitki.jpg", category: "Полиграфия" },
  { id: 9, title: "Бланки документов", price: "Расчитывается индивидуально", image: "/images/shop/blanki.jpg", category: "Полиграфия" },
  { id: 10, title: "Листовки и флаеры", price: "Расчитывается индивидуально", image: "/images/shop/listovki.jpg", category: "Полиграфия" },
  { id: 11, title: "Баннеры", price: "Расчитывается индивидуально на кв/м", image: "/images/shop/banner.jpg", category: "Наружная реклама" },
  { id: 12, title: "Таблички из пластика", price: "Расчитывается индивидуально на кв/м", image: "/images/shop/tablichki-plastik.jpg", category: "Наружная реклама" },
  { id: 13, title: "Таблички из композита", price: "Расчитывается индивидуально на кв/м", image: "/images/shop/tablichki-kompozit.jpg", category: "Наружная реклама" },
  { id: 14, title: "Информационные стенды", price: "от 4500 ₽", cartPrice: 4500, image: "/images/shop/stendy.jpg", category: "Наружная реклама" },
  { id: 15, title: "Кружки с логотипом", price: "от 250 ₽", cartPrice: 250, image: "/images/shop/kruzhki.jpg", category: "Сувенирная продукция" },
  { id: 16, title: "Футболки с печатью", price: 1700, image: "/images/shop/futbolka.jpg", category: "Сувенирная продукция", note: "Принт на футболке заказчика — 700 ₽" },
  { id: 17, title: "Брелоки с логотипом", price: 99, image: "/images/shop/breloki.jpg", category: "Сувенирная продукция" },
  { id: 18, title: "Ручки с логотипом", price: 49, image: "/images/shop/ruchki.jpg", category: "Сувенирная продукция" },
  { id: 19, title: "Пакеты с печатью", price: "от 350 ₽", cartPrice: 350, image: "/images/shop/pakety.jpg", category: "Сувенирная продукция" },
  { id: 20, title: "Создание сайтов", price: 30000, image: "/images/shop/saity.jpg", category: "IT-услуги" },
  { id: 21, title: "Продвижение сайтов", price: 10000, image: "/images/shop/produizhenie.jpg", category: "IT-услуги" },
  { id: 22, title: "SEO-оптимизация", price: 10000, image: "/images/shop/seo.jpg", category: "IT-услуги" },
  { id: 23, title: "Разработка ВК-бота", price: 5000, image: "/images/shop/vk-bot.jpg", category: "IT-услуги" },
  { id: 24, title: "Разработка Telegram-бота", price: 5000, image: "/images/shop/tg-bot.jpg", category: "IT-услуги" },
];

const categoryOrder = [
  "Печати и штампы",
  "Полиграфия",
  "Наружная реклама",
  "Сувенирная продукция",
  "IT-услуги",
];

const categoryAnchors: Record<string, string> = {
  "Печати и штампы": "pechati-i-shtampy",
  "Полиграфия": "poligrafiya",
  "Наружная реклама": "naruzhnaya-reklama",
  "Сувенирная продукция": "suvenirnaya-produktsiya",
  "IT-услуги": "it-uslugi",
};

const CART_STORAGE_KEY = "shtamp-cart";

export default function Shop() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [flyItems, setFlyItems] = useState<FlyItem[]>([]);
  const [cartPulse, setCartPulse] = useState(false);
  const cartIconRef = useRef<HTMLDivElement>(null);
  const cartSectionRef = useRef<HTMLElement>(null);

  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");
  const [inn, setInn] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) setCart(JSON.parse(saved));
    } catch {}
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  }, []);

  function getNumericPrice(product: Product): number | null {
    if (typeof product.price === "number") return product.price;
    if (typeof product.cartPrice === "number") return product.cartPrice;
    return null;
  }

  function addToCart(product: Product, e: React.MouseEvent<HTMLButtonElement>) {
    const numericPrice = getNumericPrice(product);
    if (numericPrice === null) return;

    const buttonRect = e.currentTarget.getBoundingClientRect();
    const flyId = Date.now() + Math.random();

    setFlyItems((prev) => [
      ...prev,
      {
        id: flyId,
        startX: buttonRect.left + buttonRect.width / 2,
        startY: buttonRect.top + buttonRect.height / 2,
        image: product.image,
      },
    ]);

    setCartPulse(true);

    setTimeout(() => {
      setFlyItems((prev) => prev.filter((item) => item.id !== flyId));
    }, 900);

    setTimeout(() => setCartPulse(false), 400);

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: numericPrice,
          quantity: 1,
        },
      ];
    });
  }

  function updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function getTotalPrice() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function getTotalItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getQuantityInCart(productId: number) {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  }

  function resetForm() {
    setName("");
    setPhone("");
    setPreferredTime("");
    setEmail("");
    setAddress("");
    setDelivery("");
    setPayment("");
    setInn("");
    setComment("");
  }

  function scrollToCart() {
    cartSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          preferredTime,
          email,
          address,
          delivery,
          payment,
          inn,
          comment,
          items: cart,
          total: getTotalPrice(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setCart([]);
        resetForm();
        setFormOpen(false);
        setTimeout(() => setSuccess(false), 8000);
      } else {
        setError(data.error || "Произошла ошибка. Попробуйте позвонить нам.");
      }
    } catch {
      setError("Произошла ошибка. Попробуйте позвонить нам по телефону.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style jsx global>{`
        @keyframes flyToCart {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(
              calc(var(--fly-x) * 0.5),
              calc(var(--fly-y) * 0.5 - 120px)
            ) scale(0.7);
            opacity: 0.9;
          }
          100% {
            transform: translate(var(--fly-x), var(--fly-y)) scale(0.3);
            opacity: 0;
          }
        }
        .fly-item {
          animation: flyToCart 0.85s cubic-bezier(0.4, 0, 0.6, 1) forwards;
        }
        @keyframes cartPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
        .cart-pulse {
          animation: cartPulse 0.4s ease-out;
        }
      `}</style>

      <main className="bg-gray-50 relative">
        {flyItems.map((item) => {
          const cartRect = cartIconRef.current?.getBoundingClientRect();
          const endX = cartRect ? cartRect.left + cartRect.width / 2 : window.innerWidth - 50;
          const endY = cartRect ? cartRect.top + cartRect.height / 2 : 100;
          const deltaX = endX - item.startX;
          const deltaY = endY - item.startY;

          return (
            <div
              key={item.id}
              className="fly-item fixed z-[60] w-14 h-14 rounded-full bg-white shadow-xl overflow-hidden pointer-events-none"
              style={{
                left: item.startX - 28,
                top: item.startY - 28,
                "--fly-x": `${deltaX}px`,
                "--fly-y": `${deltaY}px`,
              } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

        <div
          ref={cartIconRef}
          onClick={scrollToCart}
          className={`fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full bg-[#1A3A6C] shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ${
            cartPulse ? "cart-pulse" : ""
          }`}
          title="Перейти в корзину"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          {isLoaded && getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[24px] h-6 px-1 flex items-center justify-center border-2 border-white">
              {getTotalItems()}
            </span>
          )}
        </div>

        <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
            Магазин
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Печати, полиграфия, наружная реклама, сувенирка и IT-услуги — закажите онлайн.
          </p>
        </section>

        <section className="px-3 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {categoryOrder.map((category) => {
            const categoryProducts = products.filter(
              (product) => product.category === category
            );

            return (
              <div
                key={category}
                id={categoryAnchors[category]}
                className="scroll-mt-24"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A3A6C] mb-4 sm:mb-8">
                  {category}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                  {categoryProducts.map((product) => {
                    const quantityInCart = getQuantityInCart(product.id);
                    const isPurchasable = getNumericPrice(product) !== null;

                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
                      >
                        <div className="relative w-full aspect-square">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>

                        <div className="p-3 sm:p-5 flex flex-col flex-1">
                          <h3 className="font-bold text-[#1A3A6C] text-xs sm:text-base leading-tight">
                            {product.title}
                          </h3>

                          <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-semibold text-[#D4AF37]">
                            {typeof product.price === "number"
                              ? `${product.price.toLocaleString("ru-RU")} ₽`
                              : product.price}
                          </p>

                          {product.note && (
                            <p className="mt-1 text-[10px] sm:text-xs text-gray-400">
                              {product.note}
                            </p>
                          )}

                          <div className="mt-auto pt-2 sm:pt-4">
                            {isPurchasable ? (
                              <button
                                onClick={(e) => addToCart(product, e)}
                                className="w-full bg-[#1A3A6C] text-white font-semibold text-xs sm:text-base py-1.5 sm:py-2 rounded-lg hover:opacity-90 transition"
                              >
                                {quantityInCart > 0
                                  ? `В корзине (${quantityInCart})`
                                  : "В корзину"}
                              </button>
                            ) : (
                              <a
                                href="/contacts"
                                className="block text-center w-full bg-[#1A3A6C] text-white font-semibold text-xs sm:text-base py-1.5 sm:py-2 rounded-lg hover:opacity-90 transition"
                              >
                                Узнать цену
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {category === "Печати и штампы" && (
                  <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mt-6 max-w-4xl mx-auto text-center">
                    <p className="text-sm sm:text-base text-gray-700">
                      У нас есть{" "}
                      <strong className="text-[#1A3A6C]">
                        весь ассортимент оснасток
                      </strong>{" "}
                      — ручные, автоматические и полуавтоматические печати.
                      Если не нашли нужную модель — напишите нам, подберём под
                      вашу задачу.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <section className="px-3 sm:px-6 max-w-4xl mx-auto mb-6">
          <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-[#1A3A6C] font-bold text-lg sm:text-xl mb-2 flex items-center gap-2">
              ⚠️ Важно
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Все цены примерны. Наши сотрудники обработают ваш заказ и перезвонят
              вам в удобное для вас время для уточнения цены.
            </p>
          </div>
        </section>

        <section
          ref={cartSectionRef}
          className="px-3 sm:px-6 pb-16 max-w-4xl mx-auto scroll-mt-24"
        >
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3A6C]">
              Корзина {cart.length > 0 && `(${getTotalItems()} товаров)`}
            </h2>

            {success && (
              <div className="mt-4 bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                <p className="text-green-700 font-medium">
                  ✅ Спасибо! Ваш заказ отправлен. Мы свяжемся с вами в указанное время.
                </p>
              </div>
            )}

            {cart.length === 0 && !success ? (
              <p className="mt-4 text-gray-500">
                Корзина пуста. Добавьте товары из каталога выше.
              </p>
            ) : cart.length > 0 ? (
              <>
                <div className="mt-6 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-100 pb-4"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-[#1A3A6C]">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.price.toLocaleString("ru-RU")} ₽ за единицу
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-[#1A3A6C] font-bold hover:bg-gray-50 transition"
                        >
                          −
                        </button>

                        <input
                          type="number"
                          min={1}
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          className="w-14 text-center border border-gray-300 rounded-lg py-1"
                        />

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-[#1A3A6C] font-bold hover:bg-gray-50 transition"
                        >
                          +
                        </button>
                      </div>

                      <p className="md:w-28 text-right font-semibold text-[#1A3A6C]">
                        {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Удалить товар"
                        className="text-gray-400 hover:text-red-500 transition text-xl self-end md:self-auto"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-lg sm:text-xl font-bold text-[#1A3A6C]">
                    Итого:{" "}
                    <span className="text-[#D4AF37]">
                      {getTotalPrice().toLocaleString("ru-RU")} ₽
                    </span>
                  </p>

                  <button
                    onClick={() => setFormOpen(!formOpen)}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D4AF37] text-[#1A3A6C] font-semibold rounded-lg hover:opacity-90 transition"
                  >
                    {formOpen ? "Скрыть форму" : "Отправить заказ"}
                  </button>
                </div>

                {formOpen && (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 pt-8 border-t border-gray-200 space-y-4"
                  >
                    <h3 className="text-xl font-bold text-[#1A3A6C]">
                      Оформление заказа
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ваше имя <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Иван Иванов"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          placeholder="+7 (___) ___-__-__"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Удобное время для звонка <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        required
                        placeholder="Например: будни с 10:00 до 15:00"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-gray-400">(по желанию)</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="mail@example.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Адрес доставки <span className="text-gray-400">(по желанию)</span>
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="г. Саратов, ул. ..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Способ получения <span className="text-gray-400">(по желанию)</span>
                        </label>
                        <select
                          value={delivery}
                          onChange={(e) => setDelivery(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="">Не выбрано</option>
                          <option value="Самовывоз">Самовывоз</option>
                          <option value="Доставка по Саратову">Доставка по Саратову</option>
                          <option value="Доставка по России">Доставка по России</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Способ оплаты <span className="text-gray-400">(по желанию)</span>
                        </label>
                        <select
                          value={payment}
                          onChange={(e) => setPayment(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="">Не выбрано</option>
                          <option value="Наличные">Наличные</option>
                          <option value="Карта">Карта</option>
                          <option value="Безнал (для юр. лиц)">Безнал (для юр. лиц)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ИНН <span className="text-gray-400">(по желанию)</span>
                      </label>
                      <input
                        type="text"
                        value={inn}
                        onChange={(e) => setInn(e.target.value)}
                        placeholder="Для юр. лиц и ИП"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Комментарий <span className="text-gray-400">(по желанию)</span>
                      </label>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        placeholder="Что-то важное для нас?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1A3A6C] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Отправка..." : "Подтвердить заказ"}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                    </p>
                  </form>
                )}
              </>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}