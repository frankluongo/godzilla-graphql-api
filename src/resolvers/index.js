const { GraphQLScalarType } = require("graphql");

const dateScalar = require("./resDate");
const movieResolvers = require("./resMovies");

const resolvers = {
  Query: {
    ...movieResolvers,
  },
  Date: new GraphQLScalarType(dateScalar),
};

module.exports = resolvers;
