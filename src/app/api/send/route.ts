import { NextRequest, NextResponse } from "next/server";

// Простая защита от спама: лимит по IP в памяти процесса.
// На Vercel память не разделяется между инстансами,
// но этого достаточно, чтобы отсечь массовые атаки.
const recentRequests = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 минут
const MAX_REQUESTS_PER_WINDOW = 5;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = recentRequests.get(ip) ?? [];
  const fresh = timestamps.filter((t) => now - t < WINDOW_MS);

  if (fresh.length >= MAX_REQUESTS_PER_WINDOW) {
    recentRequests.set(ip, fresh);
    return true;
  }

  fresh.push(now);
  recentRequests.set(ip, fresh);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, comment, website } = body ?? {};

    // 1. Honeypot. Реальные пользователи всегда отправляют поле
    //    пустой строкой. Боты либо заполняют его, либо не отправляют.
    if (typeof website !== "string" || website !== "") {
      // Тихо притворяемся, что всё ок, чтобы бот не пробовал ещё раз.
      return NextResponse.json({ success: true });
    }

    // 2. Проверка обязательных полей.
    if (!name || !contact) {
      return NextResponse.json(
        { success: false, error: "Заполните имя и контакт" },
        { status: 400 }
      );
    }

    // 3. Rate limit по IP.
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Слишком много заявок. Попробуйте позже." },
        { status: 429 }
      );
    }

    // 4. Дополнительная эвристика — отсекаем явный мусор.
    const nameStr = String(name).trim();
    const contactStr = String(contact).trim();
    const commentStr = String(comment ?? "").trim();

    // Имя длиной больше 40 символов — почти наверняка бот.
    if (nameStr.length > 40) {
      return NextResponse.json({ success: true });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { success: false, error: "Сервер не настроен: нет токена или chat_id" },
        { status: 500 }
      );
    }

    const text = `🔔 Новая заявка с сайта

👤 Имя: ${nameStr}
📞 Контакт: ${contactStr}
💬 Комментарий: ${commentStr || "—"}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      return NextResponse.json(
        { success: false, error: telegramData.description || "Ошибка Telegram API" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("DEBUG: ошибка в API-роуте:", error);
    return NextResponse.json(
      { success: false, error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}