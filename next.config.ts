import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ===== 1. ТОЧЕЧНЫЕ РЕДИРЕКТЫ СО СТАРЫХ СТРАНИЦ WORDPRESS =====
      {
        source: "/tablichki-saratov-menu",
        destination: "/services#naruzhnaya-reklama",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/category/na-zakaz",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/product/:path*",
        destination: "/cases",
        permanent: true,
      },
      // ⚠️ Правило /shop/:path* УДАЛЕНО — оно конфликтовало с новой страницей /shop

      // ===== 2. РЕДИРЕКТЫ ДЛЯ СТАРЫХ URL (кириллица, теги, старые страницы) =====
      // Старая главная WordPress — кириллица в percent-encoded виде.
      // Next.js не матчит кириллицу в исходном виде, поэтому пишем так.
      {
        source: "/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F",
        destination: "/",
        permanent: true,
      },
      {
        source: "/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F/",
        destination: "/",
        permanent: true,
      },
      // Старые теги WordPress — все на /services
      {
        source: "/tag",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/services",
        permanent: true,
      },
      // Старая страница заказа ПВХ-меню
      {
        source: "/zakaz-pvh-menu",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/zakaz-pvh-menu/",
        destination: "/services",
        permanent: true,
      },

      // ===== 3. ТЕХНИЧЕСКИЕ РЕДИРЕКТЫ WORDPRESS (на главную) =====
      {
        source: "/wp-admin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;