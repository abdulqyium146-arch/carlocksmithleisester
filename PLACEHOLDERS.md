# Pre-Launch Checklist — Placeholders to Fill In

All items below must be replaced with real data before going live.
Search the codebase for `[INSERT` to find every placeholder location.

---

## 1. Business Information (CRITICAL — affects SEO & schema)

File: `src/lib/constants.ts`

| Placeholder | Status |
|-------------|--------|
| Phone number | ✅ Done — 07988 388514 |
| Domain | ✅ Done — https://carlocksmithleicester.co.uk |
| Google Search Console verification | ✅ Done — 6T4omoaJduvH64AgGG7CC-O5gjLUuZENnGsN4axoSNE |
| `[INSERT EMAIL ADDRESS]` | ⏳ Still needed |
| `[INSERT STREET ADDRESS]` | ⏳ Still needed |
| `[INSERT POSTCODE]` | ⏳ Still needed |
| `[INSERT LEGAL BUSINESS NAME IF DIFFERENT]` | ⏳ Only needed if different from "Car Locksmith Leicester" |

> ⚠️ The NAP (Name, Address, Phone) must be **exactly identical** everywhere it appears across the site and in your Google Business Profile. Even minor differences (e.g. "Rd" vs "Road") reduce local SEO and AI entity confidence.

---

## 2. Social & Directory Profiles (`sameAs` array in constants.ts)

Add the real URL for each:

- `[INSERT GOOGLE BUSINESS PROFILE URL]`
- `[INSERT FACEBOOK PAGE URL]`
- `[INSERT INSTAGRAM PROFILE URL]`
- `[INSERT YELL.COM LISTING URL]`
- `[INSERT CHECKATRADE PROFILE URL]`
- `[INSERT TRUSTPILOT PROFILE URL]`

---

## 3. Reviews & Ratings

File: `src/lib/constants.ts` — `aggregateRating` object

- `ratingValue`: Your real average Google/Trustpilot rating (e.g. `4.9`)
- `reviewCount`: Your real total review count (e.g. `127`)

> ⚠️ Never fabricate these numbers. Only add real, verifiable review data. If you don't yet have reviews, leave these as `null` and the schema will omit the rating block entirely.

---

## 4. SEO Verification Codes

File: `src/app/layout.tsx`

| Placeholder | Where to get it |
|-------------|-----------------|
| `[INSERT GOOGLE SEARCH CONSOLE VERIFICATION CODE]` | Google Search Console → Add property → HTML tag method |
| `[INSERT BING WEBMASTER VERIFICATION CODE]` | Bing Webmaster Tools → Add site → Meta tag method |

---

## 5. Google Analytics 4

File: `src/app/layout.tsx` — look for the `{/* GA4 placeholder */}` comment.

Replace with your GA4 measurement ID (format: `G-XXXXXXXXXX`):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
` }} />
```

Alternatively, use the `@next/third-parties` package for cleaner integration:
```
npm install @next/third-parties
```
Then in layout.tsx: `import { GoogleAnalytics } from '@next/third-parties/google'`

---

## 6. Google Maps Embeds

Files affected:
- `src/app/contact/page.tsx`
- `src/app/areas/[area-slug]/page.tsx`

Replace the placeholder `<div>` with a Google Maps embed `<iframe>`.

To get your embed code:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your business
3. Click Share → Embed a map → Copy HTML

Example:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Car Locksmith Leicester location map"
/>
```

---

## 7. OG (Open Graph) Image

File: `public/images/car-locksmith-leicester-og.jpg`

Create a 1200×630px image for social sharing previews. This should show:
- Your business name
- A relevant photo (your van, your logo, or a car key image)
- Your phone number

Also add: `public/images/logo.png` (your business logo, ~300×80px)

---

## 8. Pricing

Several pages include `[PRICE RANGE]` or similar placeholders:
- `src/app/page.tsx` — the comparison card shows `£[PRICE RANGE]`

Replace with your real pricing ranges. Common formats:
- "From £X" for lower-bound pricing
- "£X–£Y" for a range
- Keep vague if prices are highly variable (just link to "call for a quote")

---

## 9. About Page Credentials

File: `src/app/about/page.tsx`

Replace `[INSERT CREDENTIALS AND ACCREDITATIONS]` with real certifications, memberships, or verifications your business holds, e.g.:
- DBS (Disclosure and Barring Service) checked
- Master Locksmith Association (MLA) member
- TrustATrader / Checkatrade verified
- Trading Standards approved

---

## 10. Contact API Route (Email Integration)

File: `src/app/api/contact/route.ts`

The contact form currently logs submissions to the console in development but does **not** send emails. To activate email sending:

**Option A — Resend (recommended for Next.js):**
```bash
npm install resend
```
Then set environment variable: `RESEND_API_KEY=re_xxxxx`
Uncomment and configure the Resend block in `route.ts`.

**Option B — SendGrid:**
```bash
npm install @sendgrid/mail
```
Set: `SENDGRID_API_KEY=SG.xxxxx`

Also set: `CONTACT_EMAIL=youremail@example.com` in `.env.local`

Create `.env.local`:
```
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=youremail@carlocksmithleicester.co.uk
```

---

## 11. Privacy Policy & Terms

Files:
- `src/app/privacy-policy/page.tsx`
- `src/app/terms/page.tsx`

Both contain `[INSERT DATE]` and some `[INSERT ...]` sections that need a lawyer's input, particularly the liability clause in Terms. Update the "Last updated" date when you publish.

---

## 12. Domain

Update `SITE_URL` in `src/lib/constants.ts` from the placeholder to your real domain **before** running a production build, as it affects:
- All canonical tags
- All JSON-LD schema URLs
- The sitemap
- Open Graph URLs

---

## 13. Deployment

The site is Vercel-ready. To deploy:

1. Push to a GitHub repository
2. Import the repo in [vercel.com](https://vercel.com)
3. Set environment variables (RESEND_API_KEY, CONTACT_EMAIL, etc.) in the Vercel dashboard
4. Set your custom domain in Vercel

---

## Quick Search Commands

To find all remaining placeholders:

```bash
# In the project root:
grep -r "\[INSERT" src/ --include="*.tsx" --include="*.ts" -l

# Or with line numbers:
grep -rn "\[INSERT" src/
```
