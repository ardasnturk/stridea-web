/**
 * Small "PRO" capsule, like the one in the app. Marks features that need the PRO plan.
 * `onBrand` is for blue backgrounds (e.g. a selected tab).
 */
export function ProBadge({ onBrand = false, className = "" }: { onBrand?: boolean; className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-1.5 py-[0.2em] align-middle text-[0.625rem] leading-none font-extrabold tracking-wide ${
      onBrand ? "bg-white/25 text-white" : "bg-gradient-to-br from-zone1 to-brand text-white"
    } ${className}`}>
      PRO
    </span>
  );
}
