# CLAUDE.md — Small Wonder Puppet Theater website

Project memory for the site build. Read this first every session.

## Project
Consolidate two Wix sites into ONE custom, cheaply-hosted site (moving off Wix, ~$1,200/yr → ~$25–30/yr). Primary domain: **bringthewonder.com**. The approved homepage design lives in `index.html` (the site entry point) — treat it as the source of truth for look, tokens, and components.

## The business
Small Wonder Puppet Theater. 100% puppet shows (robotics + silent disco were dropped; robotics may return later). Two products:
- **The Puppet Show** — flagship, ~45 min. Live puppets + actors, highly interactive, transports kids into another world. (Do NOT describe it as "music + ventriloquism"; those aren't a given.)
- **The Ventriloquist Show** — ~30 min. A funny, scripted alternative; a good second option for a more intimate crowd. (NOT Uncle Pinchy, NOT unscripted.)

Seasons: Summer = camps (biggest volume). Chanukah = the blitz (dial up seasonally). Year-round = schools/orgs/parties. **Parties = the growth target.**

## Positioning & voice (important)
- Lead brand is **Small Wonder Puppet Theater**. "Wonder Entertainment" is the parent — footer/legal only.
- Tagline direction: **"Bringing Judaism to life"** (Jewish holidays & stories come to life).
- Appeal to people who've **never heard of the brand** first. **Uncle Pinchy is iykyk only — never headline him.** Let "unclepinchey" search traffic flow to the Kids' Corner videos (SEO).
- **Accurate claims only:** "hundreds of thousands of children over 45+ years." NOT "a million," NOT "grew up on." Do NOT name the creator.
- Keep "since 1978" rare — one hero eyebrow max; don't repeat it across the page.

## Booking model
- Separate **effort-friction** (always ~zero) from **price-friction** (seasonal).
- **No public pricing by default.** Standard target ~$1,100. A budget show exists but is **off-menu — never advertise it.**
- Universal low-effort inquiry form: segment + date + location + # of shows + contact → instant "we're holding your date, we'll confirm shortly." Plus click-to-text (`sms:+18057388405`) and call links everywhere.
- Summer: no price, invite the call. Chanukah: optionally surface "standard shows from $1,100" to filter demand. **Build the price line as an easy seasonal toggle.**
- Do NOT promise "no deposit."
- We travel to the customer. **Never publish a physical address** (1318 Carroll is a private home — keep it off the site entirely).

## Contact
Phone/text **1-805-738-8405** · **info@BringTheWonder.com** · no street address on the site.

## Design system (reuse from `index.html`)
Direction: **bright, playful, PBS-Kids-warm** — NOT moody/theatrical. Rounded, sunny, a little whimsical.
**Fonts:** Fredoka (display/headings, Google Fonts) + Nunito (body). (Superseded the old Fraunces + Mulish, which read as generic/"AI".)
**Colors (CSS vars):** `--paper #FFF6E8` · `--paper-2 #FBEBCF` · `--ink #2B2326` · `--ink-soft #6A585C` · `--red #E14B3B` · `--red-deep #C23A2C` · `--brick #7A2A24` · `--sun #F5B63F` · `--sun-deep #DD9E2A` · `--teal #2FA69A` · `--teal-deep #22807A` · `--sky #3FA7D6` · `--grape #8367C7`.
**Rules:** everything stays light/bright/playful — sunny cream page, gold trust bar, teal closing CTA, deep-brick footer, white rounded cards. Red is the primary brand accent; gold is the primary button. Reserve any single deep block (footer) so the page never goes dark up top.
**Signature:** the hero video sits in a friendly rounded card (6px white border, slight tilt) with a "Watch the magic!" sticker + big gold play button, over a sunny gradient with floating confetti dots + sparkles. (The old proscenium/velvet-curtain/footlights signature was dropped — too theatrical.)
**Playful accents:** squiggle underline on a hero keyword; chunky 3D pill buttons (translateY on press); rounded icon chips on tiles; colored number circles in how-it-works; slight card tilt on hover.
**Components already built:** sticky nav (blob logo mark) + mobile hamburger; bright hero with confetti + rounded video card; gold stats trust bar; 4 audience tiles (colored top bars + icon chips, "Popular" ribbon on Parties); 1-2-3 how-it-works with colored number circles; 2 show cards; testimonial carousel (auto 5s, dots, arrows, pause-on-hover); "where we've been" infinite marquee; teal closing CTA; brick footer. Respect `prefers-reduced-motion`.
**Buttons:** pill-shaped, chunky 3D drop-shadow; primary = gold; secondary = red; ghost = white with light border.

## Sitemap / pages
- **Home** — BUILT (`small-wonder-homepage.html`).
- **Our Shows** — Puppet Show + Ventriloquist Show detail. TODO.
- **Who It's For** — audience pages: Summer Camps · Schools & Organizations · Birthday Parties (growth focus; heaviest testimonials + reassurance) · Chanukah (seasonal). TODO.
- **Kids' Corner** — a few free classic videos + full library gated behind an email signup (lead magnet, NO payment). Videos on YouTube-unlisted/Vimeo embeds (do not self-host). This email list doubles as the booking funnel + Chanukah mailing list. TODO.
- **About** — heritage story (no creator name) + the "where we've been" list. TODO.
- **Contact / Book** — the inquiry form + click-to-text + call. TODO.
- **FAQ** — objection handling: ages, group size, space needed, travel, lead time, puppet vs. ventriloquist, indoor/outdoor. TODO.
- **Redirects:** unclepinchey.com AND the "pinchy" spelling → Kids' Corner.

## Tech stack (decided)
- Static, custom-built. Plain HTML/CSS/JS is fine; keep it simple, fast, cheap, minimal dependencies.
- **Hosting:** Cloudflare Pages (lead — unlimited bandwidth, free, easy redirects) or Netlify (if you want built-in Forms). **Avoid Vercel** (free tier is non-commercial).
- **Forms:** Netlify Forms, or Formspree/Web3Forms — inquiries email to info@BringTheWonder.com.
- **Email list:** Kit (10k free) or Brevo (high contact ceiling).
- **Videos:** YouTube-unlisted or Vimeo embeds.
- Domains already owned; bringthewonder.com is primary.

## Content status
- **Real:** contact info, show lengths, positioning, seasons.
- **Placeholder (owner to supply):** sizzle-reel video; per-setting photos/clips; real testimonials; the "where we've been" list; the camps/schools/shuls count.

## Parked / future
- **"Visualize it for your group"** scenario-picker: tap a scenario → see the recommended show, group size, space needed, a photo of that setting, and a booking CTA pre-tagged to that segment. Parked until real per-setting media exists; could later replace the static audience tiles.
- Robotics page may return.

## Build principles
Mobile-first, responsive, accessible, fast. Reuse the homepage's tokens and components on every page for consistency.
