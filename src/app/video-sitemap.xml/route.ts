import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/constants';
import { VIDEOS, getVideoUrl } from '@/lib/videos';

// Video Sitemap — tells Google exactly what each video is about, who published it,
// and where to find it. Improves eligibility for Video rich results and carousels
// in Google Search for queries like "car locksmith Leicester" and "locksmith near me".
// Submit this URL in Google Search Console under Sitemaps.

export async function GET() {
  const urls = [
    // Homepage hosts all three videos
    {
      loc: SITE_URL,
      videos: VIDEOS,
    },
    // Service pages with individual videos
    {
      loc: `${SITE_URL}/services/car-lockout`,
      videos: [VIDEOS[0]],
    },
    {
      loc: `${SITE_URL}/services/car-key-programming`,
      videos: [VIDEOS[1]],
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls
  .map(
    ({ loc, videos }) => `  <url>
    <loc>${loc}</loc>
${videos
  .map(
    (v) => `    <video:video>
      <video:thumbnail_loc>${SITE_URL}${v.thumbnailPath}</video:thumbnail_loc>
      <video:title>${escapeXml(v.title)}</video:title>
      <video:description>${escapeXml(v.description)}</video:description>
      <video:content_loc>${getVideoUrl(v.filename)}</video:content_loc>
      <video:publication_date>${v.uploadDate}</video:publication_date>
      <video:duration>${isoDurationToSeconds(v.duration)}</video:duration>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Convert ISO 8601 duration to seconds for Google's video sitemap
function isoDurationToSeconds(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const h = parseInt(match[1] ?? '0');
  const m = parseInt(match[2] ?? '0');
  const s = parseInt(match[3] ?? '0');
  return h * 3600 + m * 60 + s;
}
