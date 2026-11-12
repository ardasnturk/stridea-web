import { Icon } from "../components/Icon";
import { useLanguage, type LegalSection } from "../i18n";

const LINK = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;

/** Turns URLs and e-mail addresses in plain text into links. */
function linkify(text: string) {
  return text.split(LINK).map((part, index) => {
    if (index % 2 === 0) return part;
    const href = part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part;
    return <a key={index} href={href} className="text-brand hover:underline break-all">{part}</a>;
  });
}

export function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const { t } = useLanguage();
  const title = kind === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle;
  const intro = kind === "privacy" ? t.legal.privacyIntro : t.legal.termsIntro;
  const sections: LegalSection[] = kind === "privacy" ? t.legal.privacySections : t.legal.termsSections;
  return (
    <article className="mx-auto max-w-3xl px-4 pt-28 pb-24 sm:px-6">
      <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand">
        <Icon name="arrowLeft" className="h-4 w-4" />
        {t.legal.back}
      </a>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-gray-500">{t.legal.updated}</p>
      <p className="mt-8 text-lg text-gray-700 dark:text-gray-300">{linkify(intro)}</p>
      {sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{linkify(paragraph)}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
