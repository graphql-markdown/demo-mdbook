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
│   ├── introduction.md         # Landing page (hero, schema preview, highlights)
│   └── SUMMARY.md              # mdBook table of contents
├── scripts/
│   ├── custom-mdbook-mdx.mjs   # Wrapper that extends the mdBook preset
│   └── generate-docs.mjs       # GraphQL-Markdown runner
├── theme/
│   ├── demo.css                # Violet/zinc polish for generated pages + landing page
│   ├── inline-code.css         # Inline code fix for the dark highlight theme
│   ├── footer.js               # GraphQL-Markdown footer link-back
│   └── github-dark-dimmed.min.css  # Custom dark theme
├── tests/visual/site.spec.ts   # Playwright + Argos screenshots
├── playwright.config.ts        # Desktop + mobile projects, serves ./book on 4173
├── .github/workflows/visual.yml  # Visual tests in CI
├── book.toml                   # mdBook configuration
└── package.json
```

## Visual tests

Screenshots of the landing page and one page per GraphQL type kind (light and dark, desktop and mobile) are captured with Playwright and uploaded to [Argos](https://argos-ci.com) in CI.

```bash
npm run build
npx playwright install chromium
npm run test:visual
```

## Notes


- `theme/demo.css` styles the generated pages with mdBook's theme variables (light/rust and coal/navy/ayu) and the landing page in `src/introduction.md`.
- The preset `@graphql-markdown/formatters/mdbook` provides mdBook-compatible Markdown output.
- The demo wrapper in `scripts/custom-mdbook-mdx.mjs` extends the preset with project-specific behavior.
- `src/SUMMARY.md` lists the generated pages; update it when the schema adds or removes types.
- The documented schema is the [shared demo schema](https://github.com/graphql-markdown/graphql-markdown/blob/main/tests/e2e/__data__/demo_schema.graphql) used by all GraphQL-Markdown demos, loaded from its raw URL at generation time.
