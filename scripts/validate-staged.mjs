import { execFileSync } from "child_process";

const stagedOutput = execFileSync(
  "git",
  ["diff", "--cached", "--name-only", "--diff-filter=ACMR"],
  { encoding: "utf8" },
);

const stagedFiles = stagedOutput
  .split("\n")
  .map((file) => file.trim())
  .filter(Boolean);

if (stagedFiles.length === 0) {
  console.log("No staged files to validate.");
  process.exit(0);
}

execFileSync(
  "pnpm",
  ["exec", "prettier", "--check", "--ignore-unknown", ...stagedFiles],
  {
    stdio: "inherit",
  },
);

const requiresTypecheck = stagedFiles.some((file) =>
  /^(astro\.config\.mjs|package\.json|tsconfig\.json|src\/(components|content|layouts|pages|scripts)\/)/.test(
    file,
  ),
);

if (!requiresTypecheck) {
  process.exit(0);
}

execFileSync("pnpm", ["typecheck"], {
  stdio: "inherit",
});
