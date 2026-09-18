import Image from "next/image";

export default function News() {
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

      {/* ===== TELEGRAM-ВИДЖЕТ ===== */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
          Наш Telegram-канал
        </h2>
        <p className="mt-3 text-gray-600">
          Подпишитесь, чтобы первыми узнавать об акциях и новинках
        </p>

        <div className="mt-8 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://t.me/s/shtamp_plus?embed=1&mode=tme"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            title="Telegram-канал Штамп Плюс"
          />
        </div>

        <p className="mt-3 text-xs text-gray-400">
          Если виджет не отображается — откройте канал напрямую по ссылке ниже.
        </p>
      </section>

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
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C]">
          Или отсканируйте QR-код
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-12">
          {/* Telegram QR */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6">
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

          {/* VK QR */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6">
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
      </section>
    </main>
  );
}