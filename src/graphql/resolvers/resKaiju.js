const kaijuResolver = {
  Kaiju: (obj, arg, ctx, info) => {
    console.log(obj);
    return {
      id: "k1",
      name: "Godzilla",
    };
  },
};

module.exports = kaijuResolver;
