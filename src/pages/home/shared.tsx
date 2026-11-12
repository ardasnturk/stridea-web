import type { ReactNode } from "react";
import { Icon, type IconName } from "../../components/Icon";
import { ProBadge } from "../../components/ProBadge";
import { Reveal } from "../../components/Reveal";

export function SectionHeading({ eyebrow, title, text, align = "center" }: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand dark:text-brand-light">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-pretty text-gray-600 dark:text-gray-400">{text}</p>}
    </Reveal>
  );
}

/** A white card of the landing page's bento grids, like the app's cards. */
export function Tile({ icon, title, text, pro = false, children, className = "" }: {
  icon: IconName;
  title: string;
  text: string;
  /** Shows the PRO badge next to the title. */
  pro?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 dark:bg-white/[0.04] dark:shadow-none dark:ring-1 dark:ring-white/10 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand dark:bg-brand/20 dark:text-brand-light">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-xl font-bold tracking-tight">{title}{pro && <ProBadge className="ml-2 -translate-y-0.5" />}</h3>
      <p className="mt-2 text-pretty text-gray-600 dark:text-gray-400">{text}</p>
      {children && <div className="mt-6 flex flex-1 flex-col justify-end">{children}</div>}
    </article>
  );
}
