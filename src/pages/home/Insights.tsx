import { useState } from "react";
import { Icon } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { APP_NAME } from "../../config";
import { useLanguage, useNumber } from "../../i18n";
import { useInView } from "../../lib/motion";
import { DAY, HEART, HeartChart, METRIC_TRENDS, Sparkline, ZONES, ZONE_BG } from "./mocks";
import { SectionHeading, Tile } from "./shared";

export function Insights() {
  const { t } = useLanguage();
  const i = t.home.insights;
  return (
    <section id="insights" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={i.eyebrow} title={i.title} text={i.subtitle} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2"><Trends /></Reveal>
          <Reveal delay={120}><History /></Reveal>
          <Reveal><ZoneInsight /></Reveal>
          <Reveal delay={120}><Metrics /></Reveal>
          <Reveal delay={240}><Heart /></Reveal>
        </div>
      </div>
    </section>
  );
}

const GOAL = DAY.goal;
/** The last 7 days, ending today (a Thursday, like the Today mock). Every earlier day reached the goal: a 12-day streak. */
const WEEK = [10480, 11020, 10150, 11340, 12210, 14203, DAY.steps];
/** The last 30 days, ending with `WEEK`. */
const MONTH = [
  8200, 10400, 9100, 11200, 7300, 12800, 13400, 9600, 10100, 8700, 11900, 10600, 6900, 12100, 9800, 10300, 9400,
  10900, 12500, 10800, 10200, 11100, 13120, ...WEEK,
];
/** `weekdays` is Monday-first; the week chart starts on a Friday. */
const FIRST_WEEKDAY = 4;

function Trends() {
  const { t } = useLanguage();
  const s = t.home.insights.trends;
  const u = t.home.units;
  const n = useNumber();
  const [range, setRange] = useState<"week" | "month">("week");
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.3 });
  const values = range === "week" ? WEEK : MONTH;
  const top = 15000;
  const average = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  const facts = [
    { label: s.dailyAverage, value: n(average), unit: u.steps },
    { label: s.bestDay, value: n(Math.max(...values)), unit: u.steps },
    { label: s.streak, value: "12", unit: u.days },
  ];
  return (
    <Tile icon="bars" title={s.title} text={s.text}>
      <div ref={ref}>
        <div className="flex items-center justify-between gap-3">
          <div role="group" aria-label={s.title} className="inline-flex rounded-full bg-surface p-1 text-sm font-semibold dark:bg-white/5">
            {(["week", "month"] as const).map((id) => (
              <button key={id} type="button" aria-pressed={range === id} onClick={() => setRange(id)}
                className={`rounded-full px-4 py-1.5 transition ${range === id ? "bg-white text-brand shadow-card dark:bg-brand dark:text-white dark:shadow-none" : "text-gray-500 hover:text-ink dark:text-gray-400 dark:hover:text-white"}`}>
                {s[id]}
              </button>
            ))}
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className="w-4 border-t-2 border-dashed border-zone2" />{s.goalLine} {n(GOAL)}
          </span>
        </div>
        <div className="relative mt-4 h-40" aria-hidden="true">
          <span className="absolute inset-x-0 border-t-2 border-dashed border-zone2/60" style={{ bottom: `${(GOAL / top) * 100}%` }} />
          <div className={`flex h-full items-end ${range === "week" ? "gap-3 sm:gap-5" : "gap-[3px] sm:gap-1.5"}`}>
            {values.map((value, index) => (
              <span key={`${range}-${index}`} className={`flex-1 rounded-t-lg transition-[height] duration-700 ease-out ${value >= GOAL ? "bg-brand" : "bg-brand/35"}`}
                style={{ height: inView ? `${(value / top) * 100}%` : "3%", transitionDelay: `${index * (range === "week" ? 60 : 14)}ms` }} />
            ))}
          </div>
        </div>
        <div className={`mt-1.5 flex text-center text-xs font-medium text-gray-400 ${range === "week" ? "gap-3 sm:gap-5" : "invisible"}`} aria-hidden="true">
          {WEEK.map((_, index) => <span key={index} className="flex-1">{s.weekdays[(index + FIRST_WEEKDAY) % 7]}</span>)}
        </div>
        <dl className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {facts.map((fact) => (
            <div key={fact.label} className="min-w-0 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
              <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">{fact.label}</dt>
              <dd className="mt-0.5">
                <span className="num text-lg font-bold sm:text-2xl">{fact.value}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400"> {fact.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Tile>
  );
}

function History() {
  const { t } = useLanguage();
  const h = t.home.insights.history;
  const u = t.home.units;
  const n = useNumber();
  const days = [
    { steps: DAY.steps, km: DAY.km, kcal: DAY.kcal },
    { steps: WEEK[5], km: 9.9, kcal: 498 },
    { steps: WEEK[4], km: 8.5, kcal: 431 },
  ];
  const walks = [
    { km: 3.2, min: 38, source: APP_NAME, watch: false },
    { km: 5.4, min: 61, source: h.sourceWatch, watch: true },
  ];
  return (
    <Tile icon="calendar" title={h.title} text={h.text}>
      <ul className="space-y-2 text-sm">
        {days.map((day, index) => {
          const reached = day.steps >= GOAL;
          return (
            <li key={index} className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{h.days[index]}</span>
                <span className="block truncate text-xs text-gray-500 dark:text-gray-400">{n(day.km, 1)} {u.km} · {n(day.kcal)} {u.kcal}</span>
              </span>
              <span className="num font-bold">{n(day.steps)}</span>
              <span title={reached ? h.goalReached : undefined}
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${reached ? "bg-good text-white" : "bg-gray-200 text-transparent dark:bg-white/10"}`}>
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
            </li>
          );
        })}
        {walks.map((walk) => (
          <li key={walk.source} className="flex items-center gap-3 rounded-2xl bg-brand/[0.07] px-3 py-2.5 dark:bg-brand/15">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <Icon name="walk" className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">{h.walk}</span>
              <span className="block truncate text-xs text-gray-500 dark:text-gray-400">{n(walk.km, 1)} {u.km} · {walk.min} {u.min}</span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-600 dark:bg-white/10 dark:text-gray-300">
              {walk.watch && <Icon name="watch" className="h-3 w-3" />}{walk.source}
            </span>
          </li>
        ))}
      </ul>
    </Tile>
  );
}

function ZoneInsight() {
  const { t } = useLanguage();
  const z = t.home.insights.zones;
  const m = t.home.mock.zones;
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.4 });
  return (
    <Tile icon="heart" title={z.title} text={z.text}>
      <div ref={ref}>
        <div className="flex h-4 gap-1 overflow-hidden rounded-full" aria-hidden="true">
          {ZONES.map((zone, index) => (
            <span key={index} className={`h-full rounded-full transition-[flex-grow] duration-1000 ease-out ${ZONE_BG[index]}`}
              style={{ flexGrow: inView ? zone.percent : 1, flexBasis: 0, transitionDelay: `${index * 80}ms` }} />
          ))}
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-gray-500 dark:text-gray-400" aria-hidden="true">
          {ZONES.map((zone, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className={`h-2 w-2 rounded-full ${ZONE_BG[index]}`} />
              <span className="num">{index + 1} · {zone.percent}%</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-2xl bg-brand/[0.07] p-4 dark:bg-brand/15">
          <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand uppercase dark:text-brand-light">
            <Icon name="sparkles" className="h-3.5 w-3.5" />{m.insightLabel}
          </p>
          <p className="mt-1 font-semibold">{m.insight}</p>
        </div>
      </div>
    </Tile>
  );
}

function Metrics() {
  const { t } = useLanguage();
  const x = t.home.insights.metrics;
  const m = t.home.mock.metrics;
  const u = t.home.units;
  const n = useNumber();
  const rows = [
    { label: m.speed, value: n(5.1, 1), unit: u.kmh, trend: METRIC_TRENDS.speed },
    { label: m.stepLength, value: n(72), unit: u.cm, trend: METRIC_TRENDS.stepLength },
    { label: m.asymmetry, value: n(2.1, 1), unit: "%", trend: METRIC_TRENDS.asymmetry },
    { label: m.doubleSupport, value: n(27.4, 1), unit: "%", trend: METRIC_TRENDS.doubleSupport },
  ];
  return (
    <Tile icon="pulse" title={x.title} text={x.text}>
      <ul className="space-y-2 text-sm">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
            <span className="min-w-0 flex-1 truncate font-medium text-gray-600 dark:text-gray-300">{row.label}</span>
            <Sparkline values={row.trend} className="h-6 w-14 shrink-0" />
            <span className="w-[4.75rem] shrink-0 text-right whitespace-nowrap">
              <span className="num font-bold">{row.value}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400"> {row.unit}</span>
            </span>
          </li>
        ))}
      </ul>
    </Tile>
  );
}

function Heart() {
  const { t } = useLanguage();
  const x = t.home.insights.heart;
  const m = t.home.mock.metrics;
  const u = t.home.units;
  return (
    <Tile icon="heart" title={x.title} text={x.text}>
      <div className="rounded-2xl bg-surface p-4 dark:bg-white/5">
        <div className="flex gap-6">
          <p>
            <span className="block text-xs font-medium text-gray-500 dark:text-gray-400">{m.average}</span>
            <span className="num text-2xl font-bold">{HEART.average}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400"> {u.bpm}</span>
          </p>
          <p>
            <span className="block text-xs font-medium text-gray-500 dark:text-gray-400">{m.max}</span>
            <span className="num text-2xl font-bold text-zone5">{HEART.max}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400"> {u.bpm}</span>
          </p>
        </div>
        <HeartChart className="mt-3 h-24 w-full" />
      </div>
    </Tile>
  );
}
