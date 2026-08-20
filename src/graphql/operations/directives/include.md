# include

Directs the executor to include this field or fragment only when the `if` argument is true.

```graphql
directive @include(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">include</code>.<code class="gqlmd-mdx-entity-name">if</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](../../types/scalars/boolean.md) **non-null** **scalar**

Included when true.
