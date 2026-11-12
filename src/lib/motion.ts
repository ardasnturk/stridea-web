import { useEffect, useRef, useState, type RefObject } from "react";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

/** True when the visitor asked the system for less motion. Updates live. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia(REDUCED_QUERY).matches);
  useEffect(() => {
    const query = window.matchMedia(REDUCED_QUERY);
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * Whether the element is on screen. With `once`, it stays true after the first time
 * (used for reveal-on-scroll); without it, it follows the element (used to pause loops).
 */
export function useInView<T extends Element>(
  options: { once?: boolean; rootMargin?: string; threshold?: number } = {},
): [RefObject<T | null>, boolean] {
  const { once = false, rootMargin = "0px 0px -10% 0px", threshold = 0.15 } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);
  return [ref, inView];
}

/**
 * Sets `--parallax` on the element: -1 when its center is a viewport below the
 * viewport center, 0 when centered, 1 a viewport above. CSS turns it into a small
 * translate. Does nothing with reduced motion.
 */
export function useParallax<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) {
      element?.style.setProperty("--parallax", "0");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewport = window.innerHeight || 1;
      const value = Math.max(-1.5, Math.min(1.5, (viewport / 2 - center) / viewport));
      element.style.setProperty("--parallax", value.toFixed(3));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);
  return ref;
}

/** Counts from `from` to `to` once `start` is true (ease-out, ~1.4 s). Jumps straight to `to` with reduced motion. */
export function useCountUp(to: number, start: boolean, from = 0, duration = 1400): number {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : from);
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let frame = 0;
    const began = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, from, start, reduced, duration]);
  return value;
}

/**
 * A looping step counter for the demos: advances through `durations` (ms per step)
 * while `active`. With reduced motion it rests on `restStep` and never advances.
 */
export function useStepLoop(durations: number[], active: boolean, restStep: number): number {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced) {
      setStep(restStep);
      return;
    }
    if (!active) return;
    const timer = window.setTimeout(() => setStep((current) => (current + 1) % durations.length), durations[step]);
    return () => window.clearTimeout(timer);
  }, [step, active, reduced, restStep, durations]);
  return reduced ? restStep : step;
}
