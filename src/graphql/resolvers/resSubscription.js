const { pubsub, MOVIE_ADDED } = require("../subscription");

const Subscription = {
  Subscription: {
    movieAdded: {
      subscribe: () => pubsub.asyncIterator([MOVIE_ADDED]),
    },
  },
};

module.exports = Subscription;
