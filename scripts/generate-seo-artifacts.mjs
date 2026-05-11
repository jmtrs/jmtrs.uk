import { mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, "../dist");
const siteUrl = "https://jmtrs.uk";
const localizedPages = ["/en", "/es"];

mkdirSync(dist, { recursive: true });

const sitemapEntries = localizedPages
  .map((pathname) => {
    const alternateLinks = localizedPages
      .map((alternatePath) => {
        const hreflang = alternatePath === "/en" ? "en" : "es";
        return `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${siteUrl}${alternatePath}" />`;
      })
      .join("");

    return `<url><loc>${siteUrl}${pathname}</loc>${alternateLinks}<xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en" /></url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>
`;

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;

writeFileSync(resolve(dist, "sitemap-0.xml"), sitemap);
writeFileSync(resolve(dist, "sitemap-index.xml"), sitemapIndex);
