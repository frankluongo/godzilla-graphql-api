const { PubSub } = require("apollo-server");

exports.MOVIE_ADDED = "MOVIE_ADDED";
exports.pubsub = new PubSub();
