import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/', '/.env', '/api/internal/'],
    },
    sitemap: 'https://acehubtechnologies.com/sitemap.xml',
    host: 'https://acehubtechnologies.com'
  }
}
