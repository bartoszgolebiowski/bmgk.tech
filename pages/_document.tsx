import * as React from "react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Next.js built-in i18n routing prefixes the URL with the locale. Fall
    // back to the request context for direct server-side calls.
    const path = (ctx.asPath || "/").split("?")[0];
    const pathLocale = path.match(/^\/(en|pl)(?:\/|$)/);
    const queryLocale = ctx.query && ctx.query.lng;
    const requestLocale =
      (ctx.req as { i18n?: { language?: string } } | undefined)?.i18n
        ?.language || "";
    const contextLocale = (ctx as { locale?: string }).locale || "";
    const candidates = [
      contextLocale,
      requestLocale,
      Array.isArray(queryLocale) ? queryLocale[0] : queryLocale,
      pathLocale ? pathLocale[1] : "",
    ];
    const locale =
      candidates.find((value) => value === "en" || value === "pl") || "en";

    return { ...initialProps, locale };
  }

  render() {
    const locale = (this.props as { locale?: string }).locale || "en";

    return (
      <Html lang={locale}>
        <Head>
          <meta name="theme-color" content="#2e7d32" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
