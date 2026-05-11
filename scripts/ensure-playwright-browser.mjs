import { existsSync } from "fs";
import { execFileSync } from "child_process";
import { chromium } from "playwright";

const executablePath = chromium.executablePath();

if (existsSync(executablePath)) {
  process.exit(0);
}

console.log("Playwright Chromium missing, installing browser binary...");
execFileSync("pnpm", ["exec", "playwright", "install", "chromium"], {
  stdio: "inherit",
});
