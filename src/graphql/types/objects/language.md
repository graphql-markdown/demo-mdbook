# Language

No description

```graphql
type Language {
  code: ID!
  name: String!
  native: String
  rtl: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Language</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](../scalars/id.md) **non-null** **scalar**

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Language</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](../scalars/string.md) **non-null** **scalar**

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Language</code>.<code class="gqlmd-mdx-entity-name">native</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **scalar**

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Language</code>.<code class="gqlmd-mdx-entity-name">rtl</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](../scalars/boolean.md) **scalar**

### Returned By

[`language`](../../operations/queries/language.md) **query**<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`languages`](../../operations/queries/languages.md) **query**

### Member Of

[`Country`](./country.md) **object**
