import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../lib/motion";

type Variant = "up" | "scale" | "left" | "right";

/** Fades and slides its content in the first time it scrolls into view. */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: Variant;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLElement>({ once: true });
  return (
    <Tag
      ref={ref}
      data-variant={variant === "up" ? undefined : variant}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
