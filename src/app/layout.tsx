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
        <Script
          src="https://trtc.io/knocket-sdk/sdk.js?identifier=f5fce5aead53166d8f&v=1789724698066"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}