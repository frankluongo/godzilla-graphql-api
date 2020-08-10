const movieResolvers = require("./resMovies");

const resolvers = {
  Query: {
    ...movieResolvers,
  },
};

module.exports = resolvers;
