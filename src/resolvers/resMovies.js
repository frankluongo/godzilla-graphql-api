const movieResolvers = {
  movies,
  movie,
};

function movies() {
  return moviesData;
}

function movie(_, { id }) {
  return moviesData.find((mov) => mov.id === id);
}

const moviesData = [
  {
    id: "1",
    title: "Godzilla",
    releaseDate: new Date("11-03-1954"),
    rating: 93,
  },
  {
    id: "2",
    title: "Godzilla vs Mechagodzilla",
    releaseDate: new Date("03-21-1974"),
    rating: 71,
  },
];

module.exports = movieResolvers;
