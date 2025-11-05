import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cayman Yoga - Find Yoga Teachers & Classes',
    short_name: 'Cayman Yoga',
    description: 'Discover certified yoga instructors and classes across the Cayman Islands',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d9488',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['health', 'lifestyle', 'fitness'],
    orientation: 'portrait',
    scope: '/',
    lang: 'en-US',
  }
}
