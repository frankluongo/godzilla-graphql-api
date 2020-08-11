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

  type Query {
    movies: [Movie]
    movie(id: ID): Movie
  }
`;

module.exports = typeDefs;
