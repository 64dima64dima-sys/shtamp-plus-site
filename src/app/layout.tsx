import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://rashtamp.ru"),
  title: "Штамп Плюс — Рекламное агентство в Саратове",
  description: "Печати, штампы, полиграфия, наружная реклама и сувенирная продукция в Саратове.",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Штамп Плюс — Рекламное агентство в Саратове",
    description:
      "Печати, штампы, полиграфия, наружная реклама и сувенирная продукция. Собственное производство в Саратове.",
    url: "https://rashtamp.ru",
    siteName: "Штамп Плюс",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Штамп Плюс — Рекламное агентство в Саратове",
    description:
      "Печати, штампы, полиграфия, наружная реклама и сувенирная продукция. Собственное производство в Саратове.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />

        {/* Knocket — онлайн-чат */}
        <Script
          src="https://trtc.io/knocket-sdk/sdk.js?identifier=f5fce5aead53166d8f&v=1789724698066"
          strategy="lazyOnload"
        />

        {/* Яндекс.Метрика */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=112838071', 'ym');

              ym(112838071, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/112838071"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}