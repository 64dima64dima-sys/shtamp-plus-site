import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';

export const alt = 'Штамп Плюс — Блог';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  const title = post ? post.title : 'Блог Штамп Плюс';
  const category = post ? post.category : 'Полезные статьи';

  // Загружаем шрифт для кириллицы (обязательно для Vercel Edge)
  const fontData = await fetch(
    new URL('https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WxZ9nE.ttf')
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A3A6C',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #2E5A9E 0%, transparent 50%)',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D4AF37',
            color: '#1A3A6C',
            padding: '10px 30px',
            borderRadius: '50px',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: '40px',
          }}
        >
          {category}
        </div>
        
        <div
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '1000px',
          }}
        >
          {title}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            fontSize: 30,
            color: '#D4AF37',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          rashtamp.ru
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Montserrat',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}