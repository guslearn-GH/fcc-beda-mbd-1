// let mongoose = require("mongoose");
// //const database = require("../database");
// //let validator = require("validator");
// class Person {
//   constructor(object) {
//     nameid = object.nameid;
//     age = object.age;
//     favoriteFoods = object.favoriteFoods;
//   }
// }
// let personSchema = new mongoose.Schema({
//   nameid: String,
//   age: Number,
//   favoriteFoods: [String],
// });

// personSchema.virtual("name").get(function () {
//   return this.nameid;
// });
// personSchema.virtual("name").set(function (val) {
//   this.nameid = val;
// });
// personSchema.virtual("lifeAge").get(function () {
//   return this.age;
// });
// personSchema.virtual("lifeAge").set(function (val) {
//   this.age = val;
// });
// personSchema.virtual("favorites").get(function () {
//   return this.favoriteFoods;
// });
// personSchema.virtual("favorites").set(function (val) {
//   this.favoriteFoods = val;
// });

// module.exports = mongoose.model("Person", personSchema);
