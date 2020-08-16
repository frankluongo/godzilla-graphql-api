const { Movie } = require("../../data/models");
const { pubsub, MOVIE_ADDED } = require("../subscription");

const Mutation = {
  Mutation: {
    addMovie,
  },
};

async function addMovie(_obj, { movie }, _ctx, _info) {
  try {
    const newMovie = await Movie.create({ ...movie });
    pubsub.publish(MOVIE_ADDED, { movieAdded: newMovie });
    const allMovies = await Movie.find();
    return allMovies;
  } catch (e) {
    console.log(e);
  }
}

async function editMovie(_obj, { movie }, _ctx, _info) {}

module.exports = Mutation;
