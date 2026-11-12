import { useEffect } from "react";
import { APP_NAME } from "./config";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider, useLanguage } from "./i18n";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Support } from "./pages/Support";

export type Page = "home" | "privacy" | "terms" | "support";

function Content({ page }: { page: Page }) {
  const { t } = useLanguage();

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: t.meta.title,
      privacy: `${t.legal.privacyTitle} – ${APP_NAME}`,
      terms: `${t.legal.termsTitle} – ${APP_NAME}`,
      support: `${t.support.title} – ${APP_NAME}`,
    };
    document.title = titles[page];
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [page, t]);

  return (
    <div className="min-h-screen overflow-x-clip">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        {t.nav.skip}
      </a>
      <Header />
      <main id="main">
        {page === "home" && <Home />}
        {page === "privacy" && <Legal kind="privacy" />}
        {page === "terms" && <Legal kind="terms" />}
        {page === "support" && <Support />}
      </main>
      <Footer />
    </div>
  );
}

export default function App({ page }: { page: Page }) {
  return (
    <LanguageProvider>
      <Content page={page} />
    </LanguageProvider>
  );
}
