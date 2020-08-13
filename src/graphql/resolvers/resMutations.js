const { moviesData } = require("../../sampleData");

const Mutation = {
  Mutation: {
    addMovie,
  },
};

function addMovie(obj, { movie }, ctx, info) {
  console.log(ctx.fakeUser);
  return [...moviesData, movie];
}

module.exports = Mutation;
