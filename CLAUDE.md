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
- Tagline: **"Bringing Jewish Tradition and Values to life"** (nav sub, site-wide).
- Appeal to people who've **never heard of the brand** first. **Uncle Pinchy is iykyk only — never headline him.** Let "unclepinchey" search traffic flow to the Kids' Corner videos (SEO).
- **Accurate claims only:** "hundreds of thousands of children over 45+ years." NOT "a million," NOT "grew up on." (Naming people is now fine — owner lifted the earlier "don't name the creator" rule; the performer/ventriloquist is Yaakov Horowitz.)
- Keep "since 1978" rare — one hero eyebrow max; don't repeat it across the page.
- **Do NOT trumpet "kosher" or "reviewed by a Rav"** — the owner says it raises a red flag. Trust comes from track record (where we've been: CBS, Jewish Children's Museum, Javits Center Expo, 45+ years, communities served). Removed site-wide. Also **don't say "and at secular schools too."**
- **Don't mention outdoor / backyard shows** — we generally don't do them. Indoor settings only (living room, hall, gym, classroom, shul).
- **Setup needs** (detailed pages only, not brief mentions): some space, an **electric outlet**, and ideally a **ceiling at least 7½ ft** high.
- **Copy style:** no em dashes (owner preference — use commas/periods/colons); avoid "tuned to the room" phrasing (use "your group / your crowd / your space").

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
**Logo & motif:** the Wonder Entertainment logo (royal purple wordmark, gold outline, blue "ENTERTAINMENT", arc of multi-colored **six-pointed Magen David stars**). The site adopts that motif: the hero decorations and the nav brand mark are six-pointed stars (CSS `--star` mask) in the logo colors, and the palette gained `--purple #6E2C9D` / `--purple-deep` / `--green #6FB63C`. The transparent logo PNG (`assets/images/logo.png`) is now placed in the **nav** (left of the "Small Wonder Puppet Theater" wordmark) and the **footer** (on a white chip, since the purple wordmark is low-contrast on the brick footer), on every page.
**Playful accents:** squiggle underline on a hero keyword; chunky 3D pill buttons (translateY on press); rounded icon chips on tiles; colored number circles in how-it-works; slight card tilt on hover; floating six-pointed stars in the hero.
**Components already built:** sticky nav (Wonder Entertainment logo + wordmark) + mobile hamburger; bright hero with confetti + rounded video card; gold stats trust bar; 3 audience tiles (small contained rounded photo + colored top bar + an "includes" subtype line, "Popular" ribbon on Family Parties); 1-2-3 how-it-works with colored number circles; 2 show cards (photo on top + icon + copy); testimonial carousel (auto 5s, dots, arrows, pause-on-hover); "where we've been" infinite marquee; teal closing CTA; brick footer. Respect `prefers-reduced-motion`.
**Buttons:** pill-shaped, chunky 3D drop-shadow; primary = gold; secondary = red; ghost = white with light border.

## File structure
- `index.html` — homepage (site entry point).
- `parties.html` — Family Parties page.
- `book.html` — Contact / Book page (the full inquiry form).
- `shows.html` — Our Shows page (two formats + "most popular shows" video-snippet features).
- `assets/css/site.css` — **the single source of truth for the design system** (tokens + every component). All pages link it; do NOT re-inline CSS per page.
- `assets/js/site.js` — shared behavior: mobile menu, testimonial carousel, and the booking-form handler (any `<form data-book>` is enhanced).

## Sitemap / pages
- **Home** — BUILT (`index.html`).
- **Contact / Book** — BUILT (`book.html`): the universal low-effort inquiry form (event type + date + location + # shows + name/phone/email/notes), instant "we're holding your date" confirmation, click-to-text + call. Reused as an embedded section on other pages.
- **Family Parties** — BUILT (`parties.html`): growth-target page — hero, "why families love it" feature grid, parent-FAQ reassurance, which-show, party testimonials, and an embedded booking form pre-tagged `segment=Family party`.
- **Our Shows** — BUILT (`shows.html`): the two formats (Puppet Show + Ventriloquist) + a "most popular shows" section of **5 real shows** with owner-written descriptions (The Cow That Kept Shabbat · The Two Brothers · The Unhappy King · The Garbage and the Kotel · The Monkey with the Gold Coins). Each `.show-feature .videocard` is **poster-only until per-show YouTube IDs arrive** — add `data-yt="<id>"` to a card to turn on click-to-play. Posters `show-1..5`; note **show-5 (Monkey) uses a king+advisor stand-in photo** — there's no monkey photo yet, swap when available. The homepage keeps a 2-format teaser (`#shows`); the standalone `cast-*` images are no longer used on any page (owner dropped the cast gallery) but remain available for reuse.
- **Who It's For** — all three tiles now have detail pages: **Family Parties** (`parties.html`), **Summer Camps** (`camps.html`), **Schools & Organizations** (`schools.html`). Camps + Schools mirror the Family Parties structure (hero → why-us feature grid → reassurance FAQ-lite → which-show → embedded booking form pre-tagged via `data-segment`). Homepage tiles link to them. (Chanukah lives inside Schools/Orgs + Family Parties, not a standalone tile. Seasonal price toggle still belongs on the Family Parties + Chanukah-programming paths — not yet built.)
- **Kids' Corner** — BUILT (`kids.html`, scaffold): 3 "free to watch" cards (poster + "Coming soon" until Vimeo IDs arrive) + an **email-unlock** signup for the full library. The signup reuses the `data-book` form handler → posts to Web3Forms (interim; swap for **Kit or Brevo** when picked). **Video host = Vimeo** (owner's call: free during dev, paid domain-locked at go-live, because the frum clientele must not be exposed to the YouTube content-jungle). A Vimeo click-to-play facade still needs adding to `site.js` when the first IDs come. Running owner checklist lives in `TODO.md`.
- **About** — BUILT (`about.html`): "Puppetry with a purpose" mission + credentials up top (since 1978, hundreds of thousands of kids, ~5,000 shows, CBS Chanukah special, Jewish Children's Museum, Javits Center Expo), then a **"A family affair"** story lower down. The story is framed as a family project spanning **three generations plus in-laws**: at the heart is **Rabbi Yaakov Horowitz** (the guitar + old-man-puppet performer), and **nearly all scripts are written by Yaakov and his wife**; children/in-laws/grandchildren all take a turn behind the stage. Then handmade community puppets → copper travelling stage → the "make someone else happy" mission via *The Unhappy King* → Uncle Pinchy → ventriloquism. **Deliberately skips the founding-by-Aliza-Horowitz origin** per owner (the theater was started by his mother Aliza, but we don't tell that part). Two photos are **inset into the prose** (small floated cards, `.inset.right`/`.inset.left`, tilt + white border): `about-4` (selfie = Yaakov backstage with the owner's brother-in-law) floated right; `about-2` (a family performer in a sweater in front of the branded stage) floated left. `about-1` (Yaakov + old-man puppet) stays as the full-width `.figure` in "What we do". (Kosher/Rav-review section removed per owner.)
- **FAQ** — BUILT (`faq.html`): practical Q&A (show format 40–45 min w/ 2–3 puppet shows + musical program, ages 3–10, audiences 20–500, self-contained sound/lighting, travel area = **Tri-State NY/NJ/CT + Dallas** + seasonal elsewhere, setup needs = space + electric outlet + 7½ ft ceiling, puppet-vs-ventriloquist, lead time). Linked in the main nav + footers.
- **Claims settled:** use "**hundreds of thousands** of children" (NOT "over a million," even though the owner's old brochure says a million). "Nearly 5,000 shows" is OK to state.
- **Redirects:** unclepinchey.com AND the "pinchy" spelling → Kids' Corner.

## Booking form wiring (ACTION NEEDED before go-live)
The form posts to **Web3Forms** (chosen because it works on Cloudflare Pages, the lead host, with no backend). Each form has a hidden `access_key` set to the placeholder **`YOUR-WEB3FORMS-ACCESS-KEY`** (in `book.html` and `parties.html`). To activate: create a free key at web3forms.com tied to **info@BringTheWonder.com** and replace both placeholders. Until then the form gracefully falls back to a call/text prompt. If you'd rather host on **Netlify**, switch to Netlify Forms instead (add `data-netlify="true"` + a hidden `form-name`, drop the Web3Forms fetch). No public pricing on the form (summer/parties = invite the call).

## Tech stack (decided)
- Static, custom-built. Plain HTML/CSS/JS is fine; keep it simple, fast, cheap, minimal dependencies.
- **Hosting:** Cloudflare Pages (lead — unlimited bandwidth, free, easy redirects) or Netlify (if you want built-in Forms). **Avoid Vercel** (free tier is non-commercial).
- **Forms:** Netlify Forms, or Formspree/Web3Forms — inquiries email to info@BringTheWonder.com.
- **Email list:** Kit (10k free) or Brevo (high contact ceiling).
- **Videos:** YouTube-unlisted or Vimeo embeds.
- Domains already owned; bringthewonder.com is primary.

## Content status
- **Real:** contact info, show lengths, positioning, seasons.
- **Hero reel — LIVE:** YouTube-unlisted promo `9ojQ0W3WSJo`, embedded as a **click-to-play facade** on both the home and Family Parties heroes (`.videocard[data-yt]` in `assets/js/site.js`; privacy-mode `youtube-nocookie` + `rel=0`, so nothing loads from YouTube until clicked and no third-party related videos show). The source reel is only 480p — a higher-res master would let it go bigger.
- **Photos — real photos now in `assets/images/`** (WebP + JPG, optimized). Home hero poster = `hero-home` (guitar + parrot); Family Parties hero poster = `hero-parties`. **"Meet the cast"** masonry gallery on the homepage uses `cast-*` (scissors/Pinchy, king-vizier, knight, king, elders, freckles). Deliver photos via **chat .zip attachment** — Drive links are blocked by this environment's egress policy; inline-pasted images don't persist to disk, but a zipped attachment does.
- **Still available to place (from the owner's zip), not yet used:** the four 2024 hi-res shots `5E6A9886` (performer + old-man puppet) and `IMG_5311` (performer + branded stage) → **About**; `5E6A0005` (two-puppet scene) + `Cow 2/3` (shepherd + donkey stage scene) → **Our Shows / Puppet Show**; `count-king2` + Purim stage shots → **Schools/Orgs → Purim**; `IMG_6385` (behind-the-scenes selfie) → About/BTS.
- **Believable placeholders (see `TODO.md`):** testimonials (Home + Family Parties) use generic attributions — **must be replaced with real quotes before public launch**; the Home marquee lists real service-area communities ("Communities we've performed for") rather than named venues.
- **Image reuse:** ~14 source photos for 20+ slots, so several repeat — straw-hat `5E6A9822` (parties hero + camps tile + Two Brothers), old-man `5E6A9886` (About + vent card + Garbage show), guitar `5E6A9943` (home hero + parties tile), `Cow 2` (puppet card + Cow show), `count-king2` (schools tile + Monkey), `5E6A0005` (Unhappy King, home+shows). Owner to send more photos to de-dupe (list in `TODO.md`).
- **Placeholder (owner to supply):** a higher-res master of the promo reel.

## Parked / future
- **"Visualize it for your group"** scenario-picker: tap a scenario → see the recommended show, group size, space needed, a photo of that setting, and a booking CTA pre-tagged to that segment. Parked until real per-setting media exists; could later replace the static audience tiles.
- Robotics page may return.

## Build principles
Mobile-first, responsive, accessible, fast. Reuse the homepage's tokens and components on every page for consistency.
