export const LANGUAGES = ["en", "tr"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
};

/** Locale used for number formatting in the mock screens. */
export const LOCALES: Record<Language, string> = { en: "en-US", tr: "tr-TR" };

/*
 * Tokens available in every text (filled in by `src/i18n/index.tsx` from `src/config.ts`):
 * `{app}` app name, `{email}` support address, `{developer}` developer name, `{ios}` minimum iOS version.
 * Never write the app name out in a translation.
 */

export interface Item {
  title: string;
  text: string;
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

/** Texts shared by every page: header, footer, legal and support pages. Lives in `src/i18n/<language>.ts`. */
export interface BaseDictionary {
  meta: { title: string; description: string };
  nav: {
    features: string;
    walks: string;
    insights: string;
    privacy: string;
    faq: string;
    download: string;
    comingSoon: string;
    language: string;
    menu: string;
    skip: string;
  };
  /** Store button: `small`/`large` when the app is live, `soonSmall`/`soonLarge` before release. */
  appStore: { small: string; large: string; soonSmall: string; soonLarge: string };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    rights: string;
    trademarks: string;
  };
  legal: {
    updated: string;
    back: string;
    privacyTitle: string;
    privacyIntro: string;
    privacySections: LegalSection[];
    termsTitle: string;
    termsIntro: string;
    termsSections: LegalSection[];
  };
  support: {
    title: string;
    intro: string;
    emailLabel: string;
    emailHint: string;
    topics: Item[];
  };
}

/** The screens shown as tabs in the showcase. Same ids as the screenshot slots in `src/config.ts`. */
export type ShowcaseTabId = "today" | "walk" | "zones" | "metrics";

/** Texts of the landing page. Lives in `src/i18n/home/<language>.ts`. */
export interface HomeDictionary {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    secondary: string;
    badges: string[];
    screenshotAlt: string;
    /** Floating cards around the phone. */
    chipGoal: string;
    chipWalkTitle: string;
    chipWalkBody: string;
    chipStreak: string;
  };
  /** Animated counters under the hero. */
  stats: { value: number; prefix?: string; suffix?: string; label: string }[];
  /** Units used in the mock screens and demos. */
  units: { steps: string; km: string; kmh: string; perKm: string; min: string; kcal: string; bpm: string; floors: string; cm: string; days: string };
  /** Labels inside the HTML mock screens (shown while a screenshot slot is `null`). */
  mock: {
    today: {
      title: string;
      date: string;
      /** "{goal}" is replaced with the formatted goal. */
      goal: string;
      /** "{percent}" and "{left}" are replaced. */
      summary: string;
      distance: string;
      activeTime: string;
      calories: string;
      floors: string;
      heartRate: string;
      hourly: string;
    };
    walk: { recording: string; duration: string; distance: string; steps: string; pace: string; pause: string; finish: string };
    zones: { title: string; total: string; zone: string; time: string; average: string; insightLabel: string; insight: string };
    metrics: { title: string; speed: string; stepLength: string; asymmetry: string; doubleSupport: string; heartRate: string; average: string; max: string };
  };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: Record<ShowcaseTabId, { label: string; title: string; text: string; points: string[]; screenshotAlt: string }>;
  };
  walk: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: [Item, Item, Item];
    start: string;
    recording: string;
    savedTitle: string;
    savedBody: string;
  };
  insights: {
    eyebrow: string;
    title: string;
    subtitle: string;
    trends: {
      title: string;
      text: string;
      week: string;
      month: string;
      /** Monday first. */
      weekdays: [string, string, string, string, string, string, string];
      goalLine: string;
      dailyAverage: string;
      bestDay: string;
      streak: string;
    };
    history: {
      title: string;
      text: string;
      days: [string, string, string];
      goalReached: string;
      walk: string;
      sourceWatch: string;
    };
    zones: { title: string; text: string };
    metrics: { title: string; text: string };
    heart: { title: string; text: string };
  };
  more: { title: string; subtitle: string; items: Item[] };
  privacy: {
    eyebrow: string;
    title: string;
    text: string;
    points: Item[];
    link: string;
    diagramPhone: string;
    diagramHealth: string;
    diagramServer: string;
    diagramAds: string;
    diagramNone: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  /** `text` once the app is on the App Store, `soon` before release. */
  cta: { title: string; text: string; soon: string };
}

export interface Dictionary extends BaseDictionary {
  home: HomeDictionary;
}
