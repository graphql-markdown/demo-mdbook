# GraphQL-Markdown + mdBook demo

This project demonstrates how to generate GraphQL documentation with GraphQL-Markdown for an mdBook site.

**Live demo:** [edno.github.io/demo-mdbook](https://edno.github.io/demo-mdbook/)

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
├── schema.graphql              # Sample GraphQL schema
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
- The `src/SUMMARY.md` is updated automatically by the generator to include generated pages.
