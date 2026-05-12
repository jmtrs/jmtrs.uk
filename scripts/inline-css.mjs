import { readFileSync, writeFileSync, readdirSync, statSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(fileURLToPath(import.meta.url), "../../dist");
const inlinedCSSFiles = new Set();

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (entry.endsWith(".html")) {
      let html = readFileSync(full, "utf8");
      let changed = false;
      html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (match, href) => {
        try {
          const css = readFileSync(join(dist, href), "utf8");
          changed = true;
          inlinedCSSFiles.add(href);
          return `<style>${css}</style>`;
        } catch {
          return match;
        }
      });
      if (changed) writeFileSync(full, html);
    }
  }
}

walk(dist);

for (const href of inlinedCSSFiles) {
  rmSync(join(dist, href));
}

console.log(`CSS inlined and ${inlinedCSSFiles.size} file(s) removed from dist.`);
