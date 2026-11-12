import { Icon } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { APP_NAME } from "../../config";
import { useLanguage, useNumber } from "../../i18n";
import { useCountUp, useInView, useStepLoop } from "../../lib/motion";
import { MapArt } from "./mocks";
import { SectionHeading } from "./shared";

/** Demo phases: ready to start, recording, saved. Milliseconds each. */
const PHASES = [2200, 5600, 3600];
const RECORDING_MS = 5000;
const WALK = { km: 3.2, steps: 4180, minutes: 38 };

export function Walk() {
  const { t } = useLanguage();
  const w = t.home.walk;
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 });
  const phase = useStepLoop(PHASES, inView, 2);

  return (
    <section id="walks" className="scroll-mt-20 border-y border-brand/10 bg-white/60 py-24 sm:py-32 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={w.eyebrow} title={w.title} text={w.subtitle} align="left" />
          <ol className="mt-10 space-y-3">
            {w.steps.map((step, index) => {
              const current = phase === index;
              return (
                <Reveal as="li" key={step.title} delay={index * 90}
                  className={`flex gap-4 rounded-3xl p-4 transition-colors duration-500 ${current ? "bg-white shadow-card dark:bg-white/[0.06] dark:shadow-none" : ""}`}>
                  <span className={`num flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500 ${current ? "bg-brand text-white" : "bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light"}`}>
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-semibold">{step.title}</span>
                    <span className="mt-1 block text-gray-600 dark:text-gray-400">{step.text}</span>
                  </span>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal variant="scale">
          <div ref={ref} className="relative mx-auto w-full max-w-md" aria-hidden="true">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-brand/25 to-zone2/20 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-blue-950/15 ring-1 ring-black/5 dark:bg-night dark:ring-white/10">
              <MapArt drawn={phase >= 1} duration={RECORDING_MS} viewBox="0 85 300 375" className="absolute inset-0 h-full w-full" />

              {/* Recording pill */}
              <div className={`absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold shadow-card transition-all duration-500 dark:bg-gray-900/95 ${phase === 1 ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}>
                <span className="h-2 w-2 animate-pulse rounded-full bg-zone5" />
                {w.recording}
              </div>

              {/* Saved notification */}
              <div className={`absolute inset-x-4 top-4 rounded-2xl bg-white/95 p-3.5 shadow-xl ring-1 ring-black/5 backdrop-blur transition-all duration-700 ease-[cubic-bezier(.34,1.4,.5,1)] dark:bg-gray-900/95 dark:ring-white/10 ${phase === 2 ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <img src="/assets/icon.png" alt="" className="h-4 w-4 rounded-[0.3rem]" />
                  <span className="font-semibold tracking-wide uppercase">{APP_NAME}</span>
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold">
                  <Icon name="heart" className="h-4 w-4 text-zone5" />{w.savedTitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{w.savedBody}</p>
              </div>

              {/* Live stats / start button */}
              <div className="absolute inset-x-3 bottom-3 rounded-3xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-900/95 dark:ring-white/10">
                {phase === 0 ? (
                  <div className="flex h-[4.25rem] items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/40">
                      <Icon name="walk" className="h-5 w-5" />{w.start}
                    </span>
                  </div>
                ) : (
                  <LiveStats />
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Mounted when recording starts, so the counters run from zero on every loop. */
function LiveStats() {
  const { t } = useLanguage();
  const m = t.home.mock.walk;
  const u = t.home.units;
  const n = useNumber();
  const meters = useCountUp(WALK.km * 1000, true, 0, RECORDING_MS);
  const steps = useCountUp(WALK.steps, true, 0, RECORDING_MS);
  const seconds = useCountUp(WALK.minutes * 60, true, 0, RECORDING_MS);
  const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const cells = [
    { label: m.duration, value: time, unit: "" },
    { label: m.distance, value: n(meters / 1000, 2), unit: u.km },
    { label: m.steps, value: n(steps), unit: "" },
  ];
  return (
    <div className="grid h-[4.25rem] grid-cols-3 items-center gap-2 text-center">
      {cells.map((cell) => (
        <div key={cell.label} className="min-w-0">
          <p className="truncate text-xs font-medium text-gray-500 dark:text-gray-400">{cell.label}</p>
          <p className="truncate">
            <span className="num text-xl font-bold sm:text-2xl">{cell.value}</span>
            {cell.unit && <span className="text-xs text-gray-500 dark:text-gray-400"> {cell.unit}</span>}
          </p>
        </div>
      ))}
    </div>
  );
}
