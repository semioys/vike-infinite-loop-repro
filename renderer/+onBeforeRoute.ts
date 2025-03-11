import { OnBeforeRouteSync, PageContext } from 'vike/types';

export { onBeforeRoute }

const onBeforeRoute = (pageContext: PageContext): ReturnType<OnBeforeRouteSync> | undefined => {
  if (typeof window === 'undefined') {
    const { urlOriginal, cookies } = pageContext;
    const lang = getLanguageFromUrl(urlOriginal);
    const urlWithoutLocale = urlOriginal.replace(`/${lang}/`, '/');

    return {
      pageContext: {
        lang: lang || 'en',
        langCookie: cookies?.language,
        urlLogical: urlWithoutLocale,
      },
    };
  }
};

const getLanguageFromUrl = (url: string) => {
    const match = url.match(/^\/([a-z]{2})\//);
    return match ? match[1] : '';
  };