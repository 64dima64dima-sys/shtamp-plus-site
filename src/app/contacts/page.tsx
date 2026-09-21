"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contacts() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, comment }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setContact("");
        setComment("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50">
      {/* ===== HERO-СЕКЦИЯ ===== */}
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Свяжитесь с нами
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Ответим на вопросы, поможем рассчитать стоимость и сроки заказа.
        </p>
      </section>

      {/* ===== КОНТАКТЫ + КАРТА ===== */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#1A3A6C] mb-6">
            Контактная информация
          </h2>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <p>г. Саратов, ул. имени Н.Г. Чернышевского, 100</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:+78453455883" className="hover:text-[#1A3A6C] font-medium">
                +7 (845) 34-55-83
              </a>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">✉️</span>
              <a href="mailto:info@rashtamp.ru" className="hover:text-[#1A3A6C] font-medium">
                info@rashtamp.ru
              </a>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🕒</span>
              <p>Пн–Пт: 9:00–17:00</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abc4766f01fcc02418019ff67af35c084d64d14e104198a46d91e234e0d3e8037&source=constructor"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Карта Штамп Плюс на Яндекс.Картах"
          />
        </div>
      </section>

      {/* ===== МЕССЕНДЖЕРЫ ===== */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
          Мы в мессенджерах
        </h2>
        <p className="mt-3 text-gray-600">
          Напишите нам в удобном для вас мессенджере — ответим быстро.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition text-gray-800 font-medium"
          >
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.09c-.22.61-1.28 1.17-1.78 1.24-.46.06-1.03.08-1.66-.11-.38-.11-.88-.28-1.51-.55-2.65-1.15-4.38-3.81-4.51-3.99-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.19.24-.27.52-.33.69-.33.17 0 .34 0 .49.01.16.01.37-.06.57.44.21.51.72 1.76.79 1.89.06.13.11.27.02.44-.09.18-.13.29-.26.44-.13.15-.27.34-.39.46-.13.13-.27.27-.12.53.15.26.68 1.11 1.46 1.8 1 .89 1.84 1.17 2.1 1.3.26.13.41.11.56-.07.15-.18.65-.75.82-1.01.17-.26.35-.22.58-.13.24.09 1.5.71 1.76.84.26.13.43.19.49.3.06.11.06.64-.16 1.25z"/>
            </svg>
            WhatsApp
          </a>

          <a
            href="https://t.me/shtamp_plus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition text-gray-800 font-medium"
          >
            <svg className="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.26-1.91.178-.184 3.266-2.99 3.326-3.24.008-.03.014-.143-.053-.21-.067-.067-.165-.044-.236-.026-.101.023-1.71 1.087-4.826 3.19-.457.313-.87.466-1.24.458-.407-.008-1.19-.23-1.772-.42-.714-.232-1.282-.354-1.234-.746.024-.204.31-.413.858-.627 3.36-1.463 5.6-2.427 6.72-2.892 3.202-1.332 3.867-1.563 4.302-1.57z"/>
            </svg>
            Telegram
          </a>

          <a
            href="https://vk.ru/im/channels/-241566676"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition text-gray-800 font-medium"
          >
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.586-1.496c.596-.19 1.365 1.265 2.18 1.833.616.429 1.084.335 1.084.335l2.178-.03s1.139-.071.599-.966c-.044-.073-.315-.664-1.62-1.876-1.365-1.267-1.182-1.062.462-3.256.999-1.329 1.398-2.14 1.273-2.488-.12-.33-.86-.243-.86-.243l-2.45.015s-.182-.025-.316.056c-.132.08-.216.265-.216.265s-.39 1.037-.909 1.918c-1.096 1.86-1.533 1.958-1.712 1.842-.419-.27-.314-1.084-.314-1.663 0-1.809.274-2.563-.534-2.758-.268-.065-.465-.108-1.15-.115-.88-.009-1.625.003-2.047.21-.281.137-.498.443-.366.46.163.022.533.1.729.367.253.345.244 1.12.244 1.12s.145 2.128-.339 2.392c-.332.181-.788-.188-1.766-1.876-.501-.865-.88-1.822-.88-1.822s-.073-.178-.203-.274c-.158-.116-.379-.153-.379-.153l-2.328.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.823 4.265 3.888 6.413c1.893 1.968 4.043 1.838 4.043 1.838h.974z"/>
            </svg>
            ВКонтакте
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition text-gray-800 font-medium"
          >
            <span className="w-6 h-6 flex items-center justify-center font-bold text-purple-600">M</span>
            MAX
          </a>
        </div>
      </section>

      {/* ===== QR-КОДЫ ===== */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
            Подписывайтесь на наши каналы
          </h2>
          <p className="mt-3 text-gray-600">
            Акции, новинки и полезные материалы для бизнеса — в наших соцсетях.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-gray-50 p-4 rounded-xl shadow-md">
                <Image
                  src="/images/qr-telegram.png"
                  alt="QR-код Telegram-канала Штамп Плюс"
                  width={180}
                  height={180}
                />
              </div>
              <a
                href="https://t.me/shtamp_plus"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#1A3A6C] font-semibold hover:text-[#D4AF37] transition"
              >
                Мы в Telegram →
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-50 p-4 rounded-xl shadow-md">
                <Image
                  src="/images/qr-vk.png"
                  alt="QR-код группы ВКонтакте Штамп Плюс"
                  width={180}
                  height={180}
                />
              </div>
              <a
                href="https://vk.ru/im/channels/-241566676"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#1A3A6C] font-semibold hover:text-[#D4AF37] transition"
              >
                Мы во ВКонтакте →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ФОРМА ЗАЯВКИ ===== */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C] text-center">
          Оставьте заявку
        </h2>
        <p className="mt-3 text-gray-600 text-center">
          Заполните форму — мы свяжемся с вами в ближайшее время.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 bg-white rounded-xl shadow-md p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Иван Иванов"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон или Email
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              placeholder="+7 (___) ___-__-__ или mail@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Комментарий
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="Опишите, что вам нужно: вид продукции, тираж, сроки..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3A6C] focus:border-transparent outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-[#D4AF37] text-[#1A3A6C] font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Отправка..." : "Отправить заявку"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              Спасибо! Ваша заявка отправлена, мы свяжемся с вами в ближайшее время.
            </p>
          )}

          {error && (
            <p className="text-red-600 text-center font-medium">
              Произошла ошибка. Попробуйте позвонить нам по телефону.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}