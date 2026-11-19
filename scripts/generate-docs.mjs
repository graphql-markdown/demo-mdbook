import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { runGraphQLMarkdown } from "@graphql-markdown/cli";

// Resolve from the demo's own node_modules so the formatter is reachable
// when the core package performs a dynamic import of the formatter module.
const { createRequire } = await import("node:module");
const require = createRequire(import.meta.url);
const formatter = pathToFileURL(
  require.resolve("@graphql-markdown/formatters/mdbook"),
).href;

rmSync(resolve("./src/graphql"), { force: true, recursive: true });

await runGraphQLMarkdown(
  {
    schema: "https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql",
    rootPath: "./src",
    baseURL: "graphql",
    homepage: "./index.md",
    formatter,
    loaders: {
      UrlLoader: "@graphql-tools/url-loader",
    },
    pretty: true,
    force: true,
    telemetry: false,
    docOptions: {
      sectionHeaderId: false,
    },
  },
  {},
);

// The formatter lists entries in schema order; sort the children of every
// sidebar section by name (e.g. `folder` before `folders`).
const summaryPath = resolve("./src/SUMMARY.md");
const lines = readFileSync(summaryPath, "utf8").split("\n");
const sorted = [];
for (let i = 0; i < lines.length; ) {
  if (!lines[i].startsWith("  - [")) {
    sorted.push(lines[i++]);
    continue;
  }
  const group = [];
  while (i < lines.length && lines[i].startsWith("  - [")) {
    group.push(lines[i++]);
  }
  const name = (line) => line.match(/^ {2}- \[([^\]]*)\]/)[1];
  group.sort((a, b) => name(a).localeCompare(name(b)));
  sorted.push(...group);
}
writeFileSync(summaryPath, sorted.join("\n"));
