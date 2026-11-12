// Stroke icons (24×24, 2px), drawn in the style of SF Symbols.
const PATHS = {
  walk: "M13.5 5.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM7 22l2.5-6.5M9.5 15.5 8.5 10l4-2 2.5 4 3.5 1.5M12.5 8 8.5 10l-1.5 3.5M11.5 13.5l3 3 1 5.5",
  heart: "M12 20.5S4 15.6 4 9.8A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 8 2.2c0 5.8-8 10.7-8 10.7Z",
  pulse: "M2 12h4.5l2.5-7 4.5 14 2.5-7H22",
  flame: "M12 2.5c.6 3.4 5.5 5.6 5.5 11a5.5 5.5 0 0 1-11 0c0-1.9.8-3.3 1.8-4.4.5 1.3 1.2 2 2.2 2.4C10 8.5 10.5 5.5 12 2.5Z",
  stairs: "M3 20h4.5v-4.5H12V11h4.5V6.5H21",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  route: "M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 18h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16",
  pause: "M9 5v14M15 5v14",
  bars: "M5 20v-6M10 20V9M15 20v-8M20 20V4",
  ruler: "M3.5 15.5 15.5 3.5l5 5L8.5 20.5l-5-5ZM7.5 11.5l2 2M10.5 8.5l2 2M13.5 5.5l2 2",
  balance: "M12 4v16M8 20h8M5 7h14M5 7l-2.5 6a2.7 2.7 0 0 0 5 0L5 7ZM19 7l-2.5 6a2.7 2.7 0 0 0 5 0L19 7Z",
  feet: "M7 4v9M7 13a3 3 0 0 0 3 3M17 4v9M17 13a3 3 0 0 1-3 3M4 20h16",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  chart: "M3 3v18h18M7 15l4-4 3 3 5-6",
  gauge: "M12 21a9 9 0 1 1 9-9M12 12l4-4M3 12h2M12 3v2M19 12h2",
  calendar: "M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM4 10h16M8 3v4M16 3v4",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",
  check: "m5 12 5 5L20 7",
  phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM11 18h2",
  sparkles: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z",
  person: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
  megaphone: "M4 10v4a1 1 0 0 0 1 1h3l8 4V5L8 9H5a1 1 0 0 0-1 1ZM19 9.5a4 4 0 0 1 0 5M9 15v4",
  pin: "M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  watch: "M8 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7ZM9.5 5l.5-3h4l.5 3M9.5 19l.5 3h4l.5-3M12 10v2.5l1.5 1",
  repeat: "m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3",
  chevron: "m6 9 6 6 6-6",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3 7l9 6 9-6",
  arrowLeft: "M19 12H5M12 19l-7-7 7-7",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  server: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
  gift: "M4 11h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9ZM3 7h18v4H3zM12 7v14M12 7S10.5 3 8 3a2 2 0 0 0 0 4h4ZM12 7s1.5-4 4-4a2 2 0 0 1 0 4h-4Z",
  car: "M3 16v-3.5l2-5.5h14l2 5.5V16H3ZM3.5 12h17M6 16v2.5M18 16v2.5M7 14h.01M17 14h.01",
  chair: "M7 3v10h10M7 13v8M17 13v8M5 13h14",
  trendUp: "M3 17l6-6 4 4 8-8M15 7h6v6",
  lock: "M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1ZM8 11V7a4 4 0 0 1 8 0v4",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
