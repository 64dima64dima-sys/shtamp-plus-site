import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости и акции — Штамп Плюс",
  description:
    "Новости, акции и полезные материалы рекламного агентства Штамп Плюс в Саратове. Подпишитесь на наш Telegram-канал.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}