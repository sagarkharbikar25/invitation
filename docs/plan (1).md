# Premium 2-Page Digital College Invitation — Complete Project Plan

> **Status:** Pre-development planning document  
> **Scope:** Two-page premium digital invitation for college/community events  
> **Audience:** Principal, Dean, HODs, faculty, and distinguished guests

---

## 1. Product Concept

A digitally-native, personalised, two-page formal invitation platform built for institutional events. It replaces printed cards with a premium web experience that feels official and academic — not decorative or casual. Each guest receives a unique URL that renders their personalised invitation. An RSVP system collects attendance confirmations and stores them securely.

**Core experience:**

```
Guest opens URL → Page 1 (Cover — first impression) → Clicks "View Invitation" → Page 2 (Full details + RSVP)
```

There are no other pages. Navigation menus are intentionally absent.

---

## 2. Exact 2-Page Structure

### Page 1 — Invitation Cover

| Section | Content |
|---|---|
| Top branding | College logo + Community logo |
| Salutation | "Cordially Invites" |
| Guest block | Respected Dr./Prof. [Name], [Designation] |
| Event title | Large, prominent event name |
| Tagline | Short descriptor |
| Key info | Date · Time · Venue (one line) |
| CTA | "View Invitation →" button → scrolls/routes to Page 2 |

### Page 2 — Complete Invitation

| Section | Content |
|---|---|
| Compact header | Both logos + subtle divider |
| Formal letter | Personalised invitation message |
| Event details | Date, Time, Venue, Organiser cards |
| Dignitaries | Chief Guest, Principal, Dean, HODs |
| Schedule | Vertical timeline |
| Venue | Name, address, Google Maps link |
| RSVP | Name, Designation, Attendance radio, Submit |
| Footer | Both logos, contact, optional QR code |

---

## 3. Page 1 Wireframe

```
┌─────────────────────────────────────────────┐
│  [College Logo]              [Community Logo] │  ← Top branding bar
│   College Name                Community Name  │
├─────────────────────────────────────────────┤
│                                               │
│          ✦ ─────────────────── ✦             │  ← Gold decorative rule
│                                               │
│              CORDIALLY INVITES                │  ← Small caps, serif
│                                               │
│          Respected Dr. [Guest Name]           │  ← Personalised, large serif
│               [Designation]                   │
│                                               │
│              to grace the occasion of         │  ← Light italic
│                                               │
│            ══════════════════                 │
│                [EVENT NAME]                   │  ← Hero heading, 3–4xl
│            ══════════════════                 │
│                                               │
│             [Short event tagline]             │  ← Muted, italic
│                                               │
│        [Date]  ·  [Time]  ·  [Venue]         │  ← Inline detail row
│                                               │
│          ✦ ─────────────────── ✦             │
│                                               │
│            [ View Invitation → ]             │  ← Primary CTA button
│                                               │
└─────────────────────────────────────────────┘
```

**Background:** Deep navy with very subtle geometric pattern (low-opacity grid/lattice). Light ivory text. Muted gold accents on rules and borders.

---

## 4. Page 2 Wireframe

```
┌─────────────────────────────────────────────┐
│  [College Logo]              [Community Logo] │  ← Compact header (smaller than P1)
│  ─────────────────────────────────────────  │  ← Thin gold divider
│                                               │
│  FORMAL INVITATION MESSAGE                    │  ← Ivory card, serif body
│  Respected [Name],                            │
│  It gives us immense pleasure to…            │
│                                               │
├─────────────────────────────────────────────┤
│  EVENT DETAILS                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │  📅 Date │ │  🕐 Time │ │ 📍 Venue │    │  ← 3-column cards (stack on mobile)
│  └──────────┘ └──────────┘ └──────────┘    │
│  ┌──────────────────────┐                   │
│  │  🏛 Organised By     │                   │
│  └──────────────────────┘                   │
│                                               │
├─────────────────────────────────────────────┤
│  DISTINGUISHED DIGNITARIES                   │
│  ┌────────────────────────────────┐          │
│  │  Chief Guest — [Name]          │  ← Large card, prominent
│  │  [Designation]                 │
│  └────────────────────────────────┘          │
│  ┌───────────────┐ ┌────────────────┐        │
│  │ Principal     │ │ Dean           │  ← Medium cards
│  └───────────────┘ └────────────────┘        │
│  HODs / Faculty Coordinators:                │
│  • [Name] — [Dept]  • [Name] — [Dept]        │  ← Compact inline list
│                                               │
├─────────────────────────────────────────────┤
│  EVENT SCHEDULE                              │
│  10:00 AM ──● Guest Arrival                  │
│  10:15 AM ──● Welcome Address                │  ← Vertical timeline
│  10:30 AM ──● Inauguration                   │
│  11:00 AM ──● Keynote                        │
│  12:00 PM ──● Main Event                     │
│  12:30 PM ──● Vote of Thanks                 │
│                                               │
├─────────────────────────────────────────────┤
│  VENUE                                       │
│  [Venue Name]                                │
│  [Full Address]                              │
│  [ Get Directions → ]                        │  ← Opens Google Maps
│                                               │
├─────────────────────────────────────────────┤
│  RSVP — Kindly Confirm Your Presence        │
│  Name: [________________]                    │
│  Designation: [________________]             │
│  ( ) Will Attend   ( ) Unable to Attend      │
│  [ Confirm Attendance ]                      │
│                                               │
├─────────────────────────────────────────────┤
│  [College Logo]  [Community Logo]            │  ← Footer
│  College Name · Community Name               │
│  Contact: [email] · [phone]                  │
│  [QR Code — optional]                        │
└─────────────────────────────────────────────┘
```

---

## 5. UI/UX Recommendations

**Navigation**
- No navbar. Single "View Invitation →" CTA on Page 1 anchors/routes to Page 2.
- Page 2 is one long scroll. All sections are vertically stacked with clear visual separators.
- A sticky "Back to Top" chevron appears after scrolling 400px on Page 2.

**Interaction principles**
- Entrance animations on Page 1 are one-time, short, and professional (no looping).
- Page 2 sections animate in on scroll (Intersection Observer / Framer Motion `whileInView`).
- The RSVP form shows an inline success message after submission — no full-page redirect.
- The "Get Directions" button opens Google Maps in a new tab.

**Accessibility**
- All images have descriptive `alt` text.
- Form inputs have associated `<label>` elements.
- Color contrast meets WCAG AA.
- Focus states are visible.
- The site is keyboard-navigable.

**Performance**
- Logos loaded as Next.js `<Image>` components (optimised, lazy where appropriate).
- Fonts loaded via `next/font` (no flash of unstyled text).
- No third-party analytics scripts unless explicitly required.

---

## 6. Logo Placement Strategy

**Hierarchy rule:** The logo of the primary event organiser is placed on the **left**. The secondary/association logo is placed on the **right**. This follows standard institutional protocol.

| Scenario | Left | Right |
|---|---|---|
| Community-organised event (primary) | Community Logo | College Logo |
| College-hosted event (primary) | College Logo | Community Logo |
| Joint event (equal) | College Logo | Community Logo |

**Sizing:** Both logos must be displayed at equal height (recommended: `h-12` to `h-16` on desktop, `h-10` on mobile). Never distort aspect ratios. Use `object-contain`.

**Spacing:** A minimum gap of `40px` between logos at all times. On very small screens, stack vertically (logo + name, logo + name) centred.

**Rule:** Logos are placed as `<img>` or Next.js `<Image>` tags pointing to the original files. No CSS filters, no `opacity`, no `mix-blend-mode` that alters appearance.

---

## 7. Color Palette

```
Primary Background:    #0F1B2D   (Deep Navy)
Secondary Background:  #1A2B42   (Slightly lighter navy for cards)
Surface:               #F8F4EC   (Warm Ivory — card backgrounds)
Text Primary:          #F0EAD6   (Soft Ivory White)
Text Secondary:        #B8A99A   (Muted Warm Grey)
Accent Gold:           #C9A84C   (Muted Gold — rules, borders, CTA)
Accent Gold Light:     #E8D5A3   (Hover state gold)
Divider:               #2E4060   (Subtle navy divider)
Error:                 #C0392B
Success:               #1E6B45
```

**Usage rules:**
- Page 1 background: `#0F1B2D`
- Page 2 background: `#0F1B2D` with ivory cards for content sections
- All gold usage is for decorative lines, borders, and the primary CTA — not for large fills
- No bright colours, no gradients except a very subtle `radial-gradient` on the Page 1 hero (dark navy centre, slightly warmer edges)

---

## 8. Typography

**Font pairing:**

| Role | Font | Weight | Source |
|---|---|---|---|
| Major headings (event name, section titles) | Cormorant Garamond | 600 / 700 | Google Fonts |
| Body / formal text | Lora | 400 / 500 | Google Fonts |
| UI labels, meta text, buttons | Inter | 400 / 500 / 600 | Google Fonts |
| Small caps / decorative labels | Cormorant SC | 500 | Google Fonts |

**Type scale (Tailwind custom):**

```
text-xs:   0.75rem   (12px)  — captions, labels
text-sm:   0.875rem  (14px)  — meta, form labels
text-base: 1rem      (16px)  — body text
text-lg:   1.125rem  (18px)  — section body
text-xl:   1.25rem   (20px)  — card headings
text-2xl:  1.5rem    (24px)  — section headings
text-3xl:  1.875rem  (30px)  — page 1 guest name
text-4xl:  2.25rem   (36px)  — event name (mobile)
text-5xl:  3rem      (48px)  — event name (desktop)
```

**Rules:**
- Tracking: Use `tracking-widest` for "CORDIALLY INVITES" and similar small-caps labels.
- Line height: `leading-relaxed` (1.625) for body text; `leading-tight` for large headings.
- No justified text. Left-aligned body; centred for cover/hero.

---

## 9. Animation Strategy

All animations are **opt-in, non-blocking, and subtle**. The site remains fully usable with `prefers-reduced-motion`.

### Page 1 — Entrance Animations (one-time, on load)

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Both logos | Fade in + slight scale up from 0.95 | 600ms | 0ms |
| Gold decorative rule | Width expand from 0 to full | 500ms | 300ms |
| "Cordially Invites" | Fade in + slide up 8px | 500ms | 500ms |
| Guest name | Fade in + slide up 8px | 600ms | 700ms |
| Event name | Fade in + slide up 12px | 700ms | 900ms |
| Date/Venue row | Fade in | 500ms | 1100ms |
| CTA button | Fade in + scale from 0.97 | 500ms | 1300ms |

### Page 2 — Scroll Animations (Framer Motion `whileInView`)

| Trigger | Animation | Once |
|---|---|---|
| Each section heading | Fade in + slide up 12px | Yes |
| Event detail cards | Staggered fade in (100ms gap) | Yes |
| Dignitary cards | Staggered fade in | Yes |
| Timeline items | Sequential fade in (150ms stagger) | Yes |
| RSVP section | Fade in | Yes |

### Button hover states

- CTA button: `background` lightens, subtle gold glow (`box-shadow: 0 0 16px rgba(201,168,76,0.3)`)
- "Get Directions": underline slide animation
- "Confirm Attendance": scale to 0.98 on active press

### No:
- Parallax scrolling
- Auto-playing carousels
- Looping animations
- Page transition overlays
- Confetti or particle effects

---

## 10. Personalised Invitation Architecture

### URL scheme

```
/invite/[token]
```

Example tokens (slugs or UUIDs — both supported):

```
/invite/principal
/invite/dean
/invite/hod-cse
/invite/dr-sharma-2024
/invite/a3f9c1b2
```

### How it works

1. Admin creates a guest record in Supabase with a unique `token`.
2. Guest receives their personal URL (WhatsApp / email).
3. Next.js fetches guest data server-side via `getServerSideProps` (or App Router `generateMetadata` + Server Component).
4. Page renders with personalised name, designation, and optional message.
5. The same React component tree renders for every guest — only the data changes.

### Data flow

```
Request: /invite/dr-sharma
         ↓
Next.js Server Component / getServerSideProps
         ↓
Supabase: SELECT * FROM guests WHERE token = 'dr-sharma'
         ↓
Props: { name, designation, department, personalMessage }
         ↓
Page 1 + Page 2 rendered with personalised content
```

### Fallback

If token not found → show generic (non-personalised) invitation or a polite "Invitation not found" message. Do not expose other guest records.

---

## 11. RSVP Architecture

### Flow

```
Guest fills form → Client-side validation → POST /api/rsvp → Supabase upsert → Success message shown inline
```

### Validation (client + server)

- Name: required, min 2 chars, max 100 chars
- Designation: required, min 2 chars, max 100 chars
- Attendance: required, one of `["attending", "not_attending"]`
- Token: extracted from URL, validated server-side

### Server route: `POST /api/rsvp`

```
Input:  { token, name, designation, attendance }
Action: Upsert into rsvp_responses where token matches a valid guest
Output: { success: true } or { error: "..." }
```

### Rate limiting

- Max 3 RSVP submissions per token per hour (server-side, using Upstash Redis or a simple Supabase counter).
- IP-based rate limit: max 10 requests per minute per IP (Next.js middleware).

### Admin access

- A protected `/admin` route (password or Supabase auth) shows all RSVP responses.
- Exportable as CSV.

---

## 12. Database Schema

### Table: `guests`

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` (PK) | Auto-generated |
| `token` | `text` (unique) | URL slug, e.g. `principal` |
| `name` | `text` | Full name with title |
| `designation` | `text` | Role/title |
| `department` | `text` (nullable) | Department if applicable |
| `personal_message` | `text` (nullable) | Optional custom line |
| `created_at` | `timestamptz` | Auto |

### Table: `rsvp_responses`

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` (PK) | Auto-generated |
| `guest_id` | `uuid` (FK → guests.id) | |
| `token` | `text` | Denormalised for easy lookup |
| `name` | `text` | Guest-entered name |
| `designation` | `text` | Guest-entered designation |
| `attendance` | `text` | `attending` or `not_attending` |
| `submitted_at` | `timestamptz` | Auto |
| `ip_hash` | `text` (nullable) | Hashed IP for abuse prevention |

### Table: `event_config`

| Column | Type | Notes |
|---|---|---|
| `id` | `int` (PK) | Single row |
| `event_name` | `text` | |
| `event_tagline` | `text` | |
| `event_date` | `text` | Display string |
| `event_time` | `text` | |
| `venue_name` | `text` | |
| `venue_address` | `text` | |
| `venue_maps_url` | `text` | |
| `college_name` | `text` | |
| `community_name` | `text` | |
| `contact_email` | `text` | |
| `contact_phone` | `text` | |

### Supabase RLS Policies

- `guests`: No public read. Service role only (server-side Next.js reads via service key).
- `rsvp_responses`: Insert allowed for all (no auth required for guest form). Select restricted to service role / admin.
- `event_config`: Public read-only (non-sensitive event info).

---

## 13. Recommended Tech Stack

| Technology | Role | Required? |
|---|---|---|
| **Next.js 14** (App Router) | Framework, SSR, API routes | ✅ Yes |
| **React 18** | UI components | ✅ Yes (bundled with Next.js) |
| **Tailwind CSS v3** | Styling | ✅ Yes |
| **Framer Motion** | Animations | ✅ Yes (subtle, professional) |
| **Supabase** | PostgreSQL DB + RSVP | ✅ Yes (if RSVP required) |
| **next/font** | Font loading (Google Fonts) | ✅ Yes |
| **next/image** | Logo and image optimisation | ✅ Yes |
| **Zod** | Server-side input validation | ✅ Yes |
| **Vercel** | Deployment + edge functions | ✅ Yes |
| **Upstash Redis** | Rate limiting | Optional (use Supabase counter if skipping) |

**Not needed:**
- GraphQL (REST via Supabase client is sufficient)
- Redux / Zustand (no complex state)
- Prisma (Supabase JS client handles queries)
- Next Auth (admin access can be a simple env-variable password check for MVP)

---

## 14. Project Folder Structure

```
college-invitation/
├── public/
│   ├── logos/
│   │   ├── college-logo.png
│   │   └── community-logo.png
│   ├── og-image.jpg              ← Open Graph preview image
│   ├── favicon.ico
│   └── qr-placeholder.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout, fonts, metadata
│   │   ├── page.tsx              ← Generic invitation (no token)
│   │   ├── invite/
│   │   │   └── [token]/
│   │   │       └── page.tsx      ← Personalised invitation
│   │   ├── admin/
│   │   │   └── page.tsx          ← Protected RSVP dashboard
│   │   └── api/
│   │       ├── rsvp/
│   │       │   └── route.ts      ← POST handler
│   │       └── guest/
│   │           └── route.ts      ← GET guest by token (server use only)
│   │
│   ├── components/
│   │   ├── page1/
│   │   │   ├── Cover.tsx
│   │   │   ├── LogoBar.tsx
│   │   │   └── GuestBlock.tsx
│   │   ├── page2/
│   │   │   ├── InvitationLetter.tsx
│   │   │   ├── EventDetails.tsx
│   │   │   ├── Dignitaries.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Venue.tsx
│   │   │   ├── RSVP.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/
│   │       ├── GoldRule.tsx
│   │       ├── SectionHeading.tsx
│   │       └── CompactLogoBar.tsx
│   │
│   ├── lib/
│   │   ├── supabase.ts           ← Supabase client (server + browser)
│   │   ├── eventConfig.ts        ← Fetch event_config row
│   │   └── rateLimit.ts          ← Rate limiting helper
│   │
│   ├── types/
│   │   └── index.ts              ← Guest, RSVP, EventConfig types
│   │
│   └── styles/
│       └── globals.css           ← Tailwind base + custom CSS vars
│
├── .env.local                    ← Environment variables
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 15. Deployment Architecture

```
Developer Machine
      │
      │  git push
      ▼
GitHub Repository (main branch)
      │
      │  Vercel GitHub Integration (auto-deploy)
      ▼
Vercel Build (Next.js)
      │
      ├── Static assets → Vercel CDN (Edge Network)
      ├── Server Components → Vercel Serverless Functions
      └── API Routes → Vercel Serverless Functions
      │
      ▼
Production URL: https://invite.example.com
```

### Environment Variables

```bash
# .env.local (never commit to Git)

NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

SUPABASE_SERVICE_ROLE_KEY=eyJxxx...   # Server-only, never exposed to browser

ADMIN_PASSWORD=your-secure-admin-password

NEXT_PUBLIC_SITE_URL=https://invite.example.com

UPSTASH_REDIS_REST_URL=https://...   # Optional, for rate limiting
UPSTASH_REDIS_REST_TOKEN=xxx         # Optional
```

All environment variables except `NEXT_PUBLIC_*` are server-only. Set all of them in Vercel's project environment settings (not just `.env.local`).

### Domain Configuration

1. Add custom domain in Vercel dashboard → Domains → `invite.example.com`
2. Add a `CNAME` record in your DNS provider pointing `invite` → `cname.vercel-dns.com`
3. Vercel auto-provisions TLS (Let's Encrypt). HTTPS is automatic.
4. If using a root domain (`example.com`): Add an `A` record pointing to Vercel's IP instead.

### Deployment steps

```bash
# Initial
npm install
npm run build        # Verify no build errors locally
git push origin main # Vercel auto-deploys

# Environment setup
# → Vercel dashboard → Settings → Environment Variables → add all from .env.local

# Domain
# → Vercel dashboard → Settings → Domains → Add domain → follow DNS steps

# Production check
# → curl https://invite.example.com/invite/principal
# → Check OG preview: https://www.opengraph.xyz/
```

---

## 16. Security Considerations

| Risk | Mitigation |
|---|---|
| Guest data exposure | Guests fetched server-side only; Supabase service key never sent to browser |
| Token enumeration | Tokens are opaque slugs or UUIDs; no sequential IDs |
| RSVP spam | Rate limit: 3 per token/hour + 10 per IP/minute |
| RSVP injection | Server-side validation with Zod before any DB write |
| Admin access | Environment-variable password check; move to Supabase Auth if needed |
| Supabase RLS | `guests` table: no public read. `rsvp_responses`: insert-only for public |
| Secrets in repo | `.env.local` in `.gitignore`; Vercel env vars set in dashboard only |
| XSS | React escapes all output by default; no `dangerouslySetInnerHTML` |
| CORS | API routes restricted to same origin by default in Next.js |

**Note:** This is a student/community project. The above is appropriate for the scale. Do not over-engineer with OAuth, WAF, or penetration testing unless real sensitive data is involved.

---

## 17. Testing Checklist

### Functional
- [ ] `/invite/[token]` renders correct guest name and designation
- [ ] Unknown token shows graceful error, not a crash
- [ ] RSVP form submits and shows success message
- [ ] RSVP form blocks empty submission (client validation)
- [ ] RSVP form is blocked after rate limit exceeded
- [ ] "View Invitation →" navigates/scrolls to Page 2
- [ ] "Get Directions →" opens correct Google Maps URL in new tab
- [ ] Admin page shows RSVP responses (with correct password)
- [ ] Event config updates reflect on live site

### Responsive
- [ ] Page 1 renders correctly on 375px (iPhone SE)
- [ ] Page 1 renders correctly on 768px (iPad)
- [ ] Page 1 renders correctly on 1440px (desktop)
- [ ] Logo bar stacks correctly on small screens
- [ ] Event detail cards stack to single column on mobile
- [ ] Timeline is readable on mobile
- [ ] RSVP form is usable on mobile keyboard

### Visual
- [ ] Both logos are undistorted and correctly sized
- [ ] Gold rules and borders render correctly
- [ ] Fonts load correctly (no FOUT)
- [ ] Animations play once and stop (no looping)
- [ ] `prefers-reduced-motion` disables animations
- [ ] Color contrast passes WCAG AA

### SEO / Social
- [ ] OG title, description, and image set correctly per guest
- [ ] WhatsApp link preview shows correct event image and title
- [ ] Favicon appears in browser tab
- [ ] `<title>` tag is meaningful

### Performance
- [ ] Lighthouse score ≥ 90 on mobile (Performance)
- [ ] Lighthouse score ≥ 95 on desktop
- [ ] No layout shift on logo/font load (CLS < 0.1)

---

## 18. MVP vs Optional Features

### MVP (must ship)

- [ ] Two-page invitation layout
- [ ] Personalised guest URL (`/invite/[token]`)
- [ ] Both logos displayed correctly
- [ ] Formal invitation message
- [ ] Event details section
- [ ] Dignitaries section
- [ ] Schedule timeline
- [ ] Venue with Google Maps link
- [ ] RSVP form with Supabase storage
- [ ] Mobile-responsive design
- [ ] Open Graph meta tags
- [ ] Vercel deployment on custom domain

### Optional / Phase 2

- [ ] QR code in footer (auto-generated from URL)
- [ ] Admin RSVP dashboard with CSV export
- [ ] Email confirmation to guest after RSVP (Resend / Nodemailer)
- [ ] WhatsApp-optimised share card (separate OG image per guest)
- [ ] Rate limiting via Upstash Redis (vs simpler Supabase counter)
- [ ] Animated map embed (Leaflet.js — no Google Maps API key required)
- [ ] Print-friendly CSS for Page 2
- [ ] Multi-event support (event selector or separate configs)

---

## 19. Development Timeline

| Phase | Task | Duration | Deliverable |
|---|---|---|---|
| **1** | Content & requirements | 0.5 day | Finalized event data, guest list, logo files |
| **2** | UI wireframe | 0.5 day | This plan document |
| **3** | Visual design tokens | 0.5 day | Tailwind config, fonts, color vars |
| **4** | Page 1 development | 1 day | Cover page with animations |
| **5** | Page 2 development | 2 days | All sections except RSVP |
| **6** | Personalisation | 1 day | `/invite/[token]` dynamic routing + Supabase guests table |
| **7** | RSVP | 1 day | Form, API route, Supabase write, success state |
| **8** | Responsive testing | 0.5 day | Fixes for all breakpoints |
| **9** | Performance & accessibility | 0.5 day | Lighthouse, alt text, focus states |
| **10** | Deployment | 0.5 day | Vercel + custom domain + env vars |
| **11** | Final QA | 0.5 day | All checklist items signed off |
| | **Total** | **~8 days** | Production-ready invitation |

---

## 20. Final Launch Checklist

### Content
- [ ] Event name, date, time, venue confirmed
- [ ] All dignitary names and designations confirmed
- [ ] Schedule finalised
- [ ] Guest list and tokens created in Supabase
- [ ] Invitation letter text reviewed and approved
- [ ] Both official logos provided in high-resolution PNG (transparent background)
- [ ] Venue Google Maps URL confirmed

### Technical
- [ ] All environment variables set in Vercel
- [ ] Supabase RLS policies verified
- [ ] Custom domain DNS propagated and HTTPS active
- [ ] OG image uploaded to `/public/og-image.jpg`
- [ ] Favicon set
- [ ] All guest URLs tested end-to-end
- [ ] RSVP form tested (submit → Supabase → success message)
- [ ] Rate limiting verified (submit 4 times → blocked)
- [ ] Admin page accessible only with correct password
- [ ] Lighthouse score ≥ 90 on mobile

### Sharing
- [ ] WhatsApp preview tested (paste URL in WhatsApp → check preview card)
- [ ] Email tested (link in email client → correct preview)
- [ ] QR code generated and tested (if using)
- [ ] Invitation URLs shared with guests via WhatsApp / email

### Post-launch
- [ ] Monitor RSVP responses in admin dashboard
- [ ] Export RSVP CSV before event day
- [ ] Test site accessibility on event day (uptime)

---

*Plan version 1.0 — Ready for development handoff.*
