import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Магазин — Штамп Плюс",
  description:
    "Магазин рекламного агентства Штамп Плюс: печати, штампы, полиграфия, наружная реклама, сувенирка, IT-услуги. Онлайн-заказ с доставкой по Саратову.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}