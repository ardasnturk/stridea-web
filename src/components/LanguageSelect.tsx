import { LANGUAGES, LANGUAGE_NAMES, useLanguage, type Language } from "../i18n";
import { Icon } from "./Icon";

export function LanguageSelect({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{t.nav.language}</span>
      <Icon name="globe" className="pointer-events-none absolute left-2.5 h-4 w-4 opacity-70" />
      <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}
        className="appearance-none rounded-full border border-ink/15 bg-transparent py-1.5 pl-8 pr-8 text-sm font-medium hover:border-ink/30 dark:border-gray-700 dark:hover:border-gray-600">
        {LANGUAGES.map((code) => (
          <option key={code} value={code} className="text-gray-900">{LANGUAGE_NAMES[code]}</option>
        ))}
      </select>
      <Icon name="chevron" className="pointer-events-none absolute right-2.5 h-4 w-4 opacity-70" />
    </label>
  );
}
