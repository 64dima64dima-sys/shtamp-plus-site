import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, contact, comment } = await request.json();

    if (!name || !contact) {
      return NextResponse.json(
        { success: false, error: "Заполните имя и контакт" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log(
      "DEBUG: token =",
      token ? "ЕСТЬ" : "НЕТ",
      "| chatId =",
      chatId ? "ЕСТЬ" : "НЕТ"
    );

    if (!token || !chatId) {
      return NextResponse.json(
        { success: false, error: "Сервер не настроен: нет токена или chat_id" },
        { status: 500 }
      );
    }

    const text = `🔔 Новая заявка с сайта

👤 Имя: ${name}
📞 Контакт: ${contact}
💬 Комментарий: ${comment || "—"}`;

    console.log(
      "DEBUG: отправляем в Telegram, token length =",
      token.length,
      "| chatId =",
      chatId
    );

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

    console.log("DEBUG: Telegram HTTP статус =", telegramResponse.status);

    const telegramData = await telegramResponse.json();

    console.log("DEBUG: Telegram ответ =", JSON.stringify(telegramData));

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