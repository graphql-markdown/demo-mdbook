# GraphQL-Markdown + mdBook demo

This project demonstrates how to generate GraphQL documentation with GraphQL-Markdown for an mdBook site.

**Live demo:** [graphql-markdown.dev/demo-mdbook](https://graphql-markdown.dev/demo-mdbook/)

## Quick start

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000/` and use the GraphQL API entry in the navigation.

## Project structure

```text
.
├── src/
│   ├── graphql/                # Generated GraphQL documentation
│   ├── introduction.md         # Demo home page
│   └── SUMMARY.md              # mdBook table of contents
├── scripts/
│   ├── custom-mdbook-mdx.mjs   # Wrapper that extends the mdBook preset
│   └── generate-docs.mjs       # GraphQL-Markdown runner
├── theme/
│   └── github-dark-dimmed.min.css  # Custom dark theme
├── book.toml                   # mdBook configuration
└── package.json
```

## Notes

- The preset `@graphql-markdown/formatters/mdbook` provides mdBook-compatible Markdown output.
- The demo wrapper in `scripts/custom-mdbook-mdx.mjs` extends the preset with project-specific behavior.
- `src/SUMMARY.md` lists the generated pages; update it when the schema adds or removes types.
- The documented schema is the [shared demo schema](https://github.com/graphql-markdown/graphql-markdown/blob/main/tests/e2e/__data__/demo_schema.graphql) used by all GraphQL-Markdown demos, loaded from its raw URL at generation time.
