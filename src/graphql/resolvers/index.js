const { GraphQLScalarType } = require("graphql");

const dateScalar = require("./resDate");
const Mutation = require("./resMutations");
const { movieResolvers, Movie } = require("./resMovies");

const resolvers = {
  Query: {
    ...movieResolvers,
  },
  ...Movie,
  ...Mutation,
  Date: new GraphQLScalarType(dateScalar),
};

module.exports = resolvers;
