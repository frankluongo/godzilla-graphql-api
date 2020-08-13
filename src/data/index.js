const mongoose = require("mongoose");
const { keys } = require("../config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function dbConnect() {
  const url = keys.mongoURI;
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", onDbOpen);
  try {
    await mongoose.connect(url, options);
  } catch (e) {
    console.log(e);
  }
}

function onDbOpen() {
  console.log("database is connected!");
}

module.exports = dbConnect;
