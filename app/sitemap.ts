import { MetadataRoute } from 'next'
import { getAllTeacherSlugs } from '@/data/teachers'

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

  // Teacher profile pages
  const teacherSlugs = getAllTeacherSlugs()
  const teacherUrls = teacherSlugs.map(slug => ({
    url: `${baseUrl}/teachers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
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
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/yoga-styles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide/finding-teacher`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wellness`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/register-teacher`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...teacherUrls,
    ...blogUrls
  ]
}
