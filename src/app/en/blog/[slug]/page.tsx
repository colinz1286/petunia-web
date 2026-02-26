// src/app/[locale]/blog/[slug]/page.tsx
import { blogPosts, type BlogPostEntry } from '../blogposts'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'

const BASE_URL = 'https://petuniapets.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/petunia_logo.png`
const CANONICAL_REDIRECTS: Record<string, string> = {
  'boarding-vs-daycare-2025': 'dog-boarding-vs-daycare',
  'hip-dysplasia-in-dogs-guide': 'hip-dysplasia-in-dogs',
}

const uniqueBlogPosts = blogPosts.filter(
  (post, index, arr) => arr.findIndex((entry) => entry.slug === post.slug) === index
)

type RouteParams = {
  slug: string
  locale?: string
}

type PageProps = {
  params: Promise<RouteParams>
}

function toIsoDate(dateString: string): string | undefined {
  const parsed = new Date(dateString)
  if (Number.isNaN(parsed.getTime())) return undefined
  return parsed.toISOString()
}

function toTimestamp(dateString: string): number {
  const parsed = new Date(dateString)
  if (Number.isNaN(parsed.getTime())) return 0
  return parsed.getTime()
}

function tokenize(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 2)
  )
}

function getRelatedPosts(current: BlogPostEntry, limit = 4): BlogPostEntry[] {
  const currentCategories = new Set(current.categories ?? [])
  const currentTokens = tokenize(`${current.title} ${current.slug}`)

  return uniqueBlogPosts
    .filter((candidate) => candidate.slug !== current.slug)
    .map((candidate) => {
      const candidateCategories = candidate.categories ?? []
      const categoryOverlap = candidateCategories.filter((cat) =>
        currentCategories.has(cat)
      ).length

      const candidateTokens = tokenize(`${candidate.title} ${candidate.slug}`)
      let tokenOverlap = 0
      currentTokens.forEach((token) => {
        if (candidateTokens.has(token)) tokenOverlap += 1
      })

      const recency = toTimestamp(candidate.date)
      const score = categoryOverlap * 10 + tokenOverlap

      return { candidate, score, recency }
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return b.recency - a.recency
    })
    .slice(0, limit)
    .map((entry) => entry.candidate)
}

function getNewInTopicPosts(current: BlogPostEntry, limit = 3): BlogPostEntry[] {
  const currentCategories = new Set(current.categories ?? [])
  const latestPublished = Math.max(...uniqueBlogPosts.map((post) => toTimestamp(post.date)))

  if (!latestPublished) return []

  const cutoff = latestPublished - 1000 * 60 * 60 * 24 * 120

  return uniqueBlogPosts
    .filter((candidate) => candidate.slug !== current.slug)
    .filter((candidate) => {
      const hasCategoryOverlap = (candidate.categories ?? []).some((category) =>
        currentCategories.has(category)
      )
      return hasCategoryOverlap && toTimestamp(candidate.date) >= cutoff
    })
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
    .slice(0, limit)
}

// ---- SEO metadata per post ---------------------------------------------------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const safeLocale = locale ?? 'en'
  const resolvedSlug = CANONICAL_REDIRECTS[slug] ?? slug

  const post = uniqueBlogPosts.find((p) => p.slug === resolvedSlug)

  if (!post) {
    return {
      title: 'Post Not Found | Petunia Blog',
      description: 'The requested post could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const url = `${BASE_URL}/${safeLocale}/blog/${post.slug}`
  const publishedTime = toIsoDate(post.date)
  const title = `${post.title} | Petunia Blog`

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description: post.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    authors: [{ name: 'Petunia' }],
    publisher: 'Petunia',
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description: post.description,
      siteName: 'Petunia',
      locale: safeLocale,
      images: [{ url: DEFAULT_OG_IMAGE }],
      publishedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

// ---- JSON-LD structured data -------------------------------------------------
function StructuredData({
  post,
  locale,
}: {
  post: BlogPostEntry
  locale?: string
}) {
  const safeLocale = locale ?? 'en'
  const url = `${BASE_URL}/${safeLocale}/blog/${post.slug}`
  const publishedTime = toIsoDate(post.date)
  const categories = post.categories?.filter(Boolean) ?? []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: publishedTime,
    dateModified: publishedTime,
    inLanguage: safeLocale,
    url,
    image: [DEFAULT_OG_IMAGE],
    articleSection: categories,
    keywords: categories.join(', '),
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
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// ---- Page --------------------------------------------------------------------
export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params
  const safeLocale = locale ?? 'en'
  const canonicalSlug = CANONICAL_REDIRECTS[slug]

  if (canonicalSlug) {
    permanentRedirect(`/${safeLocale}/blog/${canonicalSlug}`)
  }

  const post = uniqueBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const Mod = (await post.component()).default
  const relatedPosts = getRelatedPosts(post)
  const newInTopicPosts = getNewInTopicPosts(post).filter(
    (candidate) => !relatedPosts.some((related) => related.slug === candidate.slug)
  )

  return (
    <>
      <StructuredData post={post} locale={safeLocale} />
      <Mod />
      {relatedPosts.length > 0 && (
        <aside className="max-w-3xl mx-auto px-4 pb-12 text-[#2c4a30]">
          <h2 className="text-xl font-semibold mb-3">Related Articles</h2>
          <ul className="list-disc pl-5 space-y-2">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/${safeLocale}/blog/${related.slug}`}
                  className="underline hover:opacity-80"
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
      {newInTopicPosts.length > 0 && (
        <aside className="max-w-3xl mx-auto px-4 pb-12 text-[#2c4a30]">
          <h2 className="text-xl font-semibold mb-3">New in This Topic</h2>
          <ul className="list-disc pl-5 space-y-2">
            {newInTopicPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/${safeLocale}/blog/${related.slug}`}
                  className="underline hover:opacity-80"
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  )
}
