import { Icon } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { useLanguage, useNumber } from "../../i18n";
import { useInView } from "../../lib/motion";
import { CategoryDot, COLLECTION, Cup, DAY, RACE, TIERS, tierFor } from "./mocks";
import { SectionHeading, Tile } from "./shared";

/** Collection and cups, nearby sights, areas, competitions and the Today tab. */
export function Collect() {
  const { t } = useLanguage();
  const c = t.home.collect;
  return (
    <section id="collection" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} text={c.subtitle} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2"><Cups /></Reveal>
          <Reveal delay={120}><Nearby /></Reveal>
          <Reveal><Areas /></Reveal>
          <Reveal delay={120}><Compete /></Reveal>
          <Reveal delay={240}><Today /></Reveal>
        </div>
      </div>
    </section>
  );
}

function Cups() {
  const { t } = useLanguage();
  const c = t.home.collect.cups;
  const m = t.home.mock;
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.3 });
  return (
    <Tile icon="trophy" title={c.title} text={c.text}>
      <div ref={ref}>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {COLLECTION.map((count, index) => {
            const tier = tierFor(count);
            return (
              <div key={index} className={`flex min-w-0 flex-col items-center rounded-2xl bg-surface px-2 py-3 text-center transition duration-700 ease-[cubic-bezier(.34,1.4,.5,1)] dark:bg-white/5 ${inView ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                style={{ transitionDelay: `${index * 90}ms` }}>
                <Cup category={index} count={count} className="h-12 w-12" iconClass="h-6 w-6" />
                <span className="mt-2 w-full text-[0.8rem] leading-tight font-semibold [overflow-wrap:anywhere]">{m.categories[index]}</span>
                <span className="num text-xs text-gray-500 dark:text-gray-400">{count}{tier >= 0 ? ` · ${m.tiers[tier]}` : ""}</span>
              </div>
            );
          })}
        </div>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          {TIERS.map((tier, index) => (
            <li key={index} className="flex items-center gap-1.5 rounded-full bg-surface py-1 pr-2.5 pl-1 dark:bg-white/5">
              <span className="h-4 w-4 rounded-full" style={{ backgroundImage: `linear-gradient(160deg, ${tier.from}, ${tier.to})` }} />
              {m.tiers[index]} · <span className="num">{tier.at}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{c.thresholds}</p>
      </div>
    </Tile>
  );
}

function Nearby() {
  const { t } = useLanguage();
  const c = t.home.collect.nearby;
  const m = t.home.mock;
  const u = t.home.units;
  const n = useNumber();
  const distances = [650, 900, 1300];
  return (
    <Tile icon="pin" title={c.title} text={c.text}>
      <ul className="space-y-2 text-sm">
        {m.explore.sights.map((sight, index) => (
          <li key={sight.name} className="rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <CategoryDot category={sight.category} className="h-8 w-8" iconClass="h-4 w-4" />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold">{sight.name}</span>
                <span className="block truncate text-xs text-gray-500 dark:text-gray-400">{m.away.replace("{distance}", distances[index] >= 1000 ? `${n(distances[index] / 1000, 1)} ${u.km}` : `${n(distances[index])} ${u.m}`)}</span>
              </span>
            </div>
            {index === 0 && (
              <span className="mt-2.5 flex items-center justify-center gap-1.5 rounded-xl bg-brand py-2 text-sm font-semibold text-white">
                <Icon name="navigate" className="h-4 w-4" />{m.walkThere}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Tile>
  );
}

/** A small patch of hexagonal areas: orange from half uncovered, grey when started. */
const PATCH: { c: number; r: number; state: 0 | 1 | 2; percent?: number }[] = [
  { c: 0, r: 1, state: 1 }, { c: 0, r: 2, state: 2, percent: 64 }, { c: 0, r: 3, state: 1 },
  { c: 1, r: 0, state: 1 }, { c: 1, r: 1, state: 2, percent: 81 }, { c: 1, r: 2, state: 2, percent: 57 }, { c: 1, r: 3, state: 0 },
  { c: 2, r: 1, state: 2, percent: 92 }, { c: 2, r: 2, state: 1 }, { c: 2, r: 3, state: 0 },
  { c: 3, r: 0, state: 0 }, { c: 3, r: 1, state: 1 }, { c: 3, r: 2, state: 2, percent: 50 }, { c: 3, r: 3, state: 1 },
  { c: 4, r: 1, state: 0 }, { c: 4, r: 2, state: 1 }, { c: 4, r: 3, state: 0 },
];

function Areas() {
  const { t } = useLanguage();
  const a = t.home.collect.areas;
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.4 });
  const R = 22;
  const h = (R * Math.sqrt(3)) / 2;
  const hex = (x: number, y: number) =>
    [[x - R, y], [x - R / 2, y - h], [x + R / 2, y - h], [x + R, y], [x + R / 2, y + h], [x - R / 2, y + h]].map(([px, py]) => `${px},${py}`).join(" ");
  return (
    <Tile icon="hexagon" title={a.title} text={a.text}>
      <div ref={ref} className="rounded-2xl bg-surface p-3 dark:bg-white/5">
        <svg viewBox="0 0 192 176" className="mx-auto h-auto w-full max-w-72" aria-hidden="true">
          {PATCH.map((cell, index) => {
            const x = R + 3 + cell.c * 1.5 * R;
            const y = (cell.r + (cell.c % 2 ? 0 : 0.5)) * 2 * h + h + 1;
            return (
              <g key={index} className="transition-opacity duration-500" style={{ opacity: inView ? 1 : 0, transitionDelay: `${index * 50}ms` }}>
                <polygon points={hex(x, y)} strokeWidth={cell.state === 2 ? 2 : 1} strokeLinejoin="round"
                  className={cell.state === 2 ? "fill-zone4/15 stroke-zone4" : cell.state === 1 ? "fill-white stroke-gray-300 dark:fill-white/5 dark:stroke-white/20" : "fill-gray-200/60 stroke-gray-300/60 dark:fill-white/[0.02] dark:stroke-white/10"} />
                {cell.percent !== undefined && (
                  <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="700" className="num fill-zone4">{cell.percent}%</text>
                )}
              </g>
            );
          })}
        </svg>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-gray-500 dark:text-gray-400">
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm border-2 border-zone4" />{a.legendHalf}</li>
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm border border-gray-400" />{a.legendStarted}</li>
        </ul>
      </div>
    </Tile>
  );
}

function Compete() {
  const { t } = useLanguage();
  const c = t.home.collect.compete;
  const m = t.home.mock.compete;
  const u = t.home.units;
  const n = useNumber();
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.4 });
  const names = [m.people[0], m.you, m.people[1], m.people[2]];
  return (
    <Tile icon="users" title={c.title} text={c.text}>
      <div ref={ref} className="rounded-2xl bg-surface p-4 dark:bg-white/5">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-semibold">{m.name}</p>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-zone4/15 px-2 py-0.5 text-xs font-semibold text-zone4"><Icon name="hexagon" className="h-3 w-3" />{m.kind}</span>
        </div>
        <ul className="mt-3 space-y-2.5 text-sm">
          {RACE.map((value, index) => (
            <li key={index}>
              <div className="flex items-center gap-2">
                <span className="num w-4 font-bold text-gray-400">{index + 1}</span>
                <span className={`min-w-0 flex-1 truncate ${index === 1 ? "font-bold" : "font-medium"}`}>{names[index]}</span>
                <span className="num font-bold">{n(value, 2)}<span className="text-xs font-medium text-gray-500 dark:text-gray-400"> {u.km2}</span></span>
              </div>
              <div className="mt-1 ml-6 h-1.5 overflow-hidden rounded-full bg-white dark:bg-white/10">
                <div className={`h-full rounded-full transition-[width] duration-1000 ease-out ${index === 1 ? "bg-brand" : "bg-zone4/70"}`}
                  style={{ width: inView ? `${(value / RACE[0]) * 100}%` : "0%", transitionDelay: `${index * 120}ms` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Tile>
  );
}

function Today() {
  const { t } = useLanguage();
  const c = t.home.collect.today;
  const m = t.home.mock.today;
  const u = t.home.units;
  const n = useNumber();
  const facts = [
    { icon: "walk" as const, tint: "text-brand", label: t.home.units.steps, value: n(DAY.steps) },
    { icon: "route" as const, tint: "text-brand", label: m.distance, value: `${n(DAY.km, 1)} ${u.km}` },
    { icon: "heart" as const, tint: "text-zone5", label: m.heartRate, value: `${n(DAY.bpm)} ${u.bpm}` },
    { icon: "stairs" as const, tint: "text-zone3", label: m.floors, value: n(DAY.floors) },
  ];
  return (
    <Tile icon="target" title={c.title} text={c.text}>
      <dl className="grid grid-cols-2 gap-2">
        {facts.map((fact) => (
          <div key={fact.label} className="min-w-0 rounded-2xl bg-surface px-3 py-2.5 dark:bg-white/5">
            <dt className="flex items-center gap-1.5 text-xs font-medium text-gray-500 first-letter:uppercase dark:text-gray-400">
              <Icon name={fact.icon} className={`h-3.5 w-3.5 shrink-0 ${fact.tint}`} /><span className="truncate first-letter:uppercase">{fact.label}</span>
            </dt>
            <dd className="num mt-0.5 text-lg font-bold whitespace-nowrap">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Tile>
  );
}
