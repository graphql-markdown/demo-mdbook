# Summary

[Introduction](introduction.md)

---

[GraphQL API Reference](graphql/index.md)

# Operations

- [Queries]()
  - [folders](graphql/operations/queries/folders.md)
  - [folder](graphql/operations/queries/folder.md)
  - [projects](graphql/operations/queries/projects.md)
  - [search](graphql/operations/queries/search.md)

- [Mutations]()
  - [createFolder](graphql/operations/mutations/create-folder.md)
  - [createProject](graphql/operations/mutations/create-project.md)
  - [archiveProject](graphql/operations/mutations/archive-project.md)

- [Subscriptions]()
  - [projectChanged](graphql/operations/subscriptions/project-changed.md)
  - [folderCreated](graphql/operations/subscriptions/folder-created.md)

- [Directives]()
  - [include](graphql/operations/directives/include.md)
  - [skip](graphql/operations/directives/skip.md)

# Types

- [Directives]()
  - [example](graphql/types/directives/example.md)
  - [exampleResponse](graphql/types/directives/example-response.md)
  - [exampleVariables](graphql/types/directives/example-variables.md)
  - [deprecatedType](graphql/types/directives/deprecated-type.md)
  - [deprecated](graphql/types/directives/deprecated.md)
  - [specifiedBy](graphql/types/directives/specified-by.md)
  - [oneOf](graphql/types/directives/one-of.md)

- [Objects]()
  - [Folder](graphql/types/objects/folder.md)
  - [User](graphql/types/objects/user.md)
  - [Project](graphql/types/objects/project.md)
  - [LegacyProject](graphql/types/objects/legacy-project.md)
  - [ProjectConnection](graphql/types/objects/project-connection.md)
  - [ProjectEvent](graphql/types/objects/project-event.md)

- [Interfaces]()
  - [Node](graphql/types/interfaces/node.md)

- [Unions]()
  - [SearchResult](graphql/types/unions/search-result.md)

- [Inputs]()
  - [CreateProjectInput](graphql/types/inputs/create-project-input.md)

- [Enums]()
  - [ProjectStatus](graphql/types/enums/project-status.md)
  - [ProjectEventType](graphql/types/enums/project-event-type.md)

- [Scalars]()
  - [DateTime](graphql/types/scalars/date-time.md)
  - [ID](graphql/types/scalars/id.md)
  - [String](graphql/types/scalars/string.md)
  - [Int](graphql/types/scalars/int.md)
  - [Boolean](graphql/types/scalars/boolean.md)
