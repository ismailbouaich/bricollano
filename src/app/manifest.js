export default function manifest() {
  return {
    name: 'Cappomano - Servizi per la Casa',
    short_name: 'Cappomano',
    description: 'Servizi per la casa con pagamenti crypto e sistema di credito integrato',
    start_url: '/',
    display: 'standalone',
    background_color: '#e2dacd',
    theme_color: '#e0710d',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
