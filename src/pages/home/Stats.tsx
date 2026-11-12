import { APP_NAME } from "../../config";
import { useLanguage } from "../../i18n";
import { useCountUp, useInView } from "../../lib/motion";

function Stat({ value, prefix = "", suffix = "", label, start, delay }: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  // Zeros count down from 50 — "nothing" is the point.
  const shown = useCountUp(value, start, value === 0 ? 50 : 0, 1400 + delay);
  return (
    <div className="text-center">
      <p className="num text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">
        <span className="bg-gradient-to-b from-brand to-zone1 bg-clip-text text-transparent dark:from-white dark:to-brand-light">
          {prefix}{shown}{suffix}
        </span>
      </p>
      <p className="mx-auto mt-2 max-w-[13rem] text-sm text-gray-600 text-balance dark:text-gray-400">{label}</p>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.2 });
  return (
    <section aria-label={APP_NAME} className="border-y border-brand/10 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        {t.home.stats.map((stat, index) => (
          <Stat key={stat.label} {...stat} start={inView} delay={index * 150} />
        ))}
      </div>
    </section>
  );
}
