import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas que requieren autenticación
const protectedRoutes = ['/dashboard', '/profile', '/settings'];

// Rutas que solo pueden acceder usuarios no autenticados
const authRoutes = ['/auth/login', '/auth/register'];

// Rutas públicas (no requieren verificación)
const publicRoutes = ['/', '/products', '/about', '/contact'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Obtener token de las cookies
  const token = request.cookies.get('auth_token')?.value;
  const isAuthenticated = !!token;

  // Verificar si la ruta requiere autenticación
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Verificar si es una ruta de autenticación
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Verificar si es una ruta pública
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  // Redirigir usuarios no autenticados desde rutas protegidas
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirigir usuarios autenticados desde rutas de auth
  if (isAuthRoute && isAuthenticated) {
    const redirectTo = request.nextUrl.searchParams.get('redirect') || '/dashboard';
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  // Manejar rutas API protegidas
  if (pathname.startsWith('/api/')) {
    // Rutas API que requieren autenticación
    const protectedApiRoutes = ['/api/users', '/api/dashboard'];
    
    const isProtectedApiRoute = protectedApiRoutes.some(route =>
      pathname.startsWith(route)
    );

    if (isProtectedApiRoute && !isAuthenticated) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
  }

  // Agregar headers de seguridad
  const response = NextResponse.next();
  
  // Headers de seguridad
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self';"
  );

  // CORS headers para API routes
  if (pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
  }

  return response;
}

// Configurar qué rutas deben ser procesadas por el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
