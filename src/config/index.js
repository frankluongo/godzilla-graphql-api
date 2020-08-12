exports.context = ({ req }) => {
  const fakeUser = {
    id: 1,
    email: "frankluongo92@gmail.com",
  };
  return {
    fakeUser,
  };
};
