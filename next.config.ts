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

      // ===== 2. ТЕХНИЧЕСКИЕ РЕДИРЕКТЫ WORDPRESS (на главную) =====
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