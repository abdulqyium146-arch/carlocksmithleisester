import { VideoPlayer } from '@/components/VideoPlayer';
import { VIDEOS } from '@/lib/videos';
import { buildPageGraph } from '@/lib/schema';
import { buildVideoObjectSchema } from '@/lib/videos';

// Generates a single @graph block covering all three videos —
// Google can index multiple VideoObject entries per page.
export const videoGraphSchema = buildPageGraph(
  VIDEOS.map(buildVideoObjectSchema)
);

export function VideoSection() {
  return (
    <section
      className="section-padding bg-slate-900"
      aria-labelledby="video-section-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGraphSchema) }}
      />

      <div className="container-lg">
        <div className="mb-10 text-center">
          <h2
            id="video-section-heading"
            className="mb-3 text-3xl font-extrabold text-white md:text-4xl"
          >
            Watch Us Work
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Real job footage from Leicester — no acting, no stock video. This is exactly what
            to expect when you call Car Locksmith Leicester.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <VideoPlayer
              key={video.id}
              video={video}
              includeSchema={false} // schema injected above as a single @graph block
            />
          ))}
        </div>

        {/* Supporting text — gives Google textual context to match video queries */}
        <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-5 text-sm text-slate-400 leading-relaxed">
          <p>
            The videos above show real callouts completed by our technicians in Leicester in November 2024.
            We film our work so you can see exactly how we operate — the tools we use, how we handle vehicles,
            and the standard of workmanship we deliver on every job. No damage. No drama. Just professional,
            efficient locksmith work.
          </p>
        </div>
      </div>
    </section>
  );
}
