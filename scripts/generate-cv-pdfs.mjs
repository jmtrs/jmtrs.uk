import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { copyFileSync, mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, "../dist");
const publicCv = resolve(__dirname, "../public/cv");

mkdirSync(publicCv, { recursive: true });

const browser = await chromium.launch();

for (const locale of ["en", "es"]) {
  const filename = `jose-miguel-torres-hernandez-cv-${locale}.pdf`;
  const page = await browser.newPage();
  await page.goto(`file://${dist}/cv/${locale}/index.html`);
  await page.pdf({
    path: `${dist}/cv/${filename}`,
    format: "A4",
    printBackground: true,
    tagged: true,
  });
  await page.close();
  copyFileSync(`${dist}/cv/${filename}`, `${publicCv}/${filename}`);
  console.log(`Generated CV PDF: ${locale}`);
}

await browser.close();
