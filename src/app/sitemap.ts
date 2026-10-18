import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const baseUrl = "https://rashtamp.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries = posts.map((post) => {
    // Безопасная проверка даты: если она битая, ставим сегодняшнюю
    let validDate = new Date();
    try {
      if (post.date) {
        const parsedDate = new Date(post.date);
        if (!isNaN(parsedDate.getTime())) {
          validDate = parsedDate;
        }
      }
    } catch (e) {
      // Ничего не делаем, остается текущая дата
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: validDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...postEntries,
  ];
}