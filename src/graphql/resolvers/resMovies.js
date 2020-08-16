const { kaijuData, moviesData } = require("../../sampleData");
const { Movie } = require("../../data/models");

exports.movieResolvers = {
  movies,
  movie,
};

async function movies() {
  try {
    const allMovies = await Movie.find();
    return allMovies;
  } catch (e) {
    console.log(error);
  }
}

async function movie(_, { id }) {
  try {
    const movie = await Movie.findById(id);
    return movie;
  } catch (e) {
    console.log(e);
  }
}

exports.Movie = {
  Movie: {
    kaiju,
  },
};

function kaiju(obj, arg, ctx) {
  // No Kaiju? Return
  if (!obj.kaiju) return [];
  // Create an Array of just the ID's
  const kjIds = obj.kaiju.map((kj) => kj.id);
  // Filter the Kaiju Data to grab only the Kaiju in the movie
  const filtKaijus = kaijuData.filter((kj) => kjIds.includes(kj.id));
  // Return it
  return filtKaijus;
}
