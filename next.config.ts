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

      // ===== 2. РЕДИРЕКТЫ ДЛЯ СТАРЫХ URL (кириллица, теги, старые страницы) =====
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
      
      // УДАЛЕНО: редиректы для /blog и /blog/:path*
      // Теперь у нас здесь настоящий блог.
    ];
  },
};

export default nextConfig;