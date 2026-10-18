import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Блог — Штамп Плюс | Полезные статьи о рекламе",
  description: "Гайды, инструкции и лайфхаки о печатях, полиграфии, наружной рекламе и сувенирке от рекламного агентства «Штамп Плюс» в Саратове.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-[#1A3A6C] text-white px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37]">
          Блог и полезные статьи
        </h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Экспертные гайды о печатях, полиграфии, наружной рекламе и маркетинге для бизнеса Саратова.
        </p>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Пока нет статей. Скоро здесь появятся полезные материалы!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-[#1A3A6C] text-[#D4AF37] font-bold text-xl">
                      Штамп Плюс
                    </div>
                  )}
                  <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#1A3A6C] text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>

                  <h2 className="text-xl font-bold text-[#1A3A6C] mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-auto text-[#D4AF37] font-semibold hover:text-[#b5932e] transition"
                  >
                    Читать далее →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}