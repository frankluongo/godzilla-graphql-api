require("dotenv");

exports.context = ({ req }) => {
  const fakeUser = {
    id: 1,
    email: "frankluongo92@gmail.com",
  };
  return {
    fakeUser,
  };
};

exports.keys = {
  mongoURI: process.env.MONGO_DB_URI,
  secretOrKey: process.env.JWT_SECRET_KEY,
};
