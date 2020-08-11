const { GraphQLScalarType } = require("graphql");

const dateScalar = require("./resDate");
const { movieResolvers, Movie } = require("./resMovies");

const resolvers = {
  Query: {
    ...movieResolvers,
  },
  ...Movie,
  Date: new GraphQLScalarType(dateScalar),
};

module.exports = resolvers;
