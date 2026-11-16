/**
 * HTML mocks of the app's screens, shown inside `PhoneFrame` while a screenshot slot in
 * `src/config.ts` is `null`. They are laid out for a 300px-wide screen and scale with the
 * frame (see `.mock` in `src/index.css`): use normal spacing classes and `fs-<px>` for text.
 */
import { useId, type ReactNode } from "react";
import { Icon, ICON_PATHS, type IconName } from "../../components/Icon";
import { useLanguage, useNumber, type SampleSight } from "../../i18n";

/* ---------- Sample data ---------- */

/** The six sight categories, in the app's order: landmarks, museums, castles, stages, libraries, parks. */
export const CATEGORY_ICONS: IconName[] = ["landmark", "palette", "castle", "masks", "books", "tree"];
/** The app's category colours. */
export const CATEGORY_COLORS = ["#d96b1a", "#8c5cf5", "#806b54", "#e64073", "#148c9e", "#299e52"];

/** Cup tiers: sights needed and the app's gradient. */
export const TIERS = [
  { at: 1, from: "#e8a46b", to: "#b86b32" },
  { at: 10, from: "#d9dee8", to: "#8e97a8" },
  { at: 40, from: "#ffd75e", to: "#e09a0b" },
  { at: 120, from: "#5ba0ff", to: "#5b3df5" },
];
/** Highest tier index reached with `count` sights, or -1. */
export function tierFor(count: number): number {
  let tier = -1;
  TIERS.forEach((entry, index) => {
    if (count >= entry.at) tier = index;
  });
  return tier;
}
/** Sights collected per category in the sample collection. */
export const COLLECTION = [14, 9, 2, 0, 3, 41];

export const DAY = { steps: 8426, goal: 10000, km: 5.8, kcal: 312, floors: 9, bpm: 96 };

/** A new-ground competition: km² of ground each person had never walked before. Index 1 is "you". */
export const RACE = [0.42, 0.37, 0.29, 0.18];

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

/** A mock iPhone screen: status bar, title with the settings button, then the content. */
function MockScreen({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <div className="mock flex h-full flex-col text-ink dark:text-white">
      <StatusBar />
      <div className="mt-3 flex items-end justify-between px-4">
        <div>
          {eyebrow && <p className="fs-10 font-medium text-gray-500 dark:text-gray-400">{eyebrow}</p>}
          <p className="fs-22 font-bold tracking-tight">{title}</p>
        </div>
        <span className="mb-1 h-6 w-6 rounded-full bg-white shadow-card dark:bg-ios-card-dark" aria-hidden="true" />
      </div>
      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2 px-3 pb-3">{children}</div>
    </div>
  );
}

/** The app's tab bar (Explore, Today, Awards, Stats) and the floating button that starts a walk. */
function TabBar({ active }: { active: number }) {
  const { t } = useLanguage();
  const icons: IconName[] = ["map", "target", "medal", "chart"];
  return (
    <div className="relative mx-1 flex shrink-0 items-center gap-2" aria-hidden="true">
      <div className="flex h-13 flex-1 items-center justify-around rounded-4xl bg-white/95 px-2 shadow-card backdrop-blur dark:bg-ios-card-dark/95">
        {icons.map((name, index) => (
          <span key={name} className={`flex min-w-0 flex-col items-center gap-0.5 ${index === active ? "text-brand dark:text-brand-light" : "text-gray-400"}`}>
            <Icon name={name} className="h-4.5 w-4.5" />
            <span className="max-w-full truncate fs-7 font-semibold">{t.home.mock.tabs[index]}</span>
          </span>
        ))}
      </div>
      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/40">
        <Icon name="walk" className="h-6 w-6" />
      </span>
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

/** A round badge with a category's icon in its colour. */
export function CategoryDot({ category, className = "h-7 w-7", iconClass = "h-3.5 w-3.5" }: { category: number; className?: string; iconClass?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full text-white ${className}`} style={{ backgroundColor: CATEGORY_COLORS[category] }}>
      <Icon name={CATEGORY_ICONS[category]} className={iconClass} />
    </span>
  );
}

/** A cup for one category: the gradient of the tier reached, or grey before the first sight. */
export function Cup({ category, count, className = "h-11 w-11", iconClass = "h-5 w-5" }: { category: number; count: number; className?: string; iconClass?: string }) {
  const tier = tierFor(count);
  const style = tier >= 0 ? { backgroundImage: `linear-gradient(160deg, ${TIERS[tier].from}, ${TIERS[tier].to})` } : undefined;
  return (
    <span className={`relative flex shrink-0 items-center justify-center rounded-full ${tier >= 0 ? "text-white shadow-md" : "bg-gray-200 text-gray-400 dark:bg-white/10 dark:text-gray-500"} ${className}`} style={style}>
      <Icon name={tier >= 0 ? "trophy" : CATEGORY_ICONS[category]} className={iconClass} />
    </span>
  );
}

/* ---------- The fog map ---------- */

/** Streets walked before: the fog is already cleared around them. */
const WALKED = [
  "M63 560 L72 420 L80 300 L87 190 L92 120",
  "M80 279 L150 262 L161 372 L168 440 L174 500",
  "M161 372 L125 372 L76 376",
  "M72 438 L168 459 L230 473",
];
/** The latest walk: clears the fog when `revealed` switches on. */
const FRESH_WALK = "M87 172 L190 152 L265 138 L271 300 L275 400";

/** Sights on the map. A `fresh` sight is collected by the latest walk. */
const SIGHTS: { x: number; y: number; category: number; found: boolean; fresh?: boolean }[] = [
  { x: 112, y: 300, category: 0, found: true },
  { x: 120, y: 212, category: 1, found: true },
  { x: 188, y: 410, category: 4, found: true },
  { x: 246, y: 330, category: 5, found: false, fresh: true },
  { x: 214, y: 214, category: 1, found: false },
  { x: 26, y: 232, category: 2, found: false },
  { x: 228, y: 530, category: 3, found: false },
];
/** The sight shown in the sight card (index into `SIGHTS`). */
const SELECTED = 4;
/** Areas (hexagons about 500 m across) walked in; `half` = half or more uncovered, outlined in orange. */
const AREAS: { x: number; y: number; half: boolean }[] = [
  { x: 96, y: 222, half: true }, { x: 96, y: 277, half: true }, { x: 96, y: 332, half: true },
  { x: 96, y: 388, half: true }, { x: 96, y: 443, half: false }, { x: 96, y: 166, half: false },
  { x: 96, y: 499, half: false }, { x: 48, y: 305, half: false }, { x: 48, y: 416, half: false },
  { x: 144, y: 305, half: true }, { x: 144, y: 360, half: true }, { x: 144, y: 416, half: true },
  { x: 144, y: 471, half: false }, { x: 192, y: 443, half: false }, { x: 192, y: 388, half: false },
];
const HEX_R = 32;
function hexagon(x: number, y: number): string {
  const h = (HEX_R * Math.sqrt(3)) / 2;
  return [[x - HEX_R, y], [x - HEX_R / 2, y - h], [x + HEX_R / 2, y - h], [x + HEX_R, y], [x + HEX_R / 2, y + h], [x - HEX_R / 2, y + h]]
    .map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
}

/** A sight marker: the category's colour and icon once collected, a grey question mark before. */
function SightPin({ x, y, category, found, large = false }: { x: number; y: number; category: number; found: boolean; large?: boolean }) {
  const r = large ? 13 : 9;
  if (!found) {
    return (
      <g>
        <circle cx={x} cy={y} r={r} strokeWidth="2" className="fill-[#9aa1ad] stroke-white dark:fill-[#4b5363] dark:stroke-[#0a101d]" />
        <text x={x} y={y + r * 0.42} textAnchor="middle" fontSize={r * 1.2} fontWeight="700" className="fill-white">?</text>
      </g>
    );
  }
  const size = r * 1.15;
  return (
    <g>
      <circle cx={x} cy={y} r={r} strokeWidth="2" fill={CATEGORY_COLORS[category]} className="stroke-white dark:stroke-[#0a101d]" />
      <svg x={x - size / 2} y={y - size / 2} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        <path d={ICON_PATHS[CATEGORY_ICONS[category]]} />
      </svg>
    </g>
  );
}

/**
 * A stylised city under fog. Streets walked before are cleared; `revealed` clears the latest
 * walk over `duration` ms, and with `trace` that walk is drawn as a line too.
 * Coordinates are a 300 × 600 map; `viewBox` picks the part to show.
 */
export function FogMap({
  revealed = true,
  duration = 1600,
  trace = false,
  areas = true,
  route = false,
  collected,
  viewBox = "0 0 300 600",
  className = "",
}: {
  revealed?: boolean;
  duration?: number;
  trace?: boolean;
  areas?: boolean;
  /** Draws the walking route from the person to the selected sight and enlarges its marker. */
  route?: boolean;
  /** Whether the sight on the latest walk is collected; defaults to `revealed`. */
  collected?: boolean;
  viewBox?: string;
  className?: string;
}) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const mask = `fog-mask-${id}`;
  const blur = `fog-blur-${id}`;
  const timing = { transitionDuration: `${revealed ? duration : 0}ms` };
  const selected = SIGHTS[SELECTED];
  const me = route ? { x: 271, y: 300 } : { x: 275, y: 400 };
  return (
    <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <filter id={blur} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <mask id={mask} maskUnits="userSpaceOnUse" x="-20" y="-20" width="340" height="640">
          <rect x="-20" y="-20" width="340" height="640" fill="white" />
          <g fill="none" stroke="black" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${blur})`}>
            {WALKED.map((d) => <path key={d} d={d} />)}
            <path d={FRESH_WALK} pathLength={1} strokeDasharray="1" strokeDashoffset={revealed ? 0 : 1}
              className="transition-[stroke-dashoffset] ease-linear" style={timing} />
          </g>
        </mask>
      </defs>

      {/* The map */}
      <rect width="300" height="600" className="fill-[#e8eef8] dark:fill-[#141b2a]" />
      <path d="M-10 50 C 60 30, 90 85, 150 66 S 250 20, 310 46 V-10 H-10 Z" className="fill-[#c3dcfb] dark:fill-[#17305a]" />
      <path d="M165 300 q 44 -30 92 -8 q 34 18 22 62 q -14 44 -66 40 q -58 -4 -64 -46 q -4 -30 16 -48 Z" className="fill-[#cfeccf] dark:fill-[#173524]" />
      <path d="M20 590 q 30 -40 80 -20 q 20 30 -10 40 Z" className="fill-[#cfeccf] dark:fill-[#173524]" />
      <g fill="none" strokeLinecap="round" className="stroke-white dark:stroke-[#273247]">
        <path d="M-10 190 L310 130" strokeWidth="11" />
        <path d="M-10 420 L310 490" strokeWidth="11" />
        <path d="M100 -10 L60 610" strokeWidth="9" />
        <path d="M262 70 L284 610" strokeWidth="7" />
        <path d="M-10 300 L150 262" strokeWidth="7" />
        <path d="M30 80 L190 120 L250 80" strokeWidth="6" />
        <path d="M125 372 L-10 382" strokeWidth="6" />
        <path d="M150 262 L180 560" strokeWidth="6" />
        <path d="M-10 540 L130 560 L310 568" strokeWidth="6" />
        <path d="M180 205 L300 250" strokeWidth="4" />
        <path d="M0 480 L90 470" strokeWidth="4" />
        <path d="M200 520 L280 505" strokeWidth="4" />
      </g>

      {/* The fog, with soft holes along every walk */}
      <rect x="-20" y="-20" width="340" height="640" mask={`url(#${mask})`} className="fill-[#cdd3de]/[0.96] dark:fill-[#323b4d]/[0.92]" />

      {areas && (
        <g fill="none" strokeLinejoin="round">
          {AREAS.map((area) => (
            <polygon key={`${area.x}-${area.y}`} points={hexagon(area.x, area.y)} strokeWidth={area.half ? 2 : 1}
              className={area.half ? "stroke-zone4" : "stroke-gray-400/60 dark:stroke-white/25"} />
          ))}
        </g>
      )}

      {trace && (
        <path d={FRESH_WALK} fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" pathLength={1}
          strokeDasharray="1" strokeDashoffset={revealed ? 0 : 1} className="stroke-brand transition-[stroke-dashoffset] ease-linear" style={timing} />
      )}

      {route && (
        <path d={`M${me.x} ${me.y} L267 200 L232 206 L${selected.x} ${selected.y}`} fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="0.1 9" className="stroke-brand" />
      )}

      {SIGHTS.map((sight, index) => (
        <SightPin key={index} x={sight.x} y={sight.y} category={sight.category}
          found={sight.found || (!!sight.fresh && (collected ?? revealed))}
          large={route && index === SELECTED} />
      ))}

      <g className={trace ? `transition-opacity duration-300 ${revealed ? "opacity-100" : "opacity-0"}` : ""} style={trace ? { transitionDelay: `${revealed ? duration : 0}ms` } : undefined}>
        <circle cx={me.x} cy={me.y} r="13" className="animate-ping fill-brand/30 [transform-box:fill-box] [transform-origin:center]" />
        <circle cx={me.x} cy={me.y} r="7" strokeWidth="3" className="fill-brand stroke-white" />
      </g>
    </svg>
  );
}

/* ---------- Screens ---------- */

/** Explore: the fog map with areas and sights, this week's new ground, the nearest fog and a nearby sight. */
export function ExploreMock() {
  const { t } = useLanguage();
  const m = t.home.mock;
  const e = m.explore;
  const u = t.home.units;
  const n = useNumber();
  const next = e.sights[0];
  return (
    <div className="mock relative flex h-full flex-col text-ink dark:text-white">
      <FogMap className="absolute inset-0 h-full w-full" />
      <StatusBar className="relative" />
      <div className="relative mt-2 flex items-center justify-between px-3">
        <p className="rounded-full bg-white/90 px-3 py-1 fs-17 font-bold tracking-tight shadow-card backdrop-blur dark:bg-ios-card-dark/90">{e.title}</p>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand shadow-card backdrop-blur dark:bg-ios-card-dark/90 dark:text-brand-light" aria-hidden="true">
          <Icon name="clock" className="h-4 w-4" />
        </span>
      </div>
      <div className="relative mt-auto flex flex-col gap-2 px-3 pb-3">
        <div className="grid grid-cols-2 gap-2">
          <MockCard className="min-w-0 px-2.5 py-2">
            <p className="flex items-center gap-1 fs-9 font-medium text-gray-500 dark:text-gray-400"><Icon name="hexagon" className="h-3 w-3 shrink-0 text-zone4" /><span className="truncate">{e.thisWeek}</span></p>
            <p className="num mt-0.5 fs-15 font-bold">+{n(0.21, 2)} <span className="fs-9 font-medium text-gray-500 dark:text-gray-400">{u.km2}</span></p>
          </MockCard>
          <MockCard className="min-w-0 px-2.5 py-2">
            <p className="flex items-center gap-1 fs-9 font-medium text-gray-500 dark:text-gray-400"><Icon name="cloud" className="h-3 w-3 shrink-0 text-gray-400" /><span className="truncate">{e.nearestFog}</span></p>
            <p className="mt-0.5 truncate fs-11 leading-[1.6] font-bold">{e.fogDirection.replace("{distance}", `${n(300)} ${u.m}`)}</p>
          </MockCard>
        </div>
        <MockCard className="px-3 py-2.5">
          <p className="flex items-center gap-1 fs-11 font-bold"><Icon name="sparkles" className="h-3.5 w-3.5 text-brand" />{e.nearby}</p>
          <div className="mt-2 flex items-center gap-2">
            <CategoryDot category={next.category} />
            <p className="min-w-0 flex-1">
              <span className="block truncate fs-11 font-semibold">{next.name}</span>
              <span className="block truncate fs-9 text-gray-500 dark:text-gray-400">
                {m.away.replace("{distance}", `${n(650)} ${u.m}`)} · {e.more.replace("{count}", "4")}
              </span>
            </p>
            <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90 text-gray-400" />
          </div>
        </MockCard>
        <TabBar active={0} />
      </div>
    </div>
  );
}

/** A sight's card: distance, the walking route on the map, Walk There and About This Place. */
export function SightMock() {
  const { t } = useLanguage();
  const m = t.home.mock;
  const s = m.sight;
  const u = t.home.units;
  const n = useNumber();
  return (
    <div className="mock relative flex h-full flex-col text-ink dark:text-white">
      <FogMap route areas={false} viewBox="150 150 160 236" className="absolute inset-x-0 top-0 h-[68%] w-full" />
      <StatusBar className="relative" />
      <div className="relative mt-auto rounded-t-4xl bg-white px-4 pt-2 pb-5 shadow-[0_-8px_30px_rgba(20,60,140,0.15)] dark:bg-ios-card-dark">
        <span className="mx-auto block h-1 w-9 rounded-full bg-gray-300 dark:bg-white/20" aria-hidden="true" />
        <div className="mt-3 flex items-center gap-2.5">
          <CategoryDot category={s.sight.category} className="h-10 w-10" iconClass="h-5 w-5" />
          <div className="min-w-0">
            <p className="fs-9 font-semibold tracking-wide uppercase" style={{ color: CATEGORY_COLORS[s.sight.category] }}>{s.sight.note}</p>
            <p className="truncate fs-18 leading-tight font-bold">{s.sight.name}</p>
          </div>
        </div>
        <p className="mt-2 fs-10 text-gray-500 dark:text-gray-400">{m.away.replace("{distance}", `${n(650)} ${u.m}`)} · {s.walkTime}</p>
        <div className="mt-3 grid grid-cols-2 gap-2 fs-11 font-semibold">
          <span className="flex items-center justify-center gap-1.5 rounded-2xl bg-brand py-2.5 text-white"><Icon name="navigate" className="h-3.5 w-3.5 shrink-0" />{m.walkThere}</span>
          <span className="flex items-center justify-center gap-1.5 rounded-2xl bg-ios-bg px-1 py-2.5 text-brand dark:bg-white/10 dark:text-brand-light"><Icon name="info" className="h-3.5 w-3.5 shrink-0" /><span className="truncate">{s.about}</span></span>
        </div>
        <p className="mt-3 flex items-start gap-1.5 rounded-2xl bg-ios-bg px-2.5 py-2 fs-9 leading-snug text-gray-600 dark:bg-white/5 dark:text-gray-300">
          <Icon name="pin" className="mt-px h-3 w-3 shrink-0 text-brand" />{s.hint}
        </p>
      </div>
    </div>
  );
}

/** The Awards screen's page picker; `active` is the selected page. */
function PagePicker({ active }: { active: number }) {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-3 rounded-full bg-brand/10 p-0.5 text-center fs-9 font-semibold dark:bg-white/10" aria-hidden="true">
      {t.home.mock.collection.pages.map((page, index) => (
        <span key={page} className={`truncate rounded-full px-1 py-1 ${index === active ? "bg-white text-ink shadow-card dark:bg-brand dark:text-white dark:shadow-none" : "text-gray-500 dark:text-gray-400"}`}>{page}</span>
      ))}
    </div>
  );
}

function SightRow({ sight }: { sight: SampleSight }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <CategoryDot category={sight.category} />
      <p className="min-w-0 flex-1">
        <span className="block truncate fs-11 font-semibold">{sight.name}</span>
        <span className="block truncate fs-9 text-gray-500 dark:text-gray-400">{sight.note}</span>
      </p>
    </div>
  );
}

/** Awards › Collection: a cup per category and the collected sights. */
export function CollectionMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock;
  const c = m.collection;
  const total = COLLECTION.reduce((sum, value) => sum + value, 0);
  return (
    <MockScreen title={c.title}>
      <PagePicker active={0} />
      <MockCard className="px-3 py-2.5">
        <p className="flex items-center gap-1 fs-11 font-bold"><Icon name="trophy" className="h-3.5 w-3.5 text-zone4" />{c.cups}</p>
        <div className="mt-2 grid grid-cols-3 gap-y-2.5">
          {COLLECTION.map((count, index) => {
            const tier = tierFor(count);
            return (
              <div key={index} className={`flex min-w-0 flex-col items-center text-center transition duration-500 ${active ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
                style={{ transitionDelay: `${index * 90}ms` }}>
                <Cup category={index} count={count} />
                <span className="mt-1 w-full truncate fs-9 font-semibold">{m.categories[index]}</span>
                <span className="num fs-8 text-gray-500 dark:text-gray-400">{count}{tier >= 0 ? ` · ${m.tiers[tier]}` : ""}</span>
              </div>
            );
          })}
        </div>
      </MockCard>
      <MockCard className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 py-2.5">
        <p className="fs-11 font-bold">{c.collected}</p>
        <p className="fs-9 text-gray-500 dark:text-gray-400">{c.count.replace("{count}", String(total))}</p>
        <div className="mt-1 divide-y divide-gray-100 dark:divide-white/5">
          {c.sights.map((sight) => <SightRow key={sight.name} sight={sight} />)}
        </div>
      </MockCard>
      <TabBar active={2} />
    </MockScreen>
  );
}

/** Awards › Competitions: a new-ground competition and its ranking. */
export function CompeteMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock;
  const c = m.compete;
  const u = t.home.units;
  const n = useNumber();
  const names = [c.people[0], c.you, c.people[1], c.people[2]];
  const top = RACE[0];
  return (
    <MockScreen title={m.collection.title}>
      <PagePicker active={2} />
      <MockCard className="px-3 py-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate fs-15 font-bold">{c.name}</p>
            <p className="fs-9 text-gray-500 dark:text-gray-400">{c.daysLeft}</p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-zone4/15 px-2 py-0.5 fs-9 font-semibold text-zone4"><Icon name="hexagon" className="h-3 w-3" />{c.kind}</span>
        </div>
        <div className="mt-3 space-y-2.5">
          {RACE.map((value, index) => {
            const me = index === 1;
            return (
              <div key={index}>
                <div className="flex items-center gap-2 fs-11">
                  <span className={`num w-3 font-bold ${index === 0 ? "text-zone4" : "text-gray-400"}`}>{index + 1}</span>
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full fs-10 font-bold text-white ${me ? "bg-brand" : "bg-gray-400 dark:bg-gray-600"}`}>{names[index].charAt(0)}</span>
                  <span className={`min-w-0 flex-1 truncate ${me ? "font-bold" : "font-semibold"}`}>{names[index]}</span>
                  <span className="num shrink-0 font-bold">{n(value, 2)}<span className="fs-8 font-medium text-gray-500 dark:text-gray-400"> {u.km2}</span></span>
                </div>
                <div className="mt-1 ml-5 h-1.5 overflow-hidden rounded-full bg-ios-bg dark:bg-white/10">
                  <div className={`h-full rounded-full transition-[width] duration-1000 ease-out ${me ? "bg-brand" : "bg-zone4/70"}`}
                    style={{ width: active ? `${(value / top) * 100}%` : "0%", transitionDelay: `${index * 120}ms` }} />
                </div>
              </div>
            );
          })}
        </div>
      </MockCard>
      <div className="rounded-3xl bg-brand/10 px-3 py-2.5 dark:bg-brand/20">
        <p className="flex items-start gap-1.5 fs-10 leading-snug font-medium"><Icon name="users" className="mt-px h-3.5 w-3.5 shrink-0 text-brand dark:text-brand-light" />{c.note}</p>
      </div>
      <div className="mt-auto"><TabBar active={2} /></div>
    </MockScreen>
  );
}

/** Today: steps around the goal ring, distance, calories, heart rate, floors and the day's walks. */
export function TodayMock({ active = true }: { active?: boolean }) {
  const { t } = useLanguage();
  const m = t.home.mock.today;
  const u = t.home.units;
  const n = useNumber();
  const stats: { icon: IconName; tint: string; label: string; value: string; unit: string }[] = [
    { icon: "route", tint: "text-brand", label: m.distance, value: n(DAY.km, 1), unit: u.km },
    { icon: "flame", tint: "text-zone4", label: m.calories, value: n(DAY.kcal), unit: u.kcal },
    { icon: "heart", tint: "text-zone5", label: m.heartRate, value: n(DAY.bpm), unit: u.bpm },
    { icon: "stairs", tint: "text-zone3", label: m.floors, value: n(DAY.floors), unit: u.floors },
  ];
  const walks = [
    { km: 3.2, min: 38, watch: false },
    { km: 2.1, min: 26, watch: true },
  ];
  return (
    <MockScreen title={m.title} eyebrow={m.date}>
      <MockCard className="flex justify-center py-3">
        <GoalRing progress={DAY.steps / DAY.goal} active={active} className="h-36 w-36">
          <Icon name="walk" className="h-4 w-4 text-brand" />
          <span className="num fs-30 leading-none font-extrabold tracking-tight">{n(DAY.steps)}</span>
          <span className="mt-0.5 fs-9 font-medium text-gray-500 dark:text-gray-400">{m.goal.replace("{goal}", n(DAY.goal))}</span>
        </GoalRing>
      </MockCard>
      <div className="grid grid-cols-2 gap-2">
        {stats.map((stat) => (
          <MockCard key={stat.label} className="min-w-0 px-2.5 py-2">
            <p className="flex items-center gap-1 fs-9 font-medium text-gray-500 dark:text-gray-400">
              <Icon name={stat.icon} className={`h-3 w-3 shrink-0 ${stat.tint}`} />
              <span className="truncate">{stat.label}</span>
            </p>
            <p className="mt-0.5 truncate"><span className="num fs-17 font-bold">{stat.value}</span><span className="fs-9 font-medium text-gray-500 dark:text-gray-400"> {stat.unit}</span></p>
          </MockCard>
        ))}
      </div>
      <MockCard className="flex min-h-0 flex-1 flex-col px-3 py-2.5">
        <p className="fs-11 font-bold">{m.walks}</p>
        {walks.map((walk) => (
          <div key={walk.km} className="mt-2 flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Icon name="walk" className="h-3.5 w-3.5" /></span>
            <p className="min-w-0 flex-1">
              <span className="block fs-11 font-semibold">{m.walk}</span>
              <span className="block fs-9 text-gray-500 dark:text-gray-400">{n(walk.km, 1)} {u.km} · {walk.min} {u.min}</span>
            </p>
            {walk.watch && <span className="flex items-center gap-1 rounded-full bg-ios-bg px-1.5 py-0.5 fs-8 font-semibold text-gray-600 dark:bg-white/10 dark:text-gray-300"><Icon name="watch" className="h-2.5 w-2.5" />{m.watch}</span>}
          </div>
        ))}
      </MockCard>
      <TabBar active={1} />
    </MockScreen>
  );
}
