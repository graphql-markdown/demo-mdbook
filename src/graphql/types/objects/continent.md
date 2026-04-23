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

#### [`Continent.code`](#)&nbsp;&bull;&nbsp;[`ID!`](/graphql/types/scalars/id.md) **non-null** **scalar**

#### [`Continent.name`](#)&nbsp;&bull;&nbsp;[`String!`](/graphql/types/scalars/string.md) **non-null** **scalar**

#### [`Continent.countries`](#)&nbsp;&bull;&nbsp;[`[Country!]!`](/graphql/types/objects/country.md) **non-null** **object**

### Returned By

[`continent`](/graphql/operations/queries/continent.md) **query**&nbsp;&bull;&nbsp;[`continents`](/graphql/operations/queries/continents.md) **query**

### Member Of

[`Country`](/graphql/types/objects/country.md) **object**
