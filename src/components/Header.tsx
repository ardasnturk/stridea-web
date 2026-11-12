import { useEffect, useRef, useState } from "react";
import { APP_NAME, APP_STORE_URL } from "../config";
import { useLanguage } from "../i18n";
import { Icon } from "./Icon";
import { LanguageSelect } from "./LanguageSelect";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("--scroll", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "/#features", label: t.nav.features },
    { href: "/#walks", label: t.nav.walks },
    { href: "/#insights", label: t.nav.insights },
    { href: "/#privacy", label: t.nav.privacy },
    { href: "/#faq", label: t.nav.faq },
  ];
  const solid = scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "border-b border-brand/10 bg-surface/80 backdrop-blur-xl dark:border-white/10 dark:bg-night/75" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/assets/icon.png" alt="" width={32} height={32} className="h-8 w-8 rounded-[0.6rem] shadow-sm" />
          <span className="text-lg font-bold tracking-tight">{APP_NAME}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex dark:text-gray-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-gray-950 dark:hover:text-white">{link.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelect className="text-gray-700 dark:text-gray-200" />
          {APP_STORE_URL ? (
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
              className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition hover:bg-brand-dark sm:inline-flex">
              {t.nav.download}
            </a>
          ) : (
            <span className="hidden cursor-default rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand sm:inline-flex dark:bg-brand/20 dark:text-brand-light">
              {t.nav.comingSoon}
            </span>
          )}
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-gray-700 lg:hidden dark:border-gray-700 dark:text-gray-200">
            <span className="sr-only">{t.nav.menu}</span>
            <Icon name={open ? "close" : "menu"} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t border-gray-200/70 px-4 pb-5 pt-2 lg:hidden dark:border-white/10">
        <nav className="flex flex-col">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-gray-100 py-3.5 text-base font-semibold last:border-0 dark:border-white/5">
              {link.label}
              <Icon name="arrowRight" className="h-4 w-4 text-gray-400" />
            </a>
          ))}
        </nav>
        {APP_STORE_URL ? (
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-2xl bg-brand py-3 font-semibold text-white">
            {t.nav.download}
          </a>
        ) : (
          <p className="mt-3 flex w-full items-center justify-center rounded-2xl bg-brand/10 py-3 font-semibold text-brand dark:bg-brand/20 dark:text-brand-light">
            {t.nav.comingSoon}
          </p>
        )}
      </div>
      <div aria-hidden="true" ref={progress} className="scroll-progress absolute inset-x-0 bottom-[-1px] h-0.5 bg-gradient-to-r from-zone1 via-brand to-zone2" />
    </header>
  );
}
