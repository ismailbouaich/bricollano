import { NextResponse } from 'next/server'

export function middleware(request) {
  // Clone the request headers
  const response = NextResponse.next()

  // Rate limiting simulation (basic protection)
  const userAgent = request.headers.get('user-agent') || ''
  
  // Block suspicious user agents
  const suspiciousPatterns = [
    'bot', 'crawler', 'spider', 'scraper', 'scanner',
    'curl', 'wget', 'python-requests', 'postman'
  ]
  
  const isSuspicious = suspiciousPatterns.some(pattern => 
    userAgent.toLowerCase().includes(pattern.toLowerCase())
  )
  
  // Allow legitimate bots (Google, Bing, etc.) but block others
  const legitimateBots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot',
    'baiduspider', 'yandexbot', 'facebookexternalhit'
  ]
  
  const isLegitimateBot = legitimateBots.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  )
  
  // Block suspicious requests that aren't legitimate bots
  if (isSuspicious && !isLegitimateBot) {
    // Log the attempt (in production, use proper logging)
    console.warn('Blocked suspicious request:', {
      userAgent,
      ip: request.ip,
      url: request.url,
      timestamp: new Date().toISOString()
    })
    
    // Return 403 Forbidden
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Add security headers that aren't in next.config.js
  response.headers.set('X-Robots-Tag', 'index, follow')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  
  // Prevent access to sensitive files
  const pathname = request.nextUrl.pathname
  const sensitiveFiles = [
    '.env', '.env.local', '.env.production',
    'package.json', 'package-lock.json',
    '.git', '.gitignore', '.next'
  ]
  
  if (sensitiveFiles.some(file => pathname.includes(file))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
