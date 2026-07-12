import { SITE_URL } from './constants';

export interface VideoMeta {
  id: string;
  filename: string;
  title: string;
  description: string;
  uploadDate: string;
  duration: string; // ISO 8601 — e.g. "PT1M30S"
  thumbnailPath: string;
}

export const VIDEOS: VideoMeta[] = [
  {
    id: 'lockout',
    filename: 'emergency-car-lockout-leicester.mp4',
    title: 'Emergency Car Lockout Leicester — Professional Non-Destructive Vehicle Entry',
    description:
      'Car Locksmith Leicester demonstrates a professional, non-destructive emergency car lockout on a real vehicle in Leicester. Our technician uses specialist tools to gain entry without causing any damage to paintwork, door seals, or the locking mechanism — a standard we maintain on every job.',
    uploadDate: '2024-11-08',
    duration: 'PT1M30S', // [REPLACE with real duration e.g. PT2M10S]
    thumbnailPath: '/images/video-thumb-lockout.jpg', // [REPLACE with real frame screenshot]
  },
  {
    id: 'programming',
    filename: 'car-key-programming-leicester.mp4',
    title: 'Car Key Programming Leicester — Transponder Key Programming On-Site',
    description:
      'Watch Car Locksmith Leicester programme a transponder key on-site in Leicester. Using professional-grade diagnostic equipment, the technician pairs a new key to the vehicle\'s ECU — faster and significantly cheaper than a main dealer, completed in a single visit.',
    uploadDate: '2024-11-08',
    duration: 'PT1M30S', // [REPLACE with real duration]
    thumbnailPath: '/images/video-thumb-programming.jpg', // [REPLACE with real frame screenshot]
  },
  {
    id: 'service',
    filename: 'auto-locksmith-leicester-service.mp4',
    title: 'Auto Locksmith Leicester — Real Job Footage of Our Technician at Work',
    description:
      'Genuine job footage from Car Locksmith Leicester showing our auto locksmith technician completing a real callout in Leicester. This is the level of professionalism and expertise you can expect on every job — no damage, clear communication, and the work completed on-site.',
    uploadDate: '2024-11-08',
    duration: 'PT2M', // [REPLACE with real duration]
    thumbnailPath: '/images/video-thumb-service.jpg', // [REPLACE with real frame screenshot]
  },
];

export function getVideoUrl(filename: string) {
  return `${SITE_URL}/videos/${filename}`;
}

export function buildVideoObjectSchema(video: VideoMeta) {
  return {
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: `${SITE_URL}${video.thumbnailPath}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: getVideoUrl(video.filename),
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#business`,
      name: 'Car Locksmith Leicester',
    },
  };
}
