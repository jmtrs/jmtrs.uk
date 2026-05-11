import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig(({ command }) => {
  const isDev = command === "dev";
  const usePolling = process.env.ASTRO_USE_POLLING === "1";

  return {
    site: "https://jmtrs.uk",
    integrations: [sitemap()],
    build: {
      format: "directory",
    },
    redirects: {
      "/": "/en",
    },
    server: {
      host: "127.0.0.1",
      port: 4321,
      headers: isDev
        ? {
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          }
        : undefined,
    },
    vite: {
      server: {
        hmr: isDev
          ? {
              host: "127.0.0.1",
              clientPort: 4321,
            }
          : undefined,
        watch: usePolling
          ? {
              usePolling: true,
              interval: 100,
            }
          : undefined,
      },
    },
  };
});
