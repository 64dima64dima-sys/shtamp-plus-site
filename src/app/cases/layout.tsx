import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наши работы — Штамп Плюс",
  description:
    "Примеры выполненных работ рекламного агентства Штамп Плюс: печати, визитки, баннеры, вывески, стенды, сувенирная продукция. Портфолио в Саратове.",
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}