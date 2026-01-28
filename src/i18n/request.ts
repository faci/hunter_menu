import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./i18n";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale =
    locale && locales.includes(locale as any)
      ? locale
      : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../app/messages/${safeLocale}.json`)).default
  };
});
