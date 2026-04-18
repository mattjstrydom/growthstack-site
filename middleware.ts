import { NextRequest, NextResponse } from 'next/server';

// List of allowed developed/first-world countries (ISO 3166-1 alpha-2 codes)
const ALLOWED_COUNTRIES = new Set([
  // North America
  'US', 'CA', 'MX',

  // Western Europe
  'GB', 'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'SE', 'NO', 'DK', 'FI', 'IE', 'PT', 'GR',
  'CZ', 'PL', 'SK', 'HU', 'SI', 'LU',

  // Southern Europe & Balkans
  'HR', 'RO', 'BG',

  // Asia-Pacific (Developed)
  'JP', 'KR', 'SG', 'AU', 'NZ', 'TW', 'HK',

  // Other developed regions
  'IL', 'AE', 'QA',
]);

// Optional: Track blocked countries for analytics
async function logBlockedAccess(country: string, path: string) {
  // If you want to log to an external service (Datadog, LogRocket, etc.)
  // Uncomment and configure:
  /*
  try {
    await fetch('https://your-analytics-endpoint.com/log', {
      method: 'POST',
      body: JSON.stringify({
        event: 'geo_blocked',
        country,
        path,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    // Silently fail - don't break the response
    console.error('Failed to log blocked access:', error);
  }
  */
}

export function middleware(request: NextRequest) {
  const country = request.geo?.country;
  const pathname = request.nextUrl.pathname;

  // If country cannot be determined, allow access (safer approach)
  if (!country) {
    return NextResponse.next();
  }

  // Allow access if country is in the allowed list
  if (ALLOWED_COUNTRIES.has(country)) {
    return NextResponse.next();
  }

  // Block access for countries not in the allowed list
  logBlockedAccess(country, pathname);

  return NextResponse.json(
    {
      error: 'Access not available in your region',
      message: 'GrowthSTack is currently only available in select developed countries.',
    },
    { status: 403 }
  );
}

// Apply middleware to all routes except Next.js internals and static files
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
