# Godzilla API

Built based on the `Level Up Tutorials` Series, _How To Make a GraphQL API_

## GraphQL Types & Enums

### Basic Types

- **String** — Text
- **Int** — Number with no decimal points
- **Float** — Number with decimal points
- **Boolean** — True/False
- **ID** — Comes with GraphQL, defines a unique identifier
- **Enum** — Select list type data

### Custom Types

```graphql
  type Kaiju {
    id: ID
    name: String
  }

  type Movie {
    kaiju: Kaiju # Singular
  }

  type Movie {
    ...
    kaiju: [Kaiju] # Multiple
  }
```
