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
    /** Link to the "How exploring works" section (`home.explore`, anchor `#explore`). */
    explore: string;
    /** Link to the collection section (`home.collect`, anchor `#collection`). */
    collection: string;
    pro: string;
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
export type ShowcaseTabId = "explore" | "sight" | "collection" | "compete" | "today";

/** A sample sight in the mocks. `category` is an index into `mock.categories`; `note` is the line under the name. */
export interface SampleSight {
  name: string;
  category: number;
  note: string;
}

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
    chipDiscoveryTitle: string;
    chipDiscoveryBody: string;
    chipGround: string;
    chipCup: string;
  };
  /** Animated counters under the hero. */
  stats: { value: number; prefix?: string; suffix?: string; label: string }[];
  /** Units used in the mock screens and demos. */
  units: { steps: string; km: string; m: string; km2: string; min: string; kcal: string; bpm: string; floors: string; h: string };
  /** Labels inside the HTML mock screens (shown while a screenshot slot is `null`). */
  mock: {
    /** The app's four tabs: Explore, Today, Awards, Stats. */
    tabs: [string, string, string, string];
    /** Landmarks, museums, castles, stages, libraries, parks (plural, as in the app). */
    categories: [string, string, string, string, string, string];
    /** Bronze, silver, gold, platinum. */
    tiers: [string, string, string, string];
    /** "{distance} away". */
    away: string;
    walkThere: string;
    /** Label of the walk timer. */
    walkDuration: string;
    explore: {
      title: string;
      thisWeek: string;
      nearestFog: string;
      /** "{distance} to the north". */
      fogDirection: string;
      nearby: string;
      /** "{count} more to discover nearby". */
      more: string;
      /** The first is the nearby suggestion, the second (a park) is found on the demo walk. */
      sights: [SampleSight, SampleSight, SampleSight];
    };
    sight: {
      sight: SampleSight;
      walkTime: string;
      about: string;
      hint: string;
    };
    /** Awards › Collection. */
    collection: {
      title: string;
      /** Collection, Medals, Competitions. */
      pages: [string, string, string];
      cups: string;
      collected: string;
      /** "{count} sights in your collection." */
      count: string;
      sights: [SampleSight, SampleSight, SampleSight];
    };
    /** Awards › Competitions, a new-ground competition. */
    compete: {
      name: string;
      kind: string;
      daysLeft: string;
      you: string;
      people: [string, string, string];
      note: string;
    };
    today: {
      title: string;
      date: string;
      /** "{goal}" is replaced with the formatted goal. */
      goal: string;
      distance: string;
      calories: string;
      heartRate: string;
      floors: string;
      walks: string;
      walk: string;
      watch: string;
    };
    discovery: { title: string; added: string };
  };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: Record<ShowcaseTabId, { label: string; title: string; text: string; points: string[]; screenshotAlt: string }>;
  };
  /** "How exploring works": the fog clearing along a walk. */
  explore: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: [Item, Item, Item];
    start: string;
    recording: string;
    newGround: string;
  };
  /** Collection, cups, nearby sights, areas, competitions and the Today tab. */
  collect: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cups: { title: string; text: string; thresholds: string };
    nearby: { title: string; text: string };
    areas: { title: string; text: string; legendHalf: string; legendStarted: string };
    compete: { title: string; text: string };
    today: { title: string; text: string };
  };
  /** The PRO section: the PRO features, then free vs PRO, the welcome offer and the plans. Never state prices. */
  pro: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tour: { title: string; text: string; stops: [string, string, string]; total: string };
    timelapse: { title: string; text: string; week: string };
    insights: {
      title: string;
      text: string;
      weekTitle: string;
      /** A sample of the on-device summary. */
      weekSample: string;
      weekNote: string;
      items: string[];
    };
    plans: {
      freeTitle: string;
      freeItems: string[];
      proTitle: string;
      proItems: string[];
      offerTitle: string;
      offerText: string;
      plansTitle: string;
      plansText: string;
      /** Yearly, 3 months, monthly, weekly, lifetime. */
      options: [string, string, string, string, string];
      note: string;
    };
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
    diagramMaps: string;
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
