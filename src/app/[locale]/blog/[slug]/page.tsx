import { blogPosts, type BlogPostEntry } from '../blogposts';
import type { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
    locale: string; // because this page lives under [locale]
  };
};

// ✅ Dynamic metadata for each blog post
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Petunia Blog',
      description: 'The requested post could not be found.',
    };
  }

  const url = `https://petuniapets.com/${params.locale}/blog/${post.slug}`;

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

// ✅ JSON-LD structured data component
function StructuredData({ post }: { post: BlogPostEntry }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Petunia',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Petunia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://petuniapets.com/petunia_logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://petuniapets.com/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ✅ Actual blog post page
export default async function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="text-center py-10 text-[#2c4a30]">
        Post not found.
      </div>
    );
  }

  const Mod = (await post.component()).default;

  return (
    <>
      <StructuredData post={post} />
      <Mod />
    </>
  );
}
