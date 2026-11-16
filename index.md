# GraphQL-Markdown · mdBook Demo

This site is generated from a GraphQL schema using [graphql-markdown](https://github.com/graphql-markdown/graphql-markdown) with the **mdBook formatter preset**.

## What this demo shows

- Frontmatter is suppressed — mdBook renders `---` as literal content, so the formatter returns an empty string instead.
- Admonitions fall back to blockquote style (`> **NOTE**`) since mdBook has no native admonition syntax.
- Links keep the `.md` extension — mdBook resolves them natively.
- `SUMMARY.md` wires all generated pages into the mdBook navigation.

## Generation pipeline

1. `npm run generate` runs GraphQL-Markdown against the [shared demo schema](https://github.com/graphql-markdown/graphql-markdown/blob/main/tests/e2e/__data__/demo_schema.graphql), loaded from its URL.
2. Pages are written to `src/graphql/` using the mdBook formatter.
3. `src/SUMMARY.md` wires the generated pages into the mdBook navigation.
4. `mdbook serve` / `mdbook build` renders the final site.

## Key files

- `scripts/generate-docs.mjs` — runs GraphQL-Markdown.
- `src/SUMMARY.md` — mdBook navigation, listing the generated pages.
- `scripts/custom-mdbook-mdx.mjs` — wraps the mdBook formatter preset.
- `book.toml` — mdBook configuration.