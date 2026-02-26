import { MetadataRoute } from 'next'
import { blogPosts } from './en/blog/blogposts'

function getLastModified(dateString?: string): Date {
  if (!dateString) return new Date()
  const parsed = new Date(dateString)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://petuniapets.com'
  const locale = 'en'

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/${locale}/blog/${post.slug}`,
    lastModified: getLastModified(post.date),
  }))

  return [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/dog-boarding-software`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/dog-boarding-and-daycare-software-small-business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/dog-boarding-and-daycare-software-medium-business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/dog-boarding-and-daycare-software-large-business`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/dog-boarding-and-daycare-software-enterprise`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ]
}
