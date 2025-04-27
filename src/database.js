let mongoose = require("mongoose");
let EmailModel = require("./email");

const server = "154.47.28.105/32";
const database = "Cluster0";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect("mongodb://${server}/${database}")
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
