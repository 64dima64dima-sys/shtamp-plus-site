import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Эти три экспорта Next.js читает автоматически для формирования OG-тегов
export const alt = "Штамп Плюс — Рекламное агентство в Саратове";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Читаем файл логотипа с диска и превращаем его в data URL (base64),
  // чтобы вставить прямо в картинку — ImageResponse не может обращаться
  // к папке public через обычный путь "/images/logo.png"
  const logoData = readFileSync(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to bottom right, #1A3A6C, #2E5A9E)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={120}
          height={120}
          style={{ objectFit: "contain" }}
        />

        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            color: "#D4AF37",
            letterSpacing: 2,
          }}
        >
          ШТАМП ПЛЮС
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 32,
            color: "#FFFFFF",
          }}
        >
          Рекламное агентство в Саратове
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 22,
            color: "#B0B8C6",
          }}
        >
          rashtamp.ru
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}