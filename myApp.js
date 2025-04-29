const path = require("path");
require("dotenv").config({ path: __dirname + "/process.env" });
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbConnection = mongoose.connection;
dbConnection.once("open", () => {
  console.log("connected!!!");
});

const Schema = mongoose.Schema;

const personSchema = Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  favoriteFoods: [{ type: String }],
});

let Person = new mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  console.log("Create and save");
  var psn = new Person({
    name: "dude",
    age: 111,
    favoriteFoods: ["ramen", "bacon"],
  });
  psn.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfPeople = [
  { name: "dude0", age: 110, favoriteFoods: ["ramen0", "bacon0"] },
  { name: "dude1", age: 111, favoriteFoods: ["ramen1", "bacon1"] },
  { name: "dude2", age: 112, favoriteFoods: ["ramen2", "bacon2"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  var query = { name: personName };
  Person.find(query, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  var query = { favoriteFoods: [food] };
  Person.findOne(query, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  console.log(personId);
  Person.findById(personId, function (err, data) {
    if (err) return console.error(err);
    console.log(data);
    data.favoriteFoods.push(foodToAdd);
    data.save(function (err2, data2) {
      if (err2) return console.error(err2);
      done(null, data2);
    });
  });
};

const findAndUpdate = (personName, done) => {
  console.log(personName);
  var query = { name: personName };
  const ageToSet = 20;
  Person.findOne(
    query,
    function (err, data) {
      if (err) return console.error(err);
      console.log(data);
      data.age = ageToSet;
      data.save(function (err2, data2) {
        if (err2) return console.error(err2);
        done(null, data2);
      });
    },
    { new: true }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
    if (err) return console.log(err);
    done(null, removedDoc);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, removedDocs) => {
    if (err) return console.log(err);
    done(null, removedDocs);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({ favoriteFoods: foodToSearch })
    .sort("name")
    .limit(2)
    .select("-age")
    .exec((err, data) => {
      if (err) return console.error(err);
      console.log(data);
      done(null, data);
    });
};
/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
