const mongoose = require("mongoose");

const movieSchema = require("../schema/movieSchema");

exports.Movie = mongoose.model("Movie", movieSchema);
