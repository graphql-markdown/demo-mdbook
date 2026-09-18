# Country




No description


```graphql
type Country {
  code: ID!
  name: String!
  native: String
  phone: String
  capital: String
  currency: String
  emoji: String
  emojiU: String @deprecated
  continent: Continent!
  languages: [Language!]!
  states: [State!]!
}
```


### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](../scalars/id.md) **non-null** **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](../scalars/string.md) **non-null** **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">native</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">phone</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">capital</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">emoji</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **scalar** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">emojiU</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](../scalars/string.md) **deprecated** **scalar** 
> [!WARNING]
> DEPRECATED
> 
> 
> Use 'emoji' instead
> 
>


#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">continent</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Continent!</code></span>](./continent.md) **non-null** **object** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">languages</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Language!]!</code></span>](./language.md) **non-null** **object** 



#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Country</code>.<code class="gqlmd-mdx-entity-name">states</code></span>](#)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[State!]!</code></span>](./state.md) **non-null** **object** 





### Returned By

[`countries`](../../operations/queries/countries.md)  **query**<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`country`](../../operations/queries/country.md)  **query**<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`oldCountrySearch`](../../operations/queries/old-country-search.md)  **query**

### Member Of

[`Continent`](./continent.md)  **object**<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`State`](./state.md)  **object**