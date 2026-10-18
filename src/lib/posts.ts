import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Путь к папке со статьями
const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  author: string;
  category: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Функция для получения списка всех статей (для страницы /blog)
export function getAllPosts(): PostMeta[] {
  // Если папки нет, возвращаем пустой массив (чтобы не было ошибки при сборке)
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Убираем расширение .mdx, чтобы получить slug (например, 'kak-zakazat-pechat')
      const slug = fileName.replace(/\.mdx$/, "");
      
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      // Парсим метаданные из "шапки" файла (frontmatter)
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<PostMeta, "slug">),
      };
    });

  // Сортируем статьи по дате (сначала новые)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Функция для получения одной статьи по её slug (для страницы /blog/[slug])
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as Omit<PostMeta, "slug">),
    };
  } catch (e) {
    return null; // Если файл не найден
  }
}