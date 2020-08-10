const resolvers = {
  Query: {
    movies: () => {
      return movies;
    },
    movie: getSingleMovie,
  },
};

const movies = [
  {
    id: "1",
    title: "Godzilla",
    releaseDate: "11-03-1954",
    rating: 93,
  },
  {
    id: "2",
    title: "Godzilla vs Mechagodzilla",
    releaseDate: "03-21-1974",
    rating: 71,
  },
];

function getSingleMovie(_, { id }) {
  return movies.find((mov) => mov.id === id);
}

module.exports = resolvers;
