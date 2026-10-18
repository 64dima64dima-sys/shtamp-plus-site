import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Статья не найдена" };
  }

  return {
    title: `${post.title} — Блог Штамп Плюс`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Получаем 3 похожие статьи
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Генерируем Schema.org (JSON-LD) для Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.coverImage ? `https://rashtamp.ru${post.coverImage}` : "https://rashtamp.ru/images/logo.png",
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Schema.org разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== ШАПКА СТАТЬИ ===== */}
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-block text-[#D4AF37] hover:text-white transition mb-6"
          >
            ← Назад в блог
          </Link>

          <div className="mb-4">
            <span className="bg-[#D4AF37] text-[#1A3A6C] text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="text-gray-300 text-sm">
            {new Date(post.date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            • Автор: {post.author}
          </div>
        </div>
      </section>

      {/* ===== КОНТЕНТ СТАТЬИ ===== */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <article className="prose prose-lg prose-blue max-w-none prose-headings:text-[#1A3A6C] prose-a:text-[#D4AF37]">
          <MDXRemote source={post.content} />
        </article>

        {/* ===== CTA В КОНЦЕ СТАТЬИ ===== */}
        <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-[#1A3A6C] mb-4">
            Нужна помощь с заказом?
          </h3>
          <p className="text-gray-600 mb-6">
            Оставьте заявку в нашем Telegram-боте, и мы рассчитаем стоимость за 15 минут.
          </p>
          <a
            href="https://t.me/shtamp_plus_64_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#D4AF37] text-[#1A3A6C] font-semibold rounded-lg hover:opacity-90 transition"
          >
            🤖 Перейти в бот
          </a>
        </div>
      </section>

      {/* ===== ПОХОЖИЕ СТАТЬИ (ЧИТАЙТЕ ТАКЖЕ) ===== */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3A6C] mb-8 text-center">
              Читайте также
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
                >
                  <div className="relative h-40 w-full bg-gray-200">
                    {related.coverImage ? (
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-[#1A3A6C] text-[#D4AF37] font-bold">
                        Штамп Плюс
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-[#1A3A6C] text-sm leading-tight mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-[#D4AF37] font-semibold">
                      Читать →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}