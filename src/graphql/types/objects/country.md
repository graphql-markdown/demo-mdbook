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

#### [`Country.code`](#)&nbsp;&bull;&nbsp;[`ID!`](/graphql/types/scalars/id.md) **non-null** **scalar**

#### [`Country.name`](#)&nbsp;&bull;&nbsp;[`String!`](/graphql/types/scalars/string.md) **non-null** **scalar**

#### [`Country.native`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **scalar**

#### [`Country.phone`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **scalar**

#### [`Country.capital`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **scalar**

#### [`Country.currency`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **scalar**

#### [`Country.emoji`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **scalar**

#### [`Country.emojiU`](#)&nbsp;&bull;&nbsp;[`String`](/graphql/types/scalars/string.md) **deprecated** **scalar**

> [!WARNING]
> DEPRECATED
>
> Use 'emoji' instead

#### [`Country.continent`](#)&nbsp;&bull;&nbsp;[`Continent!`](/graphql/types/objects/continent.md) **non-null** **object**

#### [`Country.languages`](#)&nbsp;&bull;&nbsp;[`[Language!]!`](/graphql/types/objects/language.md) **non-null** **object**

#### [`Country.states`](#)&nbsp;&bull;&nbsp;[`[State!]!`](/graphql/types/objects/state.md) **non-null** **object**

### Returned By

[`countries`](/graphql/operations/queries/countries.md) **query**&nbsp;&bull;&nbsp;[`country`](/graphql/operations/queries/country.md) **query**&nbsp;&bull;&nbsp;[`oldCountrySearch`](/graphql/operations/queries/old-country-search.md) **query**

### Member Of

[`Continent`](/graphql/types/objects/continent.md) **object**&nbsp;&bull;&nbsp;[`State`](/graphql/types/objects/state.md) **object**
