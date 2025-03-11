import { redirect } from "vike/abort";
import { OnBeforeRenderAsync, PageContext } from "vike/types";

export { onBeforeRender };

const onBeforeRender = async (pageContext: PageContext): ReturnType<OnBeforeRenderAsync> => {
    if (typeof window === 'undefined') {
      const { langCookie, lang, urlLogical } = pageContext;
    
      // If user's cookie language is different from URL language
      if (langCookie && langCookie !== lang) {
          const redirectLang = langCookie === 'en' ? '' : `/${langCookie}`;
          throw redirect(`${redirectLang}${urlLogical}`, 302);
      }
    }
  };
  