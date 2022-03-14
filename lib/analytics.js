export const GOOGLE_ANALYTICS_KEY = process.env.GOOGLE_ANALYTICS_KEY;

export const handleRouteChange = (url) => {
  if (window && window.gtag) {
    window.gtag("config", GOOGLE_ANALYTICS_KEY, {
      page_path: url,
    });
  }
};