/**
 * Everything that changes when the app is renamed or released lives here.
 * Components and translations never spell these out: translations use the tokens
 * `{app}`, `{email}`, `{developer}` and `{ios}`, which `src/i18n/index.tsx` fills in, and the
 * HTML entries use `%APP_NAME%`, which `vite.config.ts` fills in.
 */

/** Working name. Renaming the app = changing this line. */
export const APP_NAME = "Steps";
export const BUNDLE_ID = "com.ardasnturk.steps";
export const DEVELOPER = "Arda Sentürk";
export const SUPPORT_EMAIL = "support@ardasnturk.com";
/** Oldest supported iOS version, shown in the copy. */
export const MIN_IOS = "18";

/**
 * App Store page, e.g. "https://apps.apple.com/app/id0000000000".
 * `null` = not released yet: store buttons render as a non-link "Coming soon" state.
 */
export const APP_STORE_URL: string | null = null;

/**
 * Public address of the site without a trailing slash, e.g. "https://steps.example.com".
 * `null` = no domain chosen yet: canonical and og:url tags are left out.
 */
export const SITE_URL: string | null = null;

export type ScreenSlot = "today" | "walk" | "zones" | "metrics";

/**
 * Screenshot slots used on the landing page.
 *
 * Each slot names a raw (unframed) iPhone screenshot in `public/screens/<language>/<name>.png`.
 * The site draws the device frame itself, so use plain screen captures, not composed
 * App Store images with headlines.
 *
 * `null` means "no screenshot yet": the page shows a live HTML mock of that screen instead
 * (`src/pages/home/mocks.tsx`). To swap in a real screenshot, drop `<name>.png` into every
 * language folder (a missing language falls back to English, then to the mock) and set the
 * slot to `"<name>"`.
 */
export const SCREENS: Record<ScreenSlot, string | null> = {
  /** Hero phone and the "Today" tab: goal ring, summary card, key stats, hourly chart. */
  today: null,
  /** "Walks" tab: live map with the route, timer, distance, steps and pace. */
  walk: null,
  /** "Heart-rate zones" tab: donut, per-zone breakdown, insight. */
  zones: null,
  /** "Walking metrics" tab: four metric cards and the heart-rate chart. */
  metrics: null,
};

/** Localized screenshot shown on the site. */
export function screenshot(language: string, name: string): string {
  return `/screens/${language}/${name}.png`;
}
