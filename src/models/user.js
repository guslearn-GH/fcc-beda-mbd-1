let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

module.exports = mongoose.module("User", userSchema);

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

userSchema.virtual("fullName").set(function (val) {
  let str = val.split(" ");
  this.firstName = str[0];
  this.lastName = str[1];
});

let model = new UserModel();

model.fullName = "Tomas Anderson";

consle.log(model.toJSON());
consol.log();
console.log(model.fullName);
