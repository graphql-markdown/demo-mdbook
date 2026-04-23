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

#### [`Language.code`](#)&nbsp;&bull;&nbsp;[`ID!`](/graphql/types/scalars/id.md) **non-null** **scalar**

#### [`Language.name`](#)&nbsp;&bull;&nbsp;[`String!`](/graphql/types/scalars/string.md) **non-null** **scalar**

#### [`Language.native`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **scalar**

#### [`Language.rtl`](#)&nbsp;&bull;&nbsp;[`Boolean`](/graphql/types/scalars/boolean.md) **scalar**

### Returned By

[`language`](/graphql/operations/queries/language.md) **query**&nbsp;&bull;&nbsp;[`languages`](/graphql/operations/queries/languages.md) **query**

### Member Of

[`Country`](/graphql/types/objects/country.md) **object**
