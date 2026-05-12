import { execFileSync } from "child_process";

function isGitWorktree() {
  try {
    const output = execFileSync("git", ["rev-parse", "--is-inside-work-tree"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    return output === "true";
  } catch {
    return false;
  }
}

if (!isGitWorktree()) {
  process.exit(0);
}

try {
  execFileSync("git", ["config", "--local", "core.hooksPath", ".githooks"], {
    stdio: "inherit",
  });
} catch {
  console.warn(
    "Skipping git hook installation: unable to update local git config.",
  );
}
