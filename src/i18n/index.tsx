import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { APP_NAME, BUNDLE_ID, DEVELOPER, MIN_IOS, SUPPORT_EMAIL } from "../config";
import { LANGUAGES, LOCALES, type Dictionary, type Language } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { en as homeEn } from "./home/en";
import { tr as homeTr } from "./home/tr";

export * from "./types";

const TOKENS: Record<string, string> = { app: APP_NAME, email: SUPPORT_EMAIL, developer: DEVELOPER, ios: MIN_IOS };

/** Replaces `{app}`, `{email}`, `{developer}` and `{ios}` in every string of a dictionary. Other `{…}` tokens are left alone. */
function fill<T>(value: T): T {
  if (typeof value === "string") return value.replace(/\{(\w+)\}/g, (match, key: string) => TOKENS[key] ?? match) as T;
  if (Array.isArray(value)) return value.map(fill) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, fill(entry)])) as T;
  }
  return value;
}

const DICTIONARIES: Record<Language, Dictionary> = {
  en: fill({ ...en, home: homeEn }),
  tr: fill({ ...tr, home: homeTr }),
};
const STORAGE_KEY = `${BUNDLE_ID}.language`;

function isLanguage(value: string | null | undefined): value is Language {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

/** ?lang=tr, then the saved choice, then the browser languages, then English. */
function detect(): Language {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(query)) return query;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through.
  }
  for (const preferred of navigator.languages ?? [navigator.language]) {
    const base = preferred.toLowerCase().split("-")[0];
    if (isLanguage(base)) return base;
  }
  return "en";
}

interface LanguageContextValue {
  language: Language;
  t: Dictionary;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detect);
  const t = DICTIONARIES[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  };

  return <LanguageContext.Provider value={{ language, t, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

/** Formats a number the way the visitor's language writes it (8,426 / 8.426, 5.8 / 5,8). */
export function useNumber(): (value: number, digits?: number) => string {
  const { language } = useLanguage();
  return useMemo(() => {
    const cache = new Map<number, Intl.NumberFormat>();
    return (value: number, digits = 0) => {
      let format = cache.get(digits);
      if (!format) {
        format = new Intl.NumberFormat(LOCALES[language], { minimumFractionDigits: digits, maximumFractionDigits: digits });
        cache.set(digits, format);
      }
      return format.format(value);
    };
  }, [language]);
}
