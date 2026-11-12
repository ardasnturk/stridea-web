import { AppStoreButton } from "../../components/AppStoreButton";
import { Icon } from "../../components/Icon";
import { PhoneFrame, Screen } from "../../components/PhoneFrame";
import { APP_NAME } from "../../config";
import { useLanguage } from "../../i18n";
import { useParallax } from "../../lib/motion";
import { TodayMock } from "./mocks";

export function Hero() {
  const { t } = useLanguage();
  const h = t.home.hero;
  const scene = useParallax<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Soft blue glow, slowly drifting. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl dark:bg-brand/25" />
        <div className="animate-blob absolute top-40 -right-32 h-[26rem] w-[26rem] rounded-full bg-zone1/25 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute top-72 -left-40 h-[22rem] w-[22rem] rounded-full bg-zone2/15 blur-3xl [animation-delay:-12s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,99,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,99,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="hero-in inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-brand shadow-card backdrop-blur dark:bg-white/5 dark:text-brand-light dark:shadow-none dark:ring-1 dark:ring-brand/30">
            <Icon name="heart" className="h-4 w-4 text-zone5" />
            {h.eyebrow}
          </p>
          <h1 className="hero-in mt-6 text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]" style={{ animationDelay: "80ms" }}>
            {h.title}{" "}
            <span className="bg-gradient-to-r from-brand via-zone1 to-zone2 bg-clip-text text-transparent">{h.highlight}</span>
          </h1>
          <p className="hero-in mx-auto mt-6 max-w-xl text-lg text-pretty text-gray-600 lg:mx-0 dark:text-gray-300" style={{ animationDelay: "160ms" }}>{h.subtitle}</p>
          <div className="hero-in mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start" style={{ animationDelay: "240ms" }}>
            <AppStoreButton />
            <a href="#walks" className="group inline-flex items-center gap-2 rounded-2xl px-4 py-3 font-semibold text-gray-700 transition hover:text-brand dark:text-gray-200">
              {h.secondary}
              <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
          <ul className="hero-in mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-600 lg:justify-start dark:text-gray-400" style={{ animationDelay: "320ms" }}>
            {h.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-good" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div ref={scene} className="relative mx-auto w-full max-w-[17rem] sm:max-w-[19rem]">
          <div aria-hidden="true" className="absolute -inset-12 -z-10 rounded-full bg-gradient-to-tr from-brand/30 to-zone1/25 blur-3xl" />
          <div className="parallax-slow">
            <div className="hero-in" style={{ animationDelay: "200ms" }}>
              <PhoneFrame>
                <Screen slot="today" alt={h.screenshotAlt} eager fallback={<TodayMock />} />
              </PhoneFrame>
            </div>
          </div>

          {/* Floating cards: what the app tells you around the Today screen. */}
          <div className="parallax-fast pointer-events-none absolute top-[15%] hidden sm:-left-28 sm:block lg:-left-16 xl:-left-28" aria-hidden="true">
            <div className="hero-in animate-float" style={{ animationDelay: "500ms" }}>
              <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 text-sm shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-900/90 dark:ring-white/10">
                <Icon name="target" className="h-4 w-4 text-brand" />
                <span className="font-semibold whitespace-nowrap">{h.chipGoal}</span>
              </div>
            </div>
          </div>
          <div className="parallax-fast pointer-events-none absolute -right-6 top-[67%] w-52 sm:-right-24 sm:w-60 lg:-right-10 xl:-right-24" aria-hidden="true">
            <div className="hero-in animate-float [animation-duration:7s]" style={{ animationDelay: "700ms" }}>
              <div className="rounded-2xl bg-white/95 p-3 text-left shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-900/90 dark:ring-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <img src="/assets/icon.png" alt="" className="h-4 w-4 rounded-[0.3rem]" />
                  <span className="font-semibold tracking-wide uppercase">{APP_NAME}</span>
                </div>
                <p className="mt-1 text-sm font-semibold">{h.chipWalkTitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{h.chipWalkBody}</p>
              </div>
            </div>
          </div>
          <div className="parallax-fast pointer-events-none absolute top-[45%] hidden sm:-left-40 sm:block lg:-left-20 xl:-left-40" aria-hidden="true">
            <div className="hero-in animate-float [animation-duration:8s]" style={{ animationDelay: "900ms" }}>
              <div className="flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 text-sm shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-900/90 dark:ring-white/10">
                <Icon name="flame" className="h-4 w-4 text-zone4" />
                <span className="font-semibold whitespace-nowrap">{h.chipStreak}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
