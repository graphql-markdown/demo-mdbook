<div class="gqlmd-landing">
<section class="gqlmd-hero">
<div class="gqlmd-hero-copy">
<p class="gqlmd-hero-headline">GRAPHQL SCHEMA REFERENCE</p>
<h1 class="gqlmd-hero-title">Your API, mapped with intent.</h1>
<p class="gqlmd-hero-description">Explore a generated workspace schema with operations, input types, relationships, and ready-to-run examples in one focused reference.</p>
<p class="gqlmd-hero-links"><a class="gqlmd-btn gqlmd-btn-primary" href="graphql/index.html">Explore the API</a><a class="gqlmd-btn gqlmd-btn-outline" href="graphql/operations/queries/projects.html">View an example</a></p>
</div>
<div class="gqlmd-schema-preview">
<div class="gqlmd-schema-preview-bar"><span class="gqlmd-schema-preview-file">workspace.graphql</span><span class="gqlmd-schema-preview-chip">SCHEMA</span></div>
<pre><code class="no-highlight"><span class="token-keyword">type</span> <span class="token-type">Project</span> <span class="token-keyword">implements</span> <span class="token-type">Node</span> {
  <span class="token-field">id</span>: <span class="token-type">ID!</span>
  <span class="token-field">name</span>: <span class="token-type">String!</span>
  <span class="token-field">status</span>: <span class="token-type">ProjectStatus!</span>
  <span class="token-field">owner</span>: <span class="token-type">User!</span>
}
<span></span>
<span class="token-keyword">type</span> <span class="token-type">Query</span> {
  <span class="token-field">projects</span>(status: <span class="token-type">ProjectStatus</span>):
    <span class="token-type">ProjectConnection!</span>
}</code></pre>
</div>
</section>
<section class="gqlmd-highlights">
<div class="gqlmd-highlight"><p class="gqlmd-highlight-label">OPERATIONS</p><p class="gqlmd-highlight-title">Queries, mutations, subscriptions</p></div>
<div class="gqlmd-highlight"><p class="gqlmd-highlight-label">MODELS</p><p class="gqlmd-highlight-title">Objects, inputs, unions, enums</p></div>
<div class="gqlmd-highlight"><p class="gqlmd-highlight-label">EXAMPLES</p><p class="gqlmd-highlight-title">Schema-defined GraphQL samples</p></div>
</section>
</div>
