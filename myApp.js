require("dotenv").config();
const mongoose = require("mongoose");
const mongoClient = require("mongodb");
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const client = new mongoClient.MongoClient(process.env.MONGO_URI);
async function run() {
  try {
    await client.connect();
    console.log("Successful connection!!!");

    let Person;

    const createAndSavePerson = (done) => {
      done(null /*, data*/);
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
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close(console.dir);
  }
}

run().catch(console.dir);

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
