import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

// Тип одного поста — удобно для подсказок редактора и меньшего числа ошибок
type Post = {
  id: string;
  date: string;
  text: string;
  imageUrl: string | null;
};

export async function GET() {
  try {
    // Загружаем публичную HTML-страницу превью канала.
    // revalidate: 3600 — Next.js закэширует результат на 1 час,
    // чтобы не дёргать t.me при каждом заходе пользователя на /news.
    const response = await fetch("https://t.me/s/shtamp_plus", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Не удалось загрузить страницу канала" },
        { status: 500 }
      );
    }

    const html = await response.text();

    // Загружаем HTML в cheerio — дальше можно искать элементы как в jQuery
    const $ = cheerio.load(html);

    const posts: Post[] = [];

    // Каждый пост в HTML-превью канала — это блок с классом .tgme_widget_message
    $(".tgme_widget_message").each((_, element) => {
      const el = $(element);

      // Атрибут data-post выглядит как "shtamp_plus/123" — нам нужна только цифра после "/"
      const dataPost = el.attr("data-post") || "";
      const id = dataPost.split("/")[1] || "";

      // Дата поста лежит в атрибуте datetime тега <time>
      const date = el.find("time").attr("datetime") || "";

      // Текст поста: сначала заменяем теги <br> на перенос строки \n,
      // а затем cheerio достаёт текст без остальных HTML-тегов
      const textBlock = el.find(".tgme_widget_message_text");
      textBlock.find("br").replaceWith("\n");
      const text = textBlock.text().trim();

      // Фотография (если есть) задана через background-image:url('...') в style
      const photoWrap = el.find(".tgme_widget_message_photo_wrap");
      let imageUrl: string | null = null;

      if (photoWrap.length > 0) {
        const style = photoWrap.attr("style") || "";
        const match = style.match(/url\(['"]?(.*?)['"]?\)/);
        if (match) {
          imageUrl = match[1];
        }
      }

      // Пропускаем "посты" без текста и без картинки (служебные блоки)
      if (id && (text || imageUrl)) {
        posts.push({ id, date, text, imageUrl });
      }
    });

    // Берём последние 10 постов и разворачиваем порядок — сначала новые
    const latestPosts = posts.slice(-10).reverse();

    return NextResponse.json({ success: true, posts: latestPosts });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Ошибка при получении новостей" },
      { status: 500 }
    );
  }
}