let mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  age: String,
  favoriteFoods: [String],
});

module.exports = mongoose.model("Person", personSchema);
