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

// const Schema = mongoose.Schema;

// const personSchema = Schema({
//   name: String,
//   age: String,
//   favoriteFoods: [String],
// });

let PersonModel = require("./person");
let Person = new PersonModel();
console.log(Person);

const createAndSavePerson = (done) => {
  // console.log("POST? 0");
  // var pal = new Person({
  //   name: "PAL",
  //   age: 10,
  //   favortieFoods: ["ramen", "bacon"],
  // });
  // console.log("POST? 1");
  // pal.save().then(function (err, data) {
  //   console.log("POST? 2");
  //   if (err) {
  //     console.log("problem here???--YES");
  //     console.log(err);
  //     console.log(data);
  //     return console.error(err);
  //   }
  //   console.log("POST? 3");
  //   done(null, data);
  // });
  // if (dbConnection.readyState == 1) {
  //   var prms = pal.save(); //returns Promise
  //   if (!prms) {
  //     return console.log("problem with saving person");
  //   } else {
  //     return console.log("person was saved!!!");
  //   }
  // } else {
  //   return console.log("Not connected!!!");
  // }
  // pal
  //   .save()
  //   .then((data) => {
  //     console.log("PASS!!!");
  //     console.log(data);
  //     done(null, data);
  //   })
  //   .catch((err) => {
  //     console.log("FAIL!!!");
  //     console.error(err);
  //     done(err);
  //   });
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  // for (var p in arrayOfPeople) {
  //   var addPerson = new Person(p);
  //   addPerson
  //     .save()
  //     .then((data) => {
  //       console.log(data);
  //       done(null, data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       done(err);
  //     });
  // }
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
