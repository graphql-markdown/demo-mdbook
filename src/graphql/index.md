# GraphQL-Markdown · mdBook Demo

This site is generated from a GraphQL schema using [graphql-markdown](https://github.com/graphql-markdown/graphql-markdown) with the **mdBook formatter preset**.

## What this demo shows

- Frontmatter is suppressed — mdBook renders `---` as literal content, so the formatter returns an empty string instead.
- Admonitions fall back to blockquote style (`> **NOTE**`) since mdBook has no native admonition syntax.
- Links keep the `.md` extension — mdBook resolves them natively.
- A `SUMMARY.md` is built after generation to wire all pages into the mdBook navigation.

## Generation pipeline

1. `npm run generate` runs GraphQL-Markdown against `schema.graphql`.
2. Pages are written to `src/graphql/` using the mdBook formatter.
3. `src/SUMMARY.md` is rebuilt by scanning the output directory.
4. `mdbook serve` / `mdbook build` renders the final site.

## Key files

- `scripts/generate-docs.mjs` — runs GraphQL-Markdown and rebuilds `SUMMARY.md`.
- `scripts/custom-mdbook-mdx.mjs` — wraps the mdBook formatter preset.
- `schema.graphql` — source GraphQL schema (countries API).
- `book.toml` — mdBook configuration.
