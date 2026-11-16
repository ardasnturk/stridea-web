# Stridea website

Landing page, privacy policy, terms of use and support page for **Stridea**, the city
walking and sightseeing app for iPhone (fog-of-war exploration map), in English and Turkish. Live at
<https://stridea.ardasnturk.com/>.

What the site presents, and what has to stay in step with the app
(`../steps-app/README.md`, `docs/PRO.md`, `marketing/review-notes.md`):

- **The concept:** the person's city starts under fog; every walk (recorded in the app or on
  Apple Watch, or a walk/hike with a route in Apple Health) clears about 100 m on each side of
  its route. Hexagonal areas about 500 m across, orange from half uncovered; weekly new
  ground; the nearest fog.
- **Sights** from Apple Maps (landmarks and monuments, museums, castles and fortresses,
  theatres and planetariums, libraries, parks) are collected when a walk passes within about
  100 m; undiscovered ones are question marks on the map. A sight's card has its distance,
  "Walk There" (walking route) and "About This Place" (Apple Maps place card); "Worth Seeing
  Nearby" suggests the closest unseen ones.
- **Awards › Collection:** a cup per category in four tiers (bronze 1, silver 10, gold 40,
  platinum 120 sights) = 24 cups, the collected sights, the "New Discovery" celebration.
  Also 35 medals and competitions (new ground or steps, via iCloud).
- **Free:** everything above, plus the Today tab (steps, distance, heart rate, walks, history,
  step trends, heart-rate zones) and widgets.
- **PRO** (yearly / 3-month / monthly / weekly subscription or a one-time lifetime purchase):
  sightseeing tours, exploration time-lapse, personal suggestions (with the on-device "Your
  Week in Words" summary on iPhones with Apple Intelligence), walking analysis, motion
  analysis and walking metrics. PRO items carry the `ProBadge` (`src/components/ProBadge.tsx`).
- **No free trial.** New installs see the paywall once after onboarding; closing it starts a
  one-time 24-hour welcome offer (the 3-month plan at a discount).
- **No prices on the site.** The copy only names the plan types; the app shows the prices.
- **App structure the copy and mocks assume:** four tabs (Explore, Today, Awards, Stats), a
  floating button that starts a walk, Settings in the header.
- The privacy policy, terms and support page describe Apple Health, Motion & Fitness,
  location, Apple's MapKit (sights, walking routes, area names), iCloud (competitions, iCloud
  Sync), in-app purchases and RevenueCat. Update them whenever the app starts reading new
  data, contacts a new service or adds an SDK.

- `/` – landing page
- `/privacy/` – privacy policy (to be linked from the app and App Store Connect)
- `/terms/` – terms of use
- `/support/` – support page (App Store support URL)

Vite + React 19 + Tailwind CSS 4 + TypeScript. One HTML entry per page, no router.

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # type-check and build to dist/
npm run preview   # serve the built site
```

## Renaming the app, releasing it

Everything that changes with the name or the release lives in `src/config.ts`:

| Constant | Meaning |
| --- | --- |
| `APP_NAME` | App name. Renaming the app is this one line (plus regenerating `og.png`, see below). |
| `BUNDLE_ID` | `com.ardasnturk.steps` |
| `SUPPORT_EMAIL`, `DEVELOPER`, `MIN_IOS` | Shown in the copy and the legal pages. |
| `APP_STORE_URL` | `null` until the app is released: store buttons render as a non-link "Coming soon to the App Store" label. Set it to the App Store URL to turn them into download links. |
| `SITE_URL` | `https://stridea.ardasnturk.com` (no trailing slash; must match `public/CNAME`). Used for the canonical, `og:url` and `og:image` tags. |

The name is never written out in components or translations. Translations use the tokens
`{app}`, `{email}`, `{developer}` and `{ios}` (filled in by `src/i18n/index.tsx`); the HTML
entries use `%APP_NAME%` (filled in by the small plugin in `vite.config.ts`).

## Texts

Texts shared by every page (header, footer, privacy, terms, support) live in
`src/i18n/<language>.ts`; the landing page copy lives in `src/i18n/home/<language>.ts`
(types in `src/i18n/types.ts`). The language is picked from `?lang=`, the saved choice,
then the browser language, then English.

To add a language: add its code to `LANGUAGES`, `LANGUAGE_NAMES` and `LOCALES` in
`src/i18n/types.ts`, create the two dictionary files and register them in
`src/i18n/index.tsx`.

The landing page sections are in `src/pages/home/`: `Hero`, `Stats`, `Showcase` (one tab
per app screen), `Explore` (how a walk clears the fog and collects a sight, anchor
`#explore`), `Collect` (cups, nearby sights, areas, competitions, the Today tab, anchor
`#collection`), `Pro` (sightseeing tours, time-lapse, insights, free vs PRO, the welcome
offer and the plan types, anchor `#pro`) and `Rest` (little things, privacy, FAQ, call to
action). Motion is plain CSS plus a few hooks
in `src/lib/motion.ts` (reveal on scroll, parallax, counters, looping demo steps); all of
it is switched off for `prefers-reduced-motion`. The site follows the system light/dark
setting.

### Screenshots

There are no real screenshots yet. Every slot in `SCREENS` in `src/config.ts` is `null`,
so the site shows built-in HTML mocks of the screens (`src/pages/home/mocks.tsx`: Explore,
a sight's card, Awards › Collection, Awards › Competitions, Today) inside the device frame.
`FogMap` in the same file is the stylised fog map used by the mocks and the demos.

To use real screenshots:

1. Capture raw, unframed iPhone screens (the site draws the device frame itself; do not
   use composed App Store images with headlines). The frame expects the 1206 × 2622 aspect
   ratio.
2. Save them as `public/screens/<language>/<name>.png`, e.g. `public/screens/en/explore.png`
   and `public/screens/tr/explore.png`.
3. Set the slot in `SCREENS` to `"<name>"`, e.g. `explore: "explore"`.

A missing language falls back to English, then to the HTML mock. Slots: `explore` (hero and
"Explore" tab), `sight` (a sight's card with Walk There / About This Place), `collection`
(Awards › Collection), `compete` (Awards › Competitions, a new-ground competition), `today`.

The mocks are laid out for a 300px-wide screen and scale with the frame; inside them use
normal Tailwind spacing classes and `fs-<px>` for font sizes (see `.mock` in
`src/index.css`).

### Icon and social image

`public/assets/icon.png` (1024 × 1024) and `public/assets/og.png` (1200 × 630) are
placeholders generated by a script (needs Python with Pillow):

```bash
python3 scripts/make_assets.py            # uses the name "Stridea"
python3 scripts/make_assets.py "New Name" # og.png contains the app name
```

Replace `icon.png` with the real app icon when it exists.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`; it can also be started by hand from the Actions tab).
Pages uses "GitHub Actions" as its source.

The site is served at the custom domain in `public/CNAME` (`stridea.ardasnturk.com`), a
DNS `CNAME` record pointing at `ardasnturk.github.io`. To move it, change `public/CNAME`,
`SITE_URL` in `src/config.ts` and the custom domain in the repository's Pages settings.

The site is built for the root of a domain (`base: "/"` in `vite.config.ts`, absolute
`/assets/…` paths). To serve it from `https://<user>.github.io/<repo>/` instead, the base
path and those absolute paths have to be changed.
