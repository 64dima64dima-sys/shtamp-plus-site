import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Штамп Плюс — Рекламное агентство в Саратове",
  description: "Печати, штампы, полиграфия, наружная реклама и сувенирная продукция в Саратове.",
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
      </body>
    </html>
  );
}