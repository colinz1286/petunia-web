// src/app/[locale]/blog/[slug]/page.tsx
import { blogPosts, type BlogPostEntry } from '../blogposts';
import type { Metadata } from 'next';

type RouteParams = { slug: string; locale: string };
// ✅ Match the generated type expectation: params is a Promise<...>
type PageProps = { params: Promise<RouteParams> };

// ---- SEO metadata per post ---------------------------------------------------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params; // works even if Next passes a plain object
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Petunia Blog',
      description: 'The requested post could not be found.',
    };
  }

  const url = `https://petuniapets.com/${locale}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      siteName: 'Petunia',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

// ---- JSON-LD structured data -------------------------------------------------
function StructuredData({ post, locale }: { post: BlogPostEntry; locale: string }) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Petunia' },
    publisher: {
      '@type': 'Organization',
      name: 'Petunia',
      logo: { '@type': 'ImageObject', url: 'https://petuniapets.com/petunia_logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://petuniapets.com/${locale}/blog/${post.slug}`,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

// ---- Page --------------------------------------------------------------------
export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params; // safe with Promise or object
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-10 text-[#2c4a30]">Post not found.</div>;
  }

  const Mod = (await post.component()).default;

  return (
    <>
      <StructuredData post={post} locale={locale} />
      <Mod />
    </>
  );
}
