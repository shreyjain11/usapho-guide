/**
 * The site a referrer URL belongs to ("https://www.reddit.com"), or null for
 * none, an unparseable value, or a page of the Guide itself. Only the site is
 * kept: the path and query of the page someone came from can name a private
 * document, a class page or a search, and the reports only use the site.
 */
export function referringSite(referrer: string | null | undefined): string | null {
  if (!referrer) return null;
  try {
    const u = new URL(referrer);
    if (u.protocol !== "https:" && u.protocol !== "http:") return null;
    if (u.hostname === "usapho.one" || u.hostname.endsWith(".usapho.one")) return null;
    return u.origin.slice(0, 300);
  } catch {
    return null;
  }
}
