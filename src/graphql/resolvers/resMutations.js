const { Movie } = require("../../data/models");

const Mutation = {
  Mutation: {
    addMovie,
  },
};

async function addMovie(_obj, { movie }, _ctx, _info) {
  try {
    await Movie.create({ ...movie });
    const allMovies = await Movie.find();
    return allMovies;
  } catch (e) {
    console.log(e);
  }
}

async function editMovie(_obj, { movie }, _ctx, _info) {}

module.exports = Mutation;
