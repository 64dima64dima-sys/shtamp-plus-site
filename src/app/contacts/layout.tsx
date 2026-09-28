import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Штамп Плюс",
  description:
    "Контакты рекламного агентства Штамп Плюс в Саратове: адрес, телефон, email, режим работы. Форма заявки, карта, мессенджеры.",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}