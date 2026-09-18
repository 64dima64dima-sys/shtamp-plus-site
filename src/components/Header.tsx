import Link from "next/link";
import Image from "next/image";

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
      <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-wide">
        <Image
          src="/images/logo.png"
          alt="Штамп Плюс"
          width={48}
          height={48}
          className="w-12 h-12 object-contain rounded-lg bg-white p-1"
        />
        <span>
          <span className="text-white">ШТАМП</span>{" "}
          <span className="text-[#D4AF37]">ПЛЮС</span>
        </span>
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