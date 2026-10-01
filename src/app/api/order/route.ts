import { NextRequest, NextResponse } from "next/server";

type OrderItem = {
  title: string;
  price: number;
  quantity: number;
};

type OrderRequest = {
  name: string;
  phone: string;
  preferredTime: string;
  email?: string;
  comment?: string;
  address?: string;
  delivery?: string;
  payment?: string;
  inn?: string;
  items: OrderItem[];
  total: number;
};

export async function POST(request: NextRequest) {
  try {
    const body: OrderRequest = await request.json();
    const {
      name,
      phone,
      preferredTime,
      email,
      comment,
      address,
      delivery,
      payment,
      inn,
      items,
      total,
    } = body;

    if (!name || !phone || !preferredTime || !items || items.length === 0 || !total) {
      return NextResponse.json(
        { success: false, error: "Заполните имя, телефон, удобное время и состав заказа" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { success: false, error: "Сервер не настроен: нет токена или chat_id" },
        { status: 500 }
      );
    }

    const lines: string[] = ["🛒 Новый заказ из магазина", ""];

    lines.push(`👤 Имя: ${name}`);
    lines.push(`📞 Телефон: ${phone}`);
    lines.push(`🕐 Удобное время для звонка: ${preferredTime}`);
    if (email) lines.push(`✉️ Email: ${email}`);
    if (address) lines.push(`📍 Адрес: ${address}`);
    if (delivery) lines.push(`🚚 Способ получения: ${delivery}`);
    if (payment) lines.push(`💳 Способ оплаты: ${payment}`);
    if (inn) lines.push(`🏢 ИНН: ${inn}`);
    if (comment) lines.push(`💬 Комментарий: ${comment}`);

    lines.push("");
    lines.push("📦 Состав заказа:");

    for (const item of items) {
      const itemTotal = item.price * item.quantity;
      lines.push(
        `• ${item.title} — ${item.quantity} шт × ${item.price.toLocaleString("ru-RU")} ₽ = ${itemTotal.toLocaleString("ru-RU")} ₽`
      );
    }

    lines.push("");
    lines.push(`💰 Итого: ${total.toLocaleString("ru-RU")} ₽`);

    const text = lines.join("\n");

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
    return NextResponse.json(
      { success: false, error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}