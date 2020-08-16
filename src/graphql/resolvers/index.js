const { GraphQLScalarType } = require("graphql");

const dateScalar = require("./resDate");
const Mutation = require("./resMutations");
const { movieResolvers, Movie } = require("./resMovies");
const Subscription = require("./resSubscription");

const resolvers = {
  Query: {
    ...movieResolvers,
  },
  ...Movie,
  ...Mutation,
  ...Subscription,
  Date: new GraphQLScalarType(dateScalar),
};

module.exports = resolvers;
