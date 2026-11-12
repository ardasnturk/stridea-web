import { APP_NAME, DEVELOPER, SUPPORT_EMAIL } from "../config";
import { AppStoreButton } from "./AppStoreButton";
import { useLanguage } from "../i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brand/10 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/assets/icon.png" alt="" className="h-8 w-8 rounded-[0.6rem]" />
            <span className="text-lg font-bold">{APP_NAME}</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">{t.footer.tagline}</p>
          <div className="mt-6">
            <AppStoreButton />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.footer.product}</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-brand" href="/#features">{t.nav.features}</a></li>
            <li><a className="hover:text-brand" href="/#walks">{t.nav.walks}</a></li>
            <li><a className="hover:text-brand" href="/#trends">{t.nav.trends}</a></li>
            <li><a className="hover:text-brand" href="/#pro">{t.nav.pro}</a></li>
            <li><a className="hover:text-brand" href="/#faq">{t.nav.faq}</a></li>
            <li><a className="hover:text-brand" href="/support/">{t.footer.support}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.footer.legal}</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-brand" href="/privacy/">{t.footer.privacy}</a></li>
            <li><a className="hover:text-brand" href="/terms/">{t.footer.terms}</a></li>
            <li><a className="break-all hover:text-brand" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand/10 px-4 py-6 text-center text-xs text-gray-500 dark:border-white/10">
        © {year} {DEVELOPER}. {t.footer.rights} {t.footer.trademarks}
      </div>
    </footer>
  );
}
