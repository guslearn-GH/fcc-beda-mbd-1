const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname + "/process.env") });
const mongoose = require("mongoose");

try {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
} catch (err) {
  console.log("could not connect");
}

// const dbConnection = mongoose.connection;
// dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
// dbConnection.once("open", () => {
//   console.log("Connected to DB!");
// });

let personSchema = new mongoose.Schema({
  nameid: String,
  age: Number,
  favoriteFoods: [String],
});

//let PersonModel =
let Person = mongoose.model("Person", personSchema);
const createAndSavePerson = (done) => {
  var mrWrld = new Person({
    nameid: "Mr. World",
    age: 100,
    favoriteFoods: ["Ramen", "Bacon"],
  });

  mrWrld.save(function (err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
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
