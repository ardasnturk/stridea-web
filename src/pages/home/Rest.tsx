import { useState } from "react";
import { AppStoreButton } from "../../components/AppStoreButton";
import { Icon, type IconName } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { APP_STORE_URL } from "../../config";
import { useLanguage } from "../../i18n";
import { SectionHeading } from "./shared";

const MORE_ICONS: IconName[] = ["target", "bars", "stairs", "pause", "route", "watch", "flame", "globe"];

export function More() {
  const { t } = useLanguage();
  const m = t.home.more;
  return (
    <section className="border-y border-brand/10 bg-white/60 py-24 sm:py-28 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={m.title} text={m.subtitle} />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {m.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 80}>
              <article className="group h-full rounded-3xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white/[0.04] dark:shadow-none dark:ring-1 dark:ring-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand transition duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:bg-brand/20 dark:text-brand-light">
                  <Icon name={MORE_ICONS[index] ?? "check"} />
                </span>
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRIVACY_ICONS: IconName[] = ["person", "megaphone", "phone", "pin"];

export function Privacy() {
  const { t } = useLanguage();
  const p = t.home.privacy;
  return (
    <section id="privacy" className="scroll-mt-20 bg-gradient-to-b from-zone2/10 to-surface py-24 sm:py-32 dark:from-zone2/[0.07] dark:to-night">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-good dark:text-zone2">{p.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{p.title}</h2>
              <p className="mt-5 text-lg text-pretty text-gray-600 dark:text-gray-400">{p.text}</p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {p.points.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <div className="h-full rounded-3xl bg-white p-5 shadow-card dark:bg-white/[0.04] dark:shadow-none dark:ring-1 dark:ring-zone2/20">
                    <Icon name={PRIVACY_ICONS[index] ?? "check"} className="h-6 w-6 text-good dark:text-zone2" />
                    <h3 className="mt-3 font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <a href="/privacy/" className="group inline-flex items-center gap-2 font-semibold text-good hover:underline dark:text-zone2">
                {p.link}
                <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={150}>
            <PrivacyDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** iPhone at the centre, Apple Health linked to it, servers and ads crossed out. */
function PrivacyDiagram() {
  const { t } = useLanguage();
  const p = t.home.privacy;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-[6%] rounded-full border border-dashed border-zone2/50 dark:border-zone2/30" />
      <div className="absolute inset-[22%] rounded-full border border-zone2/50 dark:border-zone2/30" />
      <div className="absolute inset-[34%] animate-pulse rounded-full bg-zone2/25 blur-2xl" />
      {/* Centre: iPhone */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div className="flex h-28 w-16 items-center justify-center rounded-[1.1rem] bg-ink shadow-xl ring-4 ring-white dark:ring-gray-800">
          <img src="/assets/icon.png" alt="" className="h-10 w-10 rounded-xl" />
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold whitespace-nowrap shadow dark:bg-gray-900">{p.diagramPhone}</span>
      </div>
      {/* Top: Apple Health */}
      <div className="absolute left-1/2 top-[1%] flex -translate-x-1/2 flex-col items-center gap-1.5">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zone5 shadow-lg dark:bg-gray-900">
          <Icon name="heart" />
        </span>
        <span className="whitespace-nowrap rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium shadow-sm dark:bg-gray-900/90">{p.diagramHealth}</span>
      </div>
      {/* Bottom right: no servers */}
      <div className="absolute bottom-[4%] right-[2%] flex flex-col items-center gap-1.5">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-lg dark:bg-gray-900">
          <Icon name="server" />
          <span className="absolute h-0.5 w-14 rotate-45 rounded bg-zone5" />
        </span>
        <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-center text-xs font-medium shadow-sm dark:bg-gray-900/90">
          {p.diagramServer}: <span className="text-zone5">{p.diagramNone}</span>
        </span>
      </div>
      {/* Bottom left: no ads or trackers */}
      <div className="absolute bottom-[4%] left-[2%] flex flex-col items-center gap-1.5">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-lg dark:bg-gray-900">
          <Icon name="megaphone" />
          <span className="absolute h-0.5 w-14 -rotate-45 rounded bg-zone5" />
        </span>
        <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-center text-xs font-medium shadow-sm dark:bg-gray-900/90">
          {p.diagramAds}: <span className="text-zone5">{p.diagramNone}</span>
        </span>
      </div>
      {/* iPhone ↔ Apple Health link */}
      <span className="absolute left-1/2 top-[19%] h-[11%] w-0 -translate-x-1/2 border-l-2 border-dashed border-zone5/60" />
    </div>
  );
}

export function Faq() {
  const { t } = useLanguage();
  const f = t.home.faq;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title={f.title} />
        <Reveal className="mt-12">
          <div className="divide-y divide-brand/10 rounded-[1.75rem] bg-white shadow-card dark:divide-white/10 dark:bg-white/[0.03] dark:shadow-none dark:ring-1 dark:ring-white/10">
            {f.items.map((item, index) => {
              const expanded = open === index;
              return (
                <div key={item.q}>
                  <h3>
                    <button type="button" id={`faq-q-${index}`} aria-expanded={expanded} aria-controls={`faq-${index}`}
                      onClick={() => setOpen(expanded ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition hover:text-brand">
                      {item.q}
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition duration-300 ${expanded ? "rotate-180 bg-brand text-white" : "bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400"}`}>
                        <Icon name="chevron" className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-${index}`} role="region" aria-labelledby={`faq-q-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden" inert={!expanded}>
                      <p className="px-6 pb-6 text-gray-600 dark:text-gray-400">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CallToAction() {
  const { t } = useLanguage();
  const c = t.home.cta;
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal variant="scale">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zone1 via-brand to-brand-dark px-6 py-16 text-center text-white shadow-2xl shadow-brand/30">
          <div aria-hidden="true" className="animate-blob absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <div aria-hidden="true" className="animate-blob absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-zone2/30 blur-2xl [animation-delay:-7s]" />
          <img src="/assets/icon.png" alt="" className="animate-float relative h-20 w-20 rounded-[1.4rem] shadow-xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-balance sm:text-4xl">{c.title}</h2>
          <p className="relative max-w-xl text-lg text-blue-100">{APP_STORE_URL ? c.text : c.soon}</p>
          <div className="relative">
            <AppStoreButton inverted />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
