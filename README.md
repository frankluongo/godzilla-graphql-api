# Godzilla API

Built based on the `Level Up Tutorials` Series, _How To Make a GraphQL API_. The series is using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) to manage the GraphQL Server setup.

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

## Arguments in GraphQL (From Video #10)

```js
const resolvers = {
  Query: {
    movie: (obj, args, ctx, info) => {
      // obj = Object containing some info
      // args = Arguments passed into the query
      // ctx = Context about the request
      // info = Data about the query execution
      return movies[0];
    },
  },
};
```

## 16 What is an AST

- AST means `Abstract String Tree`.
- It basically means converting a string into something your API (computer, browser, etc.) can understand

## 17 What Are Fragments

Fragments are reusable bits of query that are defined on the client-side

```graphql
fragment Meta on Movie {
  releaseDate
  rating
}
```

## 20 & 21 Alternate Servers & Services / Where To Go From Here

- [GraphQL Services](https://graphql.org/code/)
- [Moon Highway](https://moonhighway.com/)
