'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { VideoMeta, buildVideoObjectSchema, getVideoUrl } from '@/lib/videos';

interface VideoPlayerProps {
  video: VideoMeta;
  /** Show inline VideoObject schema — set false if the parent page already includes it */
  includeSchema?: boolean;
}

export function VideoPlayer({ video, includeSchema = true }: VideoPlayerProps) {
  const [active, setActive] = useState(false);
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Only render the <video> element once it's scrolled into view —
  // prevents the browser downloading anything until needed (Core Web Vitals).
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const videoUrl = getVideoUrl(video.filename);

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              ...buildVideoObjectSchema(video),
            }),
          }}
        />
      )}

      <div ref={wrapperRef} className="group relative overflow-hidden rounded-xl bg-slate-900 shadow-lg">
        {/* Aspect ratio box — 16:9 */}
        <div className="relative aspect-video w-full">

          {/* Poster / click-to-play overlay — shown until user clicks play */}
          {!active && (
            <button
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-950/60 transition-colors hover:bg-slate-950/40"
              onClick={() => setActive(true)}
              aria-label={`Play video: ${video.title}`}
            >
              {/* Branded poster image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumbnailPath}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width={1280}
                height={720}
              />
              {/* Play button */}
              <span className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-brand-500 shadow-xl shadow-brand-500/40 transition-transform group-hover:scale-110">
                <Play className="h-9 w-9 translate-x-0.5 fill-white text-white" aria-hidden="true" />
              </span>
              {/* Title label */}
              <span className="relative z-10 max-w-xs px-4 text-center text-sm font-semibold text-white drop-shadow-md">
                {video.title}
              </span>
            </button>
          )}

          {/* Actual <video> — only rendered once in-viewport to avoid wasted bandwidth */}
          {inView && (
            <video
              className="h-full w-full object-cover"
              src={active ? videoUrl : undefined}
              poster={video.thumbnailPath}
              controls={active}
              autoPlay={active}
              preload="none"
              playsInline
              aria-label={video.title}
            />
          )}
        </div>

        {/* Caption / description — text context helps Google understand the video content */}
        <div className="border-t border-slate-800 px-4 py-3">
          <p className="text-xs font-semibold text-slate-300">{video.title}</p>
        </div>
      </div>
    </>
  );
}
