# Small Wonder Puppet Theater — Project Brief

*Project overview and decision log. The detailed build spec (design system, tech stack, page-by-page) now lives in `CLAUDE.md`, which drives the Claude Code build. Keep this brief and CLAUDE.md in sync.*

---

## The business
- Small Wonder Puppet Theater. **100% puppet shows** (robotics + silent disco dropped; robotics may return later).
- Two products: **The Puppet Show** (~45 min, flagship — live puppets + actors, highly interactive, transports kids into another world) and **The Ventriloquist Show** (~30 min, a funny scripted alternative for a more intimate crowd).
- Parent brand: Wonder Entertainment (footer/legal only).
- Contact: **1-805-738-8405 · info@BringTheWonder.com**. No physical address on the site (the Brooklyn address is a private home).
- Seasons: Summer = camps (biggest volume) · Chanukah = the blitz · Year-round = schools/orgs/parties. **Parties = growth target.**

## Positioning (updated)
- Lead with **Small Wonder Puppet Theater**; Wonder Entertainment demoted to footer.
- Tagline direction: **"Bringing Judaism to life."**
- **Broad appeal first** — win people who've never heard of the brand. **Uncle Pinchy is iykyk only, never headlined.** Let "unclepinchey" searches flow to the Kids' Corner videos (SEO).
- **Accurate claims only:** hundreds of thousands of children over 45+ years. NOT "a million," NOT "grew up on." **Creator's name removed everywhere (incl. About), per owner.**
- Keep "since 1978" rare (one hero eyebrow max).

## Decisions locked
- Custom-built (not Wix); cheap hosting. Primary domain **bringthewonder.com**. unclepinchey.com + the "pinchy" spelling → **redirect to Kids' Corner**.
- Videos: **drop the subscription**; some free, full library unlocked by an email signup (lead magnet, no payment), in **Kids' Corner**. That list doubles as the booking funnel + Chanukah mailing list.
- Dropped robotics + silent disco.

## Design direction
- Thesis: **PBS Kids** simplicity/warmth + **California Kids Fun** conversion engine (trust bar, audience segments, objection FAQ, click-to-text) + **Slappy / Riley & Monday** video-first hero. Skip CKF's visual clutter.
- Proof layer = **heritage + testimonials + "where we've been"** (not star ratings) — with accurate numbers.
- **Homepage is BUILT** (`small-wonder-homepage.html`). Full design system (Fraunces + Mulish, the palette, the proscenium-stage signature, all components) is documented in `CLAUDE.md`.

## Booking model
- Separate **effort-friction** (always ~zero) from **price-friction** (seasonal).
- **No public price by default.** Standard target ~$1,100. Budget show exists but **off-menu — never advertised.**
- Universal low-effort inquiry form (segment/date/location/# shows/contact) + instant "date held, we'll confirm" + click-to-text + call everywhere.
- Summer: no price, invite the call. Chanukah: optional "from $1,100" filter line — **build as a seasonal toggle.**
- No "no deposit" promise. We travel to you. **Never publish the address.**

## Tech stack (decided)
- Static custom build. Hosting: **Cloudflare Pages** (lead) or **Netlify** (built-in forms). Avoid Vercel (non-commercial free tier).
- Forms: Netlify Forms / Formspree / Web3Forms → email to info@BringTheWonder.com.
- Email list: **Kit** (10k free) or **Brevo** (high contact ceiling).
- Videos: **YouTube-unlisted / Vimeo embeds** (not self-hosted).
- ~$25–30/yr (domain renewals) vs ~$1,200 now.

## Content status
- **Real:** contact info, show lengths, positioning, seasons.
- **Placeholder (owner to supply):** sizzle-reel video; per-setting photos/clips; real testimonials; the "where we've been" list; the camps/schools/shuls count.

## Parked / future
- **"Visualize it for your group"** scenario-picker: tap a scenario → recommended show, group size, space needed, a photo of that setting, and a booking CTA pre-tagged to that segment. Parked until real per-setting media exists; could later replace the static audience tiles.
- Robotics page may return.

## Build approach & status
- Prototype in chat → build/deploy in **Claude Code** (git repo + CLAUDE.md), keep for seasonal edits.
- **DONE:** homepage prototype; design system; `CLAUDE.md` build spec.
- **> Next (in Claude Code):** scaffold the project from the homepage, then build the **Birthday Parties page** and the **booking form** first (growth target), followed by the other Who-It's-For pages, Our Shows, Kids' Corner, About, Contact/Book, and FAQ.

---

Files: `small-wonder-homepage.html` (approved homepage) · `CLAUDE.md` (build spec for Claude Code) · this brief (overview + decision log).
