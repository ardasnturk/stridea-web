import { Icon, type IconName } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { useLanguage, useNumber } from "../../i18n";
import { useInView } from "../../lib/motion";
import { Change, DAY, HoursChart, INSIGHTS, TIP_ICONS, useDuration } from "./mocks";
import { SectionHeading, Tile } from "./shared";

/** What PRO adds (the three parts of the app's Insights tab), then free vs PRO and the plans. No prices. */
export function Pro() {
  const { t } = useLanguage();
  const p = t.home.pro;
  return (
    <section id="pro" className="scroll-mt-20 bg-gradient-to-b from-brand/[0.06] to-surface py-24 sm:py-32 dark:from-brand/10 dark:to-night">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} text={p.subtitle} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal><Coach /></Reveal>
          <Reveal delay={120}><Analysis /></Reveal>
          <Reveal delay={240}><Motion /></Reveal>
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

function Coach() {
  const { t } = useLanguage();
  const c = t.home.pro.coach;
  const m = t.home.mock.insights;
  const n = useNumber();
  return (
    <Tile icon="sparkles" title={c.title} text={c.text} pro>
      <Label icon="sparkles">{m.forYou}</Label>
      <ul className="mt-2 space-y-2 text-sm">
        {m.tips.map((tip, index) => (
          <li key={tip.title} className="flex items-start gap-3 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brand/25 dark:text-brand-light">
              <Icon name={TIP_ICONS[index]} className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold">{tip.title}</span>
              <span className="block text-xs leading-relaxed text-gray-500 dark:text-gray-400">{tip.text.replace("{left}", n(DAY.goal - DAY.steps))}</span>
            </span>
          </li>
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

function Analysis() {
  const { t } = useLanguage();
  const a = t.home.pro.analysis;
  const m = t.home.mock.insights;
  const u = t.home.units;
  const weekdays = t.home.insights.trends.weekdays;
  const n = useNumber();
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.3 });
  const rows = [
    { title: m.last7, note: m.vs7, ...INSIGHTS.week },
    { title: m.last30, note: m.vs30, ...INSIGHTS.month },
  ];
  const peak = Math.max(...INSIGHTS.weekdays);
  return (
    <Tile icon="trendUp" title={a.title} text={a.text} pro>
      <div ref={ref}>
        <ul className="space-y-2 text-sm">
          {rows.map((row) => (
            <li key={row.title} className="flex items-center justify-between gap-3 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
              <span className="min-w-0">
                <span className="block font-semibold">{row.title}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">{row.note}</span>
              </span>
              <span className="shrink-0 text-right">
                <span className="block"><span className="num font-bold">{n(row.average)}</span><span className="text-xs text-gray-500 dark:text-gray-400"> {u.steps}</span></span>
                <Change percent={row.change} className="text-xs" />
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between gap-3 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
            <span className="min-w-0">
              <span className="block font-semibold">{m.consistency}</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">{m.consistencyNote}</span>
            </span>
            <span className="num shrink-0 text-lg font-bold">{INSIGHTS.goalDays}/30</span>
          </li>
        </ul>
        <div className="mt-3 rounded-2xl bg-surface p-4 dark:bg-white/5">
          <Label icon="calendar">{m.weekdayPattern}</Label>
          <div className="mt-3 flex h-20 items-end gap-2.5" aria-hidden="true">
            {INSIGHTS.weekdays.map((value, index) => (
              <span key={index} className={`flex-1 rounded-full transition-[height] duration-700 ease-out ${value === peak ? "bg-zone2" : "bg-brand"}`}
                style={{ height: inView ? `${(value / peak) * 100}%` : "6%", transitionDelay: `${index * 60}ms` }} />
            ))}
          </div>
          <div className="mt-1.5 flex gap-2.5 text-center text-xs font-medium text-gray-400" aria-hidden="true">
            {weekdays.map((day, index) => <span key={index} className="flex-1">{day}</span>)}
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{m.mostActiveDay}</p>
        </div>
        <div className="mt-3">
          <Label icon="heart">{a.markersTitle}</Label>
          <ul className="mt-2 flex flex-wrap gap-1.5 text-xs font-medium">
            {a.markers.map((marker) => (
              <li key={marker} className="rounded-full bg-surface px-2.5 py-1 text-gray-700 dark:bg-white/5 dark:text-gray-300">{marker}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{a.markersNote}</p>
        </div>
      </div>
    </Tile>
  );
}

function Motion() {
  const { t } = useLanguage();
  const x = t.home.pro.motion;
  const m = t.home.mock.insights;
  const u = t.home.units;
  const n = useNumber();
  const duration = useDuration();
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.3 });
  const stats: { icon: IconName; tint: string; label: string; value: string }[] = [
    { icon: "walk", tint: "text-brand", label: m.onFoot, value: duration(INSIGHTS.onFootMin) },
    { icon: "repeat", tint: "text-brand", label: m.walksPerDay, value: n(INSIGHTS.walksPerDay) },
    { icon: "clock", tint: "text-zone2", label: m.longestWalk, value: duration(INSIGHTS.longestWalkMin) },
    { icon: "chair", tint: "text-zone4", label: m.longestSitting, value: duration(INSIGHTS.longestSittingMin) },
    { icon: "pulse", tint: "text-brand", label: m.cadence, value: `${n(INSIGHTS.cadence)} ${u.spm}` },
    { icon: "car", tint: "text-brand", label: m.vehicles, value: duration(INSIGHTS.vehiclesMin) },
  ];
  return (
    <Tile icon="walk" title={x.title} text={x.text} pro>
      <div ref={ref}>
        <div className="rounded-2xl bg-surface p-4 dark:bg-white/5">
          <Label icon="bars">{m.hours}</Label>
          <HoursChart active={inView} className="mt-3 h-24" />
          <div className="num mt-1.5 flex justify-between text-xs text-gray-400" aria-hidden="true">
            <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
          </div>
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
              <dt className="flex items-start gap-1.5 text-xs leading-tight font-medium text-gray-500 dark:text-gray-400">
                <Icon name={stat.icon} className={`h-3.5 w-3.5 shrink-0 ${stat.tint}`} />
                <span>{stat.label}</span>
              </dt>
              <dd className="num mt-0.5 font-bold whitespace-nowrap">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-good dark:text-zone2" />{x.note}
        </p>
      </div>
    </Tile>
  );
}

/** Free vs PRO, the free week and the plan types. Prices are not shown on the site. */
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
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
            <Icon name="gift" className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-xl font-bold tracking-tight">{p.trialTitle}</h3>
          <p className="mt-2 text-blue-100">{p.trialText}</p>
          <div className="mt-6 border-t border-white/20 pt-5">
            <h4 className="font-semibold">{p.plansTitle}</h4>
            <p className="mt-1.5 text-sm text-blue-100">{p.plansText}</p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
              {p.options.map((option) => (
                <li key={option} className="rounded-full bg-white/15 px-3 py-1.5">{option}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-blue-100">{p.note}</p>
          </div>
        </article>
      </Reveal>
    </div>
  );
}
