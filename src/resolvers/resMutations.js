const { moviesData } = require("../data");

const Mutation = {
  Mutation: {
    addMovie,
  },
};

function addMovie(obj, { movie }, ctx, info) {
  console.log(movie);
  return [...moviesData, movie];
}

module.exports = Mutation;
