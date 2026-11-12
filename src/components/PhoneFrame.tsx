import { useEffect, useState, type ReactNode } from "react";
import { SCREENS, screenshot, type ScreenSlot } from "../config";
import { useLanguage } from "../i18n";

/** An iPhone-shaped frame. Holds a screenshot or an HTML mock of a screen. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[3rem] bg-gray-950 p-[0.55rem] shadow-2xl shadow-blue-950/25 ring-1 ring-black/10 dark:shadow-black/60 dark:ring-white/15 ${className}`}>
      <div className="@container relative aspect-[1206/2622] w-full overflow-hidden rounded-[2.5rem] bg-ios-bg dark:bg-night">
        {children}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[1.4%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

/**
 * A screenshot slot from `SCREENS`: tries the visitor's language, then English, then
 * shows `fallback` (an HTML mock). Slots set to `null` go straight to the fallback.
 */
export function Screen({
  slot,
  alt,
  fallback,
  className = "",
  eager = false,
}: {
  slot: ScreenSlot;
  alt: string;
  fallback?: ReactNode;
  className?: string;
  eager?: boolean;
}) {
  const { language } = useLanguage();
  const name = SCREENS[slot];
  const sources = name ? [screenshot(language, name), screenshot("en", name)] : [];
  const [attempt, setAttempt] = useState(0);
  useEffect(() => setAttempt(0), [language, name]);

  if (attempt >= sources.length) return <>{fallback ?? null}</>;
  return (
    <img
      src={sources[attempt]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setAttempt((current) => current + 1)}
      className={`block h-full w-full object-cover ${className}`}
    />
  );
}
