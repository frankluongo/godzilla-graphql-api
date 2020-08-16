const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  enum Status {
    WATCHED
    TO_WATCH
  }

  input KaijuInput {
    id: ID
    name: String
  }

  input MovieInput {
    id: ID
    title: String
    altTitles: [String]
    releaseDate: Date
    rating: Int
    kaiju: [KaijuInput]
  }

  type Kaiju {
    id: ID!
    name: String!
  }

  type Movie {
    id: ID!
    title: String!
    altTitles: [String]
    releaseDate: Date
    rating: Int
    kaiju: [Kaiju]
  }

  type Mutation {
    addMovie(movie: MovieInput): [Movie]
  }

  type Query {
    movies: [Movie]
    movie(id: ID): Movie
    kaijus: [Kaiju]
    kaiju(id: ID): Kaiju
  }

  type Subscription {
    movieAdded: Movie
  }
`;

module.exports = typeDefs;
