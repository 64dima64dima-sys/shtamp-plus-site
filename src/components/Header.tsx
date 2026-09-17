import Link from "next/link";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="bg-[#1A3A6C] text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-[#D4AF37]">
        Штамп Плюс
      </Link>

      <nav className="mt-3 md:mt-0">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm md:text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-[#D4AF37] transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}