import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caymanyoga.com'

  // Blog post slugs
  const blogPosts = [
    'best-yoga-styles-for-beginners',
    'benefits-of-beach-yoga',
    'hot-yoga-vs-regular-yoga',
    'yoga-for-stress-relief-cayman',
    'finding-right-yoga-teacher',
    'morning-yoga-routine-island-life'
  ]

  const blogUrls = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/teachers`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    ...blogUrls
  ]
}
