exports.kaijuData = [
  { id: "k1", name: "Godzilla" },
  { id: "k3", name: "Motha" },
  { id: "k4", name: "Mecha Godzilla" },
  { id: "k5", name: "Space Godzilla" },
  { id: "k6", name: "Biollante" },
  { id: "k7", name: "Rodan" },
  { id: "k8", name: "Anguirus" },
];

exports.moviesData = [
  {
    id: "1",
    title: "Godzilla",
    releaseDate: new Date("11-03-1954"),
    rating: 93,
    kaiju: [{ id: "k1" }],
  },
  {
    id: "2",
    title: "Godzilla vs Mechagodzilla",
    releaseDate: new Date("03-21-1974"),
    rating: 71,
    kaiju: [{ id: "k1" }, { id: "k4" }],
  },
];
