/**
 * HTML mocks of the app's screens, shown inside `PhoneFrame` while a screenshot slot in
 * `src/config.ts` is `null`. They are laid out for a 300px-wide screen and scale with the
 * frame (see `.mock` in `src/index.css`): use normal spacing classes and `fs-<px>` for text.
 */
import { useId, type ReactNode } from "react";
import { Icon, type IconName } from "../../components/Icon";
import { useLanguage, useNumber } from "../../i18n";

/* ---------- Sample data (one consistent day) ---------- */

export const DAY = { steps: 8426, goal: 10000, km: 5.8, activeMin: 64, kcal: 312, floors: 9, bpm: 96 };
const HOURLY = [0, 0, 0, 0, 0, 0, 2, 9, 22, 14, 6, 8, 19, 25, 7, 5, 9, 16, 28, 24, 11, 4, 0, 0];

export const ZONES = [
  { percent: 16, min: 8, bpm: 98 },
  { percent: 62, min: 31, bpm: 117 },
  { percent: 14, min: 7, bpm: 134 },
  { percent: 6, min: 3, bpm: 151 },
  { percent: 2, min: 1, bpm: 166 },
];
export const ZONE_BG = ["bg-zone1", "bg-zone2", "bg-zone3", "bg-zone4", "bg-zone5"];
const ZONE_STROKE = ["stroke-zone1", "stroke-zone2", "stroke-zone3", "stroke-zone4", "stroke-zone5"];

export const METRIC_TRENDS = {
  speed: [4.6, 4.7, 4.6, 4.8, 4.9, 4.8, 5.0, 5.1],
  stepLength: [69, 70, 70, 71, 70, 71, 72, 72],
  asymmetry: [3.4, 3.1, 3.3, 2.8, 2.6, 2.7, 2.3, 2.1],
  doubleSupport: [28.6, 28.4, 28.5, 28.1, 27.9, 27.8, 27.6, 27.4],
};
/** Sample numbers of the Insights tab. `weekdays` is Monday-first (average steps); `hours` is average minutes on foot per hour. */
export const INSIGHTS = {
  week: { average: 11118, change: 6 },
  month: { average: 10608, change: 4 },
  goalDays: 21,
  weekdays: [9800, 10400, 11900, 10200, 10900, 12600, 8700],
  hours: [0, 0, 0, 0, 0, 0, 1, 4, 9, 6, 3, 3, 8, 10, 3, 2, 4, 7, 12, 10, 5, 2, 0, 0],
  onFootMin: 72,
  walksPerDay: 6,
  longestWalkMin: 42,
  longestSittingMin: 170,
  cadence: 108,
  vehiclesMin: 48,
  walks: { count: 34, km: 3.6, pace: "11'12\"", speedChange: 5 },
};
export const TIP_ICONS: IconName[] = ["target", "flame", "clock"];

export const HEART = { average: 104, max: 142, series: [82, 88, 97, 104, 112, 109, 118, 127, 142, 131, 119, 108, 111, 102, 96, 90] };

/* ---------- Building blocks ---------- */

/** A white rounded card like the app's cards. */
export function MockCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl bg-white shadow-card dark:bg-ios-card-dark dark:shadow-none ${className}`}>{children}</div>;
}

function StatusBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-[7%] shrink-0 items-end justify-between px-7 pb-1 fs-11 font-semibold ${className}`}>
      <span className="num">9:41</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="h-2 w-3 rounded-[2px] bg-current opacity-90" />
        <span className="h-2.5 w-5 rounded-[3px] border border-current p-px"><span className="block h-full w-3/4 rounded-[1px] bg-current" /></span>
      </span>
    </div>
  );
}

/** A mock iPhone screen: status bar, optional title, then the content. */
function MockScreen({ title, eyebrow, back = false, children }: { title: string; eyebrow?: string; back?: boolean; children: ReactNode }) {
  return (
    <div className="mock flex h-full flex-col text-ink dark:text-white">
      <StatusBar />
      <div className="mt-3 px-4">
        {back && (
          <span className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand shadow-card dark:bg-ios-card-dark" aria-hidden="true">
            <Icon name="arrowLeft" className="h-3 w-3" />
          </span>
        )}
        {eyebrow && <p className="fs-10 font-medium text-gray-500 dark:text-gray-400">{eyebrow}</p>}
        <p className="fs-22 font-bold tracking-tight">{title}</p>
      </div>
      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2 px-3 pb-3">{children}</div>
    </div>
  );
}

/** The step goal ring. `progress` is 0…1. */
export function GoalRing({ progress, active = true, className = "", children }: { progress: number; active?: boolean; className?: string; children?: ReactNode }) {
  const shown = Math.round(Math.min(1, progress) * 100);
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="none" strokeWidth="12" className="stroke-brand/12 dark:stroke-white/10" />
        <circle cx="60" cy="60" r="50" fill="none" strokeWidth="12" strokeLinecap="round" pathLength={100}
          strokeDasharray={`${shown} 100`} strokeDashoffset={active ? 0 : shown}
          className="stroke-brand transition-[stroke-dashoffset] duration-[1600ms] ease-[cubic-bezier(.2,.7,.2,1)]" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

/** A small trend line. Values are scaled to the box. */
export function Sparkline({ values, className = "", stroke = "stroke-brand" }: { values: number[]; className?: string; stroke?: string }) {
  const min = Math.min(...values);
  const span = Math.max(...values) - min || 1;
  const points = values.map((value, index) => `${((index / (values.length - 1)) * 100).toFixed(1)},${(27 - ((value - min) / span) * 24).toFixed(1)}`).join(" ");
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={className} aria-hidden="true">
      <polyline points={points} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className={stroke} />
    </svg>
  );
}

/** Donut of time in the five heart-rate zones. */
export function ZoneDonut({ active = true, className = "", children }: { active?: boolean; className?: string; children?: ReactNode }) {
  let start = 0;
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
        {ZONES.map((zone, index) => {
          const offset = start;
          start += zone.percent;
          const length = Math.max(0.6, zone.percent - 1.2);
          return (
            <circle key={index} cx="60" cy="60" r="46" fill="none" strokeWidth="16" pathLength={100}
              strokeDasharray={`${length} ${100 - length}`} strokeDashoffset={-offset}
              className={`${ZONE_STROKE[index]} transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 140}ms` }} />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

/** Heart-rate line with a soft fill and a dashed average line. */
export function HeartChart({ className = "" }: { className?: string }) {
  const gradient = useId();
  const low = 70;
  const high = 150;
  const y = (value: number) => 56 - ((value - low) / (high - low)) * 52;
  const points = HEART.series.map((value, index) => `${((index / (HEART.series.length - 1)) * 200).toFixed(1)},${y(value).toFixed(1)}`);
  return (
    <svg viewBox="0 0 200 60" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff3b30" stopOpacity="0.28" />
          <stop offset="1" stopColor="#ff3b30" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,60 ${points.join(" ")} 200,60`} fill={`url(#${gradient})`} />
      <line x1="0" x2="200" y1={y(HEART.average)} y2={y(HEART.average)} strokeWidth="1" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" className="stroke-gray-400/80" />
      <polyline points={points.join(" ")} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="stroke-zone5" />
    </svg>
  );
}

export const ROUTE_PATH = "M72 384 C 66 340, 112 334, 120 292 S 86 226, 140 204 S 232 232, 226 172 S 168 132, 192 98";

/**
 * A stylised map with a walking route. With `drawn` false the route is hidden; switching it
 * to true draws it over `duration` ms.
 */
export function MapArt({ drawn = true, duration = 1600, viewBox = "0 0 300 460", className = "" }: {
  drawn?: boolean;
  duration?: number;
  /** Part of the 300 × 460 map to show. */
  viewBox?: string;
  className?: string;
}) {
  return (
    <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width="300" height="460" className="fill-[#e8eef8] dark:fill-[#141b2a]" />
      {/* Water and park */}
      <path d="M-10 40 C 60 20, 90 70, 150 52 S 250 10, 310 36 V-10 H-10 Z" className="fill-[#c3dcfb] dark:fill-[#17305a]" />
      <path d="M150 232 q 44 -30 92 -8 q 34 18 22 62 q -14 44 -66 40 q -58 -4 -64 -46 q -4 -30 16 -48 Z" className="fill-[#cfeccf] dark:fill-[#173524]" />
      <circle cx="210" cy="286" r="9" className="fill-[#b5e0b8] dark:fill-[#1f4a31]" />
      <circle cx="236" cy="262" r="6" className="fill-[#b5e0b8] dark:fill-[#1f4a31]" />
      {/* Streets */}
      <g fill="none" strokeLinecap="round" className="stroke-white dark:stroke-[#273247]">
        <path d="M-10 150 L310 96" strokeWidth="11" />
        <path d="M-10 330 L310 392" strokeWidth="11" />
        <path d="M96 -10 L60 470" strokeWidth="9" />
        <path d="M268 60 L286 470" strokeWidth="7" />
        <path d="M-10 236 L140 204" strokeWidth="7" />
        <path d="M30 60 L190 98 L250 60" strokeWidth="6" />
        <path d="M120 292 L20 300" strokeWidth="6" />
        <path d="M140 204 L172 440" strokeWidth="6" />
        <path d="M-10 420 L120 440 L310 446" strokeWidth="6" />
      </g>
      {/* Route */}
      <path d={ROUTE_PATH} fill="none" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" pathLength={1}
        strokeDasharray="1" strokeDashoffset={drawn ? 0 : 1} className="stroke-white/90 transition-[stroke-dashoffset] ease-linear dark:stroke-[#0a101d]/80"
        style={{ transitionDuration: `${drawn ? duration : 0}ms` }} />
      <path d={ROUTE_PATH} fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" pathLength={1}
        strokeDasharray="1" strokeDashoffset={drawn ? 0 : 1} className="stroke-brand transition-[stroke-dashoffset] ease-linear"
        style={{ transitionDuration: `${drawn ? duration : 0}ms` }} />
      <circle cx="72" cy="384" r="6" strokeWidth="3" className="fill-white stroke-zone2" />
      <g className={`transition-opacity duration-500 ${drawn ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${drawn ? duration : 0}ms` }}>
        <circle cx="192" cy="98" r="14" className="animate-ping fill-brand/30 [transform-box:fill-box] [transform-origin:center]" />
        <circle cx="192" cy="98" r="7" strokeWidth="3" className="fill-brand stroke-white" />
      </g>
    </svg>
  );
}

/* ---------- Screens ---------- */

function TabBar() {
  const side: IconName[] = ["target", "calendar", "chart", "heart"];
  return (
    <div className="mx-1 flex h-13 shrink-0 items-center justify-between rounded-4xl bg-white px-5 shadow-card dark:bg-ios-card-dark" aria-hidden="true">
      {side.slice(0, 2).map((name, index) => (
        <Icon key={name} name={name} className={`h-5 w-5 ${index === 0 ? "text-brand" : "text-gray-400"}`} />
      ))}
      <span className="-mt-5 flex h-13 w-13 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/40 ring-4 ring-ios-bg dark:ring-night">
        <Icon name="walk" className="h-6 w-6" />
      </span>
      {side.slice(2).map((name) => (
        <Icon key={name} name={name} className="h-5 w-5 text-gray-400" />
      ))}
    </div>
  );
}

function Stat({ icon, tint, label, value, unit, className = "" }: { icon: IconName; tint: string; label: string; value: string; unit?: string; className?: string }) {
  return (
    <MockCard className={`min-w-0 px-2.5 py-2 ${className}`}>
      <p className="flex items-center gap-1 fs-9 font-medium text-gray-500 dark:text-gray-400">
        <Icon name={icon} className={`h-3 w-3 shrink-0 ${tint}`} />
        <span className="truncate">{label}</span>
      </p>
      <p className="mt-0.5 truncate">
        <span className="num fs-17 font-bold">{value}</span>
        {unit && <span className="fs-9 font-medium text-gray-500 dark:text-gray-400"> {unit}</span>}
      </p>
    </MockCard>
  );
}

/** Today: goal ring, summary card, key-stat grid, hourly chart. */
export function TodayMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock.today;
  const u = t.home.units;
  const n = useNumber();
  const percent = Math.round((DAY.steps / DAY.goal) * 100);
  const peak = Math.max(...HOURLY);
  return (
    <MockScreen title={m.title} eyebrow={m.date}>
      <MockCard className="flex justify-center py-3">
        <GoalRing progress={DAY.steps / DAY.goal} active={active} className="h-36 w-36">
          <Icon name="walk" className="h-4 w-4 text-brand" />
          <span className="num fs-30 leading-none font-extrabold tracking-tight">{n(DAY.steps)}</span>
          <span className="mt-0.5 fs-9 font-medium text-gray-500 dark:text-gray-400">{m.goal.replace("{goal}", n(DAY.goal))}</span>
        </GoalRing>
      </MockCard>
      <MockCard className="flex items-center gap-2 px-3 py-2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-brand/25 dark:text-brand-light">
          <Icon name="sparkles" className="h-3.5 w-3.5" />
        </span>
        <p className="fs-10 leading-snug font-medium">{m.summary.replace("{percent}", String(percent)).replace("{left}", n(DAY.goal - DAY.steps))}</p>
      </MockCard>
      <div className="grid grid-cols-6 gap-2">
        <Stat className="col-span-2" icon="route" tint="text-brand" label={m.distance} value={n(DAY.km, 1)} unit={u.km} />
        <Stat className="col-span-2" icon="clock" tint="text-zone2" label={m.activeTime} value={n(DAY.activeMin)} unit={u.min} />
        <Stat className="col-span-2" icon="flame" tint="text-zone4" label={m.calories} value={n(DAY.kcal)} unit={u.kcal} />
        <Stat className="col-span-3" icon="stairs" tint="text-zone3" label={m.floors} value={n(DAY.floors)} unit={u.floors} />
        <Stat className="col-span-3" icon="heart" tint="text-zone5" label={m.heartRate} value={n(DAY.bpm)} unit={u.bpm} />
      </div>
      <MockCard className="flex min-h-0 flex-1 flex-col px-3 pt-2 pb-1.5">
        <p className="fs-9 font-semibold text-gray-500 dark:text-gray-400">{m.hourly}</p>
        <div className="mt-1 flex min-h-0 flex-1 items-end gap-[2px]" aria-hidden="true">
          {HOURLY.map((value, index) => (
            <span key={index} className={`flex-1 rounded-t-[2px] transition-[height] duration-700 ease-out ${value ? "bg-brand" : "bg-brand/15"}`}
              style={{ height: active ? `${Math.max(4, (value / peak) * 100)}%` : "4%", transitionDelay: `${index * 25}ms` }} />
          ))}
        </div>
        <div className="num mt-0.5 flex justify-between fs-8 text-gray-400" aria-hidden="true">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </MockCard>
      <TabBar />
    </MockScreen>
  );
}

/** Walk: live map with the route, timer, distance, steps, pace, pause / finish. */
export function WalkMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock.walk;
  const u = t.home.units;
  const n = useNumber();
  const cells = [
    { label: m.distance, value: n(2.14, 2), unit: u.km },
    { label: m.steps, value: n(2846), unit: "" },
    { label: m.pace, value: "11'21\"", unit: u.perKm },
  ];
  return (
    <div className="mock relative h-full text-ink dark:text-white">
      <MapArt drawn={active} duration={2400} className="absolute inset-x-0 top-0 h-[72%] w-full" />
      <StatusBar className="relative" />
      <div className="absolute left-1/2 top-[9%] flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 fs-10 font-semibold whitespace-nowrap shadow-card dark:bg-ios-card-dark/95">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zone5" />
        {m.recording}
      </div>
      <div className="absolute inset-x-2 bottom-2 rounded-4xl bg-white p-4 shadow-xl dark:bg-ios-card-dark">
        <p className="fs-9 font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">{m.duration}</p>
        <p className="num fs-40 leading-none font-extrabold tracking-tight">24:18</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {cells.map((cell) => (
            <div key={cell.label} className="min-w-0 rounded-2xl bg-ios-bg px-1.5 py-1.5 dark:bg-white/5">
              <p className="truncate fs-8 font-medium text-gray-500 dark:text-gray-400">{cell.label}</p>
              <p className="whitespace-nowrap"><span className="num fs-13 font-bold">{cell.value}</span><span className="fs-8 text-gray-500 dark:text-gray-400">{cell.unit && ` ${cell.unit}`}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 fs-12 font-semibold">
          <span className="flex items-center justify-center gap-1.5 rounded-2xl bg-ios-bg py-2.5 dark:bg-white/10">
            <Icon name="pause" className="h-3.5 w-3.5" />{m.pause}
          </span>
          <span className="flex items-center justify-center rounded-2xl bg-brand py-2.5 text-white">{m.finish}</span>
        </div>
      </div>
    </div>
  );
}

/** Heart-rate zones: donut, per-zone breakdown, insight. */
export function ZonesMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock.zones;
  const u = t.home.units;
  const total = ZONES.reduce((sum, zone) => sum + zone.min, 0);
  return (
    <MockScreen title={m.title} back>
      <MockCard className="flex justify-center py-3">
        <ZoneDonut active={active} className="h-44 w-44">
          <span className="num fs-34 leading-none font-extrabold">{total}</span>
          <span className="mt-0.5 fs-9 font-medium text-gray-500 dark:text-gray-400">{u.min} {m.total}</span>
        </ZoneDonut>
      </MockCard>
      <MockCard className="px-3 py-2.5">
        <div className="flex items-center gap-1.5 fs-8 font-semibold text-gray-400">
          <span className="flex-1">{m.zone}</span><span className="w-12 text-right">{m.time}</span><span className="w-16 text-right">{m.average} {u.bpm}</span>
        </div>
        {ZONES.map((zone, index) => (
          <div key={index} className="mt-2.5">
            <div className="flex items-center gap-1.5 fs-11">
              <span className={`h-2 w-2 shrink-0 rounded-full ${ZONE_BG[index]}`} />
              <span className="flex-1 font-semibold">{m.zone} {index + 1}</span>
              <span className="num w-12 text-right text-gray-600 dark:text-gray-300">{zone.min} {u.min}</span>
              <span className="num w-16 text-right font-semibold">{zone.bpm}</span>
            </div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-ios-bg dark:bg-white/10">
              <div className={`h-full rounded-full transition-[width] duration-1000 ease-out ${ZONE_BG[index]}`}
                style={{ width: active ? `${zone.percent}%` : "0%", transitionDelay: `${index * 120}ms` }} />
            </div>
          </div>
        ))}
      </MockCard>
      <div className="rounded-3xl bg-brand/10 px-3 py-2.5 dark:bg-brand/20">
        <p className="flex items-center gap-1 fs-9 font-semibold tracking-wide text-brand uppercase dark:text-brand-light">
          <Icon name="sparkles" className="h-3 w-3" />{m.insightLabel}
        </p>
        <p className="mt-0.5 fs-12 leading-snug font-semibold">{m.insight}</p>
      </div>
    </MockScreen>
  );
}

/** "+6%" with an arrow, green when up. */
export function Change({ percent, className = "" }: { percent: number; className?: string }) {
  return (
    <span className={`num inline-flex items-center gap-0.5 font-semibold ${percent >= 0 ? "text-good" : "text-zone4"} ${className}`}>
      <Icon name="trendUp" className={`h-[1em] w-[1em] ${percent >= 0 ? "" : "-scale-y-100"}`} />
      {percent >= 0 ? "+" : "−"}{Math.abs(percent)}%
    </span>
  );
}

/** Average minutes on foot per hour of the day; the peak hour is green. */
export function HoursChart({ active = true, className = "" }: { active?: boolean; className?: string }) {
  const peak = Math.max(...INSIGHTS.hours);
  return (
    <div className={`flex items-end gap-[3%] ${className}`} aria-hidden="true">
      {INSIGHTS.hours.map((value, index) => (
        <span key={index} className={`flex-1 rounded-full transition-[height] duration-700 ease-out ${value === peak ? "bg-zone2" : value ? "bg-brand" : "bg-brand/15"}`}
          style={{ height: active ? `${Math.max(5, (value / peak) * 100)}%` : "5%", transitionDelay: `${index * 25}ms` }} />
      ))}
    </div>
  );
}

/** "2 h 50 min" / "42 min". */
export function useDuration(): (minutes: number) => string {
  const { t } = useLanguage();
  const u = t.home.units;
  return (minutes) => {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return [hours ? `${hours} ${u.h}` : "", rest || !hours ? `${rest} ${u.min}` : ""].filter(Boolean).join(" ");
  };
}

/** Stats › Insights (PRO): "For You" suggestions, trend comparison, most active hours, motion stats. */
export function InsightsMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock.insights;
  const u = t.home.units;
  const n = useNumber();
  const duration = useDuration();
  const comparisons = [
    { title: m.last7, note: m.vs7, ...INSIGHTS.week },
    { title: m.last30, note: m.vs30, ...INSIGHTS.month },
  ];
  return (
    <MockScreen title={m.title}>
      <div className="grid grid-cols-4 rounded-xl bg-brand/10 p-0.5 text-center fs-9 font-semibold dark:bg-white/10" aria-hidden="true">
        {m.tabs.map((tab, index) => (
          <span key={tab} className={`truncate rounded-lg px-0.5 py-1 ${index === 3 ? "bg-white text-ink shadow-card dark:bg-brand dark:text-white dark:shadow-none" : "text-gray-500 dark:text-gray-400"}`}>{tab}</span>
        ))}
      </div>
      <MockCard className="px-3 py-2.5">
        <p className="flex items-center gap-1 fs-11 font-bold"><Icon name="sparkles" className="h-3.5 w-3.5 text-brand" />{m.forYou}</p>
        {m.tips.slice(0, 2).map((tip, index) => (
          <div key={tip.title} className="mt-2 flex items-start gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brand/25 dark:text-brand-light">
              <Icon name={TIP_ICONS[index]} className="h-3.5 w-3.5" />
            </span>
            <p className="min-w-0">
              <span className="block fs-10 font-semibold">{tip.title}</span>
              <span className="block fs-9 leading-snug text-gray-500 dark:text-gray-400">{tip.text.replace("{left}", n(DAY.goal - DAY.steps))}</span>
            </p>
          </div>
        ))}
      </MockCard>
      <MockCard className="px-3 py-2.5">
        <p className="flex items-center gap-1 fs-11 font-bold"><Icon name="trendUp" className="h-3.5 w-3.5 text-brand" />{m.trend}</p>
        {comparisons.map((row) => (
          <div key={row.title} className="mt-1.5 flex items-center justify-between gap-2">
            <p className="min-w-0">
              <span className="block truncate fs-10 font-semibold">{row.title}</span>
              <span className="block truncate fs-8 text-gray-500 dark:text-gray-400">{row.note}</span>
            </p>
            <p className="shrink-0 text-right">
              <span className="num fs-13 font-bold">{n(row.average)}</span><span className="fs-8 text-gray-500 dark:text-gray-400"> {u.steps}</span>
              <Change percent={row.change} className="ml-1.5 fs-9" />
            </p>
          </div>
        ))}
      </MockCard>
      <MockCard className="flex min-h-0 flex-1 flex-col px-3 pt-2.5 pb-1.5">
        <p className="flex items-center gap-1 fs-11 font-bold"><Icon name="walk" className="h-3.5 w-3.5 text-brand" />{m.hours}</p>
        <HoursChart active={active} className="mt-1.5 min-h-0 flex-1" />
        <div className="num mt-0.5 flex justify-between fs-8 text-gray-400" aria-hidden="true">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
        </div>
      </MockCard>
      <div className="grid grid-cols-2 gap-2">
        <Stat icon="walk" tint="text-brand" label={m.onFoot} value={duration(INSIGHTS.onFootMin)} />
        <Stat icon="repeat" tint="text-brand" label={m.walksPerDay} value={n(INSIGHTS.walksPerDay)} />
        <Stat icon="clock" tint="text-zone2" label={m.longestWalk} value={duration(INSIGHTS.longestWalkMin)} />
        <Stat icon="chair" tint="text-zone4" label={m.longestSitting} value={duration(INSIGHTS.longestSittingMin)} />
      </div>
    </MockScreen>
  );
}

/** Walking metrics: four metric cards with sparklines and the heart-rate chart. */
export function MetricsMock() {
  const { t } = useLanguage();
  const m = t.home.mock.metrics;
  const u = t.home.units;
  const n = useNumber();
  const cards: { icon: IconName; label: string; value: string; unit: string; trend: number[] }[] = [
    { icon: "gauge", label: m.speed, value: n(5.1, 1), unit: u.kmh, trend: METRIC_TRENDS.speed },
    { icon: "ruler", label: m.stepLength, value: n(72), unit: u.cm, trend: METRIC_TRENDS.stepLength },
    { icon: "balance", label: m.asymmetry, value: n(2.1, 1), unit: "%", trend: METRIC_TRENDS.asymmetry },
    { icon: "feet", label: m.doubleSupport, value: n(27.4, 1), unit: "%", trend: METRIC_TRENDS.doubleSupport },
  ];
  return (
    <MockScreen title={m.title} back>
      <div className="grid grid-cols-2 gap-2">
        {cards.map((card) => (
          <MockCard key={card.label} className="min-w-0 px-3 py-2.5">
            <p className="flex items-center gap-1 fs-9 font-medium text-gray-500 dark:text-gray-400">
              <Icon name={card.icon} className="h-3 w-3 shrink-0 text-brand" />
              <span className="truncate">{card.label}</span>
            </p>
            <p className="mt-1"><span className="num fs-20 leading-none font-bold">{card.value}</span><span className="fs-9 font-medium text-gray-500 dark:text-gray-400"> {card.unit}</span></p>
            <Sparkline values={card.trend} className="mt-2 h-9 w-full" />
          </MockCard>
        ))}
      </div>
      <MockCard className="flex min-h-0 flex-1 flex-col px-3 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-center gap-1 fs-11 font-semibold"><Icon name="heart" className="h-3.5 w-3.5 text-zone5" />{m.heartRate}</p>
          <span className="fs-8 font-medium text-gray-400">{u.bpm}</span>
        </div>
        <div className="mt-2 flex gap-5">
          <p><span className="block fs-8 font-medium text-gray-500 dark:text-gray-400">{m.average}</span><span className="num fs-20 leading-tight font-bold">{HEART.average}</span></p>
          <p><span className="block fs-8 font-medium text-gray-500 dark:text-gray-400">{m.max}</span><span className="num fs-20 leading-tight font-bold text-zone5">{HEART.max}</span></p>
        </div>
        <HeartChart className="mt-2 min-h-0 w-full flex-1" />
      </MockCard>
    </MockScreen>
  );
}
