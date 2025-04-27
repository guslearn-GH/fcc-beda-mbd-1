let mongoose = require("mongoose");
let timestampPlugin = require("./plugins/timestamp");

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date,
});

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

userSchema.virtual("fullName").set(function (val) {
  let str = val.split(" ");
  this.firstName = str[0];
  this.lastName = str[1];
});

userSchema.statics.getUsers = function () {
  return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      resolve(docs);
    });
  });
};

//emailSchema.plugin(timestampPlugin);
userSchema.plugin(timestampPlugin);
userSchema.pre("save", function (next) {
  let now = Date.now();

  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.module("User", userSchema);
let UserModel = require("./user");
let model = new UserModel({
  fullName: "Tomas Anderson",
});

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

consle.log(model.toJSON());
consol.log();
console.log(model.fullName);

UserModel.getUsers()
  .then((docs) => {
    consle.log(docs);
  })
  .catch((err) => {
    console.error(err);
  });
