import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, "../dist");

const browser = await chromium.launch();

for (const locale of ["en", "es"]) {
  const page = await browser.newPage();
  await page.goto(`file://${dist}/cv/${locale}/index.html`);
  await page.pdf({
    path: `${dist}/cv/jose-miguel-torres-hernandez-cv-${locale}.pdf`,
    format: "A4",
    printBackground: true,
  });
  await page.close();
  console.log(`Generated CV PDF: ${locale}`);
}

await browser.close();
