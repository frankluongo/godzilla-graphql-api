const { moviesData } = require("../data");

const Mutation = {
  Mutation: {
    addMovie,
  },
};

function addMovie(obj, { id, title, releaseDate }, ctx, info) {
  const newMovie = { id, title, releaseDate };
  return [...moviesData, newMovie];
}

module.exports = Mutation;
