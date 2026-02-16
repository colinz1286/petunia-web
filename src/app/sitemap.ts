import { MetadataRoute } from 'next'
import { blogPosts } from './en/blog/blogposts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://petuniapets.com'
  const locale = 'en'

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/${locale}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ]
}
