export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/.git/'],
    },
    sitemap: 'https://bricollano.it/sitemap.xml',
  }
}
