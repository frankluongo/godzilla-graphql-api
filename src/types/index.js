const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  enum Status {
    WATCHED
    TO_WATCH
  }

  type Kaiju {
    id: ID!
    name: String!
  }

  type Movie {
    id: ID! # The Bang (!) means this can't be null
    title: String!
    altTitles: [String]
    releaseDate: Date
    rating: Int
    kaiju: [Kaiju]
    # kaiju: [Kaiju]! Here Valid = [], [...data]
    # kaiju: [Kaiju!]! Here Valid = [...data]
  }

  type Mutation {
    addMovie(title: String, releaseDate: Date, id: ID): [Movie]
  }

  type Query {
    movies: [Movie]
    movie(id: ID): Movie
    # kaijus: [Kaiju]
    # kaiju(id: ID): Kaiju
  }
`;

module.exports = typeDefs;
