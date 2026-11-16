import { Icon, type IconName } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { useLanguage } from "../../i18n";
import { useInView, useStepLoop } from "../../lib/motion";
import { FogMap } from "./mocks";
import { SectionHeading, Tile } from "./shared";

/** What PRO adds, then free vs PRO, the welcome offer and the plan types. No prices. */
export function Pro() {
  const { t } = useLanguage();
  const p = t.home.pro;
  return (
    <section id="pro" className="scroll-mt-20 bg-gradient-to-b from-brand/[0.06] to-surface py-24 sm:py-32 dark:from-brand/10 dark:to-night">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} text={p.subtitle} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal><Tour /></Reveal>
          <Reveal delay={120}><Timelapse /></Reveal>
          <Reveal delay={240}><Insights /></Reveal>
        </div>
        <Plans />
      </div>
    </section>
  );
}

/** Small heading inside a tile's visual. */
function Label({ icon, children }: { icon: IconName; children: string }) {
  return (
    <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand uppercase dark:text-brand-light">
      <Icon name={icon} className="h-3.5 w-3.5 shrink-0" />{children}
    </p>
  );
}

/** A walking loop from the person past three sights not seen yet. */
const LOOP = "M40 120 C 40 70, 70 40, 110 42 S 180 30, 200 70 S 190 130, 150 128 S 70 150, 40 120 Z";
const STOPS = [{ x: 110, y: 42 }, { x: 200, y: 70 }, { x: 150, y: 128 }];

function Tour() {
  const { t } = useLanguage();
  const c = t.home.pro.tour;
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.4 });
  return (
    <Tile icon="route" title={c.title} text={c.text} pro>
      <div ref={ref} className="rounded-2xl bg-surface p-3 dark:bg-white/5">
        <svg viewBox="0 0 240 160" className="h-auto w-full" aria-hidden="true">
          <g fill="none" strokeLinecap="round" className="stroke-white dark:stroke-white/10">
            <path d="M0 50 L240 30" strokeWidth="8" />
            <path d="M0 130 L240 140" strokeWidth="8" />
            <path d="M70 0 L60 160" strokeWidth="6" />
            <path d="M170 0 L180 160" strokeWidth="6" />
          </g>
          <path d={LOOP} fill="none" strokeWidth="4" strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset={inView ? 0 : 1}
            className="stroke-brand transition-[stroke-dashoffset] duration-[2400ms] ease-out" />
          {STOPS.map((stop, index) => (
            <g key={index} className="transition-opacity duration-500" style={{ opacity: inView ? 1 : 0, transitionDelay: `${600 + index * 500}ms` }}>
              <circle cx={stop.x} cy={stop.y} r="11" strokeWidth="2.5" className="fill-[#9aa1ad] stroke-white dark:stroke-night" />
              <text x={stop.x} y={stop.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="700" className="fill-white">?</text>
            </g>
          ))}
          <circle cx="40" cy="120" r="7" strokeWidth="3" className="fill-brand stroke-white" />
        </svg>
        <ol className="mt-2 space-y-1.5 text-sm">
          {c.stops.map((stop, index) => (
            <li key={stop} className="flex items-center gap-2">
              <span className="num flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand dark:bg-brand/25 dark:text-brand-light">{index + 1}</span>
              <span className="truncate">{stop}</span>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{c.total}</p>
      </div>
    </Tile>
  );
}

/** The map uncovering week by week, replayed in a loop. */
const WEEKS = [1400, 2600, 1800];

function Timelapse() {
  const { t } = useLanguage();
  const c = t.home.pro.timelapse;
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
  const step = useStepLoop(WEEKS, inView, 2);
  const week = step === 0 ? 8 : step === 1 ? 9 : 10;
  return (
    <Tile icon="clock" title={c.title} text={c.text} pro>
      <div ref={ref} className="overflow-hidden rounded-2xl bg-surface dark:bg-white/5">
        <div className="relative aspect-[4/3]">
          <FogMap revealed={step >= 1} duration={2200} viewBox="0 100 300 330" className="absolute inset-0 h-full w-full" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold shadow-card backdrop-blur dark:bg-gray-900/90">
            {c.week.replace("{n}", String(week))}
          </span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Icon name="play" className="h-3.5 w-3.5" /></span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white dark:bg-white/10">
            <div className="h-full rounded-full bg-brand transition-[width] duration-[1800ms] ease-linear" style={{ width: `${((week - 7) / 3) * 100}%` }} />
          </div>
        </div>
      </div>
    </Tile>
  );
}

function Insights() {
  const { t } = useLanguage();
  const c = t.home.pro.insights;
  return (
    <Tile icon="sparkles" title={c.title} text={c.text} pro>
      <ul className="flex flex-wrap gap-1.5 text-xs font-medium">
        {c.items.map((item) => (
          <li key={item} className="rounded-full bg-surface px-2.5 py-1 text-gray-700 dark:bg-white/5 dark:text-gray-300">{item}</li>
        ))}
      </ul>
      <div className="mt-3 rounded-2xl bg-brand/[0.07] p-4 dark:bg-brand/15">
        <Label icon="sparkles">{c.weekTitle}</Label>
        <p className="mt-1.5 text-sm font-medium">{c.weekSample}</p>
        <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{c.weekNote}</p>
      </div>
    </Tile>
  );
}

/** Free vs PRO, the welcome offer and the plan types. Prices are not shown on the site. */
function Plans() {
  const { t } = useLanguage();
  const p = t.home.pro.plans;
  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-3">
      <Reveal>
        <article className="h-full rounded-[1.75rem] bg-white p-6 shadow-card sm:p-7 dark:bg-white/[0.04] dark:shadow-none dark:ring-1 dark:ring-white/10">
          <h3 className="text-xl font-bold tracking-tight">{p.freeTitle}</h3>
          <ul className="mt-5 space-y-3">
            {p.freeItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-good/15 text-good">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
      <Reveal delay={120}>
        <article className="h-full rounded-[1.75rem] bg-white p-6 shadow-card ring-2 ring-brand/60 sm:p-7 dark:bg-white/[0.04] dark:shadow-none">
          <h3 className="text-xl font-bold tracking-tight text-brand dark:text-brand-light">{p.proTitle}</h3>
          <ul className="mt-5 space-y-3">
            {p.proItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand dark:text-brand-light">
                  <Icon name="sparkles" className="h-3.5 w-3.5" />
                </span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
      <Reveal delay={240}>
        <article className="flex h-full flex-col rounded-[1.75rem] bg-gradient-to-br from-zone1 via-brand to-brand-dark p-6 text-white shadow-xl shadow-brand/25 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight">{p.plansTitle}</h3>
          <p className="mt-2 text-blue-100">{p.plansText}</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
            {p.options.map((option) => (
              <li key={option} className="rounded-full bg-white/15 px-3 py-1.5">{option}</li>
            ))}
          </ul>
          <div className="mt-6 border-t border-white/20 pt-5">
            <h4 className="flex items-center gap-2 font-semibold"><Icon name="gift" className="h-5 w-5" />{p.offerTitle}</h4>
            <p className="mt-1.5 text-sm text-blue-100">{p.offerText}</p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-blue-100">{p.note}</p>
        </article>
      </Reveal>
    </div>
  );
}
