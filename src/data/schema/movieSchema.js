const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  altTitles: [String],
  releaseDate: Date,
  rating: Number,
  status: String,
  kaijuIds: [String],
});

module.exports = movieSchema;
