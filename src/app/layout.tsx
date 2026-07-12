import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCallBar } from '@/components/StickyCallBar';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBusinessSchema, buildOrganizationSchema, buildWebSiteSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Car Locksmith Leicester | 24/7 Auto, Residential & Commercial',
    template: '%s | Car Locksmith Leicester',
  },
  description:
    'Car Locksmith Leicester — 24/7 emergency car lockout, key cutting, key programming and replacement across Leicester and Leicestershire. Faster and cheaper than the main dealer.',
  keywords: [
    'car locksmith Leicester',
    'auto locksmith Leicester',
    'emergency car lockout Leicester',
    'car key replacement Leicester',
    'car key programming Leicester',
    'locksmith near me Leicester',
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  alternates: {
    canonical: SITE_URL,
  },

  // ── Favicons & PWA manifest ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: 'Car Locksmith Leicester | 24/7 Auto, Residential & Commercial',
    description:
      'Emergency car lockout, key cutting, key programming and replacement across Leicester. Typically arrives within 60 minutes. Significantly cheaper than a main dealer.',
    images: [
      {
        url: '/images/car-locksmith-leicester-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Locksmith Leicester — 24/7 emergency auto locksmith',
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Car Locksmith Leicester | 24/7 Auto, Residential & Commercial',
    description:
      'Emergency car lockout, key cutting, key programming across Leicester. Typically arrives within 60 minutes.',
    images: ['/images/car-locksmith-leicester-og.jpg'],
  },

  // ── Search engine verification ───────────────────────────────────────────
  verification: {
    google: '6T4omoaJduvH64AgGG7CC-O5gjLUuZENnGsN4axoSNE',
    other: {
      'msvalidate.01': '[INSERT BING WEBMASTER VERIFICATION CODE]',
    },
  },

  // ── Crawl directives ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const globalSchema = buildPageGraph([
  buildBusinessSchema(),
  buildOrganizationSchema(),
  buildWebSiteSchema(),
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Theme colour — colours the browser chrome on Android Chrome */}
        <meta name="theme-color" content="#f97316" />

        {/* iOS home-screen PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Car Locksmith" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        {/* GA4 placeholder */}
        {/* [INSERT GA4 SCRIPT TAG HERE] */}
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
