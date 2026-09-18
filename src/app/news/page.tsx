"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Post = {
  id: string;
  date: string;
  text: string;
  imageUrl: string | null;
};

export default function News() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();

        if (data.success) {
          setPosts(data.posts);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <main className="bg-gray-50">
      {/* ===== HERO-СЕКЦИЯ ===== */}
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Новости и акции
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Свежие новости, акции и полезные материалы для бизнеса.
        </p>
      </section>

      {/* ===== СЕКЦИЯ С ПОСТАМИ ===== */}
      {loading && (
        <p className="text-center text-gray-500 py-16">Загрузка новостей…</p>
      )}

      {!loading && error && (
        <p className="text-center text-red-600 py-16">
          Не удалось загрузить новости. Попробуйте позже.
        </p>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="text-center text-gray-600 py-16 max-w-xl mx-auto px-6">
          Пока новостей нет. Подпишитесь на наш Telegram-канал, чтобы не
          пропустить обновления.
        </p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 py-16">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {post.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.imageUrl}
                  alt=""
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">
                  {formatDate(post.date)}
                </p>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {post.text}
                </p>

                <a
                  href={`https://t.me/shtamp_plus/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#1A3A6C] font-semibold hover:text-[#D4AF37] transition text-sm"
                >
                  Читать в Telegram →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ===== КНОПКИ ПОДПИСКИ ===== */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
            Подписывайтесь
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/shtamp_plus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Telegram
            </a>

            <a
              href="https://vk.ru/im/channels/-241566676"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#1A3A6C] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* ===== QR-КОДЫ ===== */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
          Или отсканируйте QR-код
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="bg-white rounded-xl shadow-md p-6 inline-block">
            <Image
              src="/images/qr-telegram.png"
              alt="QR-код Telegram-канала Штамп Плюс"
              width={180}
              height={180}
            />
            <p className="mt-3 text-sm text-gray-600">Мы в Telegram →</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 inline-block">
            <Image
              src="/images/qr-vk.png"
              alt="QR-код ВКонтакте Штамп Плюс"
              width={180}
              height={180}
            />
            <p className="mt-3 text-sm text-gray-600">Мы в ВКонтакте →</p>
          </div>
        </div>
      </section>
    </main>
  );
}