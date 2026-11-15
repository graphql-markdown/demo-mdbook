// mdBook has no footer hook short of overriding the whole index.hbs template,
// so append a small footer to the main content area on each page
// (#mdbook-content in mdBook 0.5+, #content in 0.4).
(function () {
  var main = document.querySelector("#mdbook-content main, #content main");
  if (!main) return;
  var footer = document.createElement("footer");
  footer.className = "gqlmd-footer";
  footer.innerHTML =
    'Generated with <a href="https://graphql-markdown.dev">GraphQL-Markdown</a>' +
    ' · <a href="https://github.com/graphql-markdown/graphql-markdown">⭐ Star on GitHub</a>';
  footer.style.cssText =
    "margin-top:3em;padding-top:1em;border-top:1px solid var(--table-border-color);font-size:0.9em;color:var(--sidebar-non-existant)";
  main.appendChild(footer);
})();
