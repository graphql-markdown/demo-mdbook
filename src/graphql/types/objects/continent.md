# Continent




No description


```graphql
type Continent {
  code: ID!
  name: String!
  countries: [Country!]!
}
```


### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Continent</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](../scalars/id.md) **non-null** **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Continent</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](../scalars/string.md) **non-null** **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Continent</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Country!]!</code></span>](./country.md) **non-null** **object** 





### Returned By

[`continent`](../../operations/queries/continent.md)  **query**<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`continents`](../../operations/queries/continents.md)  **query**

### Member Of

[`Country`](./country.md)  **object**