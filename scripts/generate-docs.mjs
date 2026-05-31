import { rmSync } from "node:fs";
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
    schema: "./schema.graphql",
    rootPath: "./src",
    baseURL: "graphql",
    homepage: "./index.md",
    formatter,
    loaders: {
      GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
    },
    pretty: true,
    force: true,
    docOptions: {
      sectionHeaderId: false,
    },
  },
  {},
);
