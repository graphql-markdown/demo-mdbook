// mdBook has no footer hook short of overriding the whole index.hbs template,
// so add a small footer at the end of the content area on each page, after
// the prev/next chapter links (#mdbook-content in mdBook 0.5+, #content in 0.4).
(function () {
  var main = document.querySelector("#mdbook-content main, #content main");
  if (!main) return;
  var footer = document.createElement("footer");
  footer.className = "gqlmd-footer";
  footer.innerHTML =
    'Generated with <a href="https://graphql-markdown.dev">GraphQL-Markdown</a>' +
    ' · <a href="https://github.com/graphql-markdown/graphql-markdown">⭐ Star on GitHub</a>';
  footer.style.cssText =
    "box-sizing:border-box;width:100%;text-align:center;max-width:var(--content-max-width);margin:3em auto 0;padding-top:1em;border-top:1px solid var(--table-border-color);font-size:0.9em;color:var(--sidebar-non-existant)";

  // Keep the footer at the bottom of the viewport on short pages: the page
  // fills the viewport (plus the menu bar placeholder it overlaps) and the
  // main content area grows to push the footer down.
  var content = main.parentElement;
  var page = content.parentElement;
  content.appendChild(footer);
  page.style.cssText +=
    ";display:flex;flex-direction:column;min-height:calc(100vh + var(--menu-bar-height, 0px))";
  content.style.cssText += ";display:flex;flex-direction:column;flex:1 0 auto";
  main.style.cssText += ";width:100%;flex:1 0 auto";
})();
