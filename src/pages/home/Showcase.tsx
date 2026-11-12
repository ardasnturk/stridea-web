import { useEffect, useState, type ComponentType, type CSSProperties, type KeyboardEvent } from "react";
import { Icon, type IconName } from "../../components/Icon";
import { PhoneFrame, Screen } from "../../components/PhoneFrame";
import { ProBadge } from "../../components/ProBadge";
import { Reveal } from "../../components/Reveal";
import { useLanguage, type ShowcaseTabId } from "../../i18n";
import { useInView, useReducedMotion } from "../../lib/motion";
import { InsightsMock, MetricsMock, TodayMock, WalkMock, ZonesMock } from "./mocks";
import { SectionHeading } from "./shared";

/** One tab per screen. `Mock` is shown while the tab's screenshot slot in `src/config.ts` is `null`; `pro` adds the PRO badge. */
const TABS: { id: ShowcaseTabId; icon: IconName; Mock: ComponentType<{ active?: boolean }>; pro?: boolean }[] = [
  { id: "today", icon: "target", Mock: TodayMock },
  { id: "walk", icon: "walk", Mock: WalkMock },
  { id: "zones", icon: "heart", Mock: ZonesMock },
  { id: "metrics", icon: "pulse", Mock: MetricsMock, pro: true },
  { id: "insights", icon: "sparkles", Mock: InsightsMock, pro: true },
];
const AUTO_ADVANCE_MS = 7000;

export function Showcase() {
  const { t } = useLanguage();
  const a = t.home.showcase;
  const reduced = useReducedMotion();
  const [active, setActive] = useState<ShowcaseTabId>("today");
  const [userPicked, setUserPicked] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 });
  const autoplay = inView && !userPicked && !reduced;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      const index = TABS.findIndex((tab) => tab.id === active);
      setActive(TABS[(index + 1) % TABS.length].id);
    }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [active, autoplay]);

  const pick = (id: ShowcaseTabId) => {
    setUserPicked(true);
    setActive(id);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = TABS.findIndex((tab) => tab.id === active);
    const next = event.key === "ArrowRight" ? index + 1 : event.key === "ArrowLeft" ? index - 1 : null;
    if (next === null) return;
    event.preventDefault();
    const id = TABS[(next + TABS.length) % TABS.length].id;
    pick(id);
    document.getElementById(`showcase-tab-${id}`)?.focus();
  };

  return (
    <section id="features" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} text={a.subtitle} />

        <div ref={ref} className="mt-12">
          <Reveal>
            <div role="tablist" aria-label={a.eyebrow} onKeyDown={onKeyDown}
              className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              {TABS.map((tab) => {
                const selected = tab.id === active;
                return (
                  <button key={tab.id} id={`showcase-tab-${tab.id}`} type="button" role="tab" aria-selected={selected}
                    aria-controls="showcase-panel" tabIndex={selected ? 0 : -1} onClick={() => pick(tab.id)}
                    className={`relative flex shrink-0 snap-start items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                      selected
                        ? "bg-brand text-white shadow-lg shadow-brand/30"
                        : "bg-white text-gray-700 shadow-card hover:text-brand dark:bg-white/5 dark:text-gray-300 dark:shadow-none dark:hover:bg-white/10"
                    }`}>
                    <Icon name={tab.icon} className="h-4 w-4" />
                    {a.tabs[tab.id].label}
                    {tab.pro && <ProBadge onBrand={selected} />}
                    {selected && autoplay && (
                      <span key={`${active}`} aria-hidden="true" className="tab-progress absolute inset-x-0 bottom-0 h-0.5 bg-white/70"
                        style={{ "--duration": `${AUTO_ADVANCE_MS}ms` } as CSSProperties} />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div id="showcase-panel" role="tabpanel" aria-labelledby={`showcase-tab-${active}`}
            className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text: the active tab fades and slides in. */}
            <div className="relative order-2 grid min-w-0 grid-cols-1 lg:order-1">
              {TABS.map((tab) => {
                const content = a.tabs[tab.id];
                const selected = tab.id === active;
                return (
                  <div key={tab.id} aria-hidden={!selected}
                    className={`col-start-1 row-start-1 transition-all duration-500 ease-out ${selected ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light">
                      <Icon name={tab.icon} />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{content.title}{tab.pro && <ProBadge className="ml-2.5 -translate-y-1" />}</h3>
                    <p className="mt-4 text-lg text-pretty text-gray-600 dark:text-gray-400">{content.text}</p>
                    <ul className="mt-6 space-y-3">
                      {content.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-good/15 text-good">
                            <Icon name="check" className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Device: all visuals stacked, cross-faded. */}
            <div className="relative order-1 mx-auto w-full max-w-[15rem] sm:max-w-[18.5rem] lg:order-2">
              <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-brand/25 to-zone2/20 blur-3xl" />
              <div className="grid grid-cols-1">
                {TABS.map((tab) => {
                  const selected = tab.id === active;
                  return (
                    <div key={tab.id} aria-hidden={!selected}
                      className={`col-start-1 row-start-1 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${selected ? "scale-100 opacity-100 blur-0" : "pointer-events-none scale-95 opacity-0 blur-sm"}`}>
                      <PhoneFrame>
                        <Screen slot={tab.id} alt={a.tabs[tab.id].screenshotAlt} fallback={<tab.Mock active={selected && inView} />} />
                      </PhoneFrame>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
