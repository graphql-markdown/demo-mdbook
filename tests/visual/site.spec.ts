import { expect, test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

// mdBook renders one static page per type; the page content is the `main`
// element. One page per GraphQL type kind the formatter renders differently.
const pages = [
  ["object", "/graphql/types/objects/project.html", "Project"],
  ["enum", "/graphql/types/enums/project-status.html", "ProjectStatus"],
  ["interface", "/graphql/types/interfaces/node.html", "Node"],
  ["union", "/graphql/types/unions/search-result.html", "SearchResult"],
  ["input", "/graphql/types/inputs/create-project-input.html", "CreateProjectInput"],
  ["scalar", "/graphql/types/scalars/date-time.html", "DateTime"],
  ["query", "/graphql/operations/queries/projects.html", "projects"],
  ["mutation", "/graphql/operations/mutations/create-project.html", "createProject"],
  ["subscription", "/graphql/operations/subscriptions/project-changed.html", "projectChanged"],
  ["directive", "/graphql/types/directives/deprecated.html", "deprecated"],
] as const;

// Element screenshots are stitched while scrolling, so the fixed/sticky chrome
// (menu bar, sidebar, prev/next arrows, footer) would be painted over the
// content. Hide it for those shots.
const hideChrome = [
  "#mdbook-menu-bar, .menu-bar, #mdbook-sidebar, #sidebar, .nav-chapters,",
  ".mobile-nav-chapters, .gqlmd-footer { display: none !important; }",
].join("\n");

test("home", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("main h1")).toHaveText("Your API, mapped with intent.");
  await argosScreenshot(page, "home");
});

for (const [kind, url, title] of pages) {
  test(`page: ${kind}`, async ({ page }) => {
    const response = await page.goto(url);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1").first()).toHaveText(title);
    await argosScreenshot(page, `page-${kind}`, {
      element: page.locator("main"),
      argosCSS: hideChrome,
    });
  });
}

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("home", async ({ page }) => {
    await page.goto("/");
    await argosScreenshot(page, "home-dark");
  });

  test("page: object", async ({ page }) => {
    const response = await page.goto("/graphql/types/objects/project.html");
    expect(response?.status()).toBe(200);
    await argosScreenshot(page, "page-object-dark", {
      element: page.locator("main"),
      argosCSS: hideChrome,
    });
  });
});
