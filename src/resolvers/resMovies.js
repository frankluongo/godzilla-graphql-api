const { kaijuData, moviesData } = require("../data");

exports.movieResolvers = {
  movies,
  movie,
};

function movies() {
  return moviesData;
}

function movie(_, { id }) {
  return moviesData.find((mov) => mov.id === id);
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
