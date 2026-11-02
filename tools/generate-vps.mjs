import { spawnSync } from "node:child_process";

const result = spawnSync(
  process.execPath,
  ["node_modules/nuxt/bin/nuxt.mjs", "generate"],
  {
    cwd: process.cwd(),
    stdio: "inherit",
    env: {
      ...process.env,
      NUXT_APP_BASE_URL: "/",
      NUXT_BUILD_OUTPUT_DIR: ".output-vps",
    },
  },
);

if (result.error) throw result.error;
process.exit(result.status ?? 1);
