let mongoose = require("mongoose");
let validator = require("validator");

let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});

module.exports = mongoose.model("Email", emailSchema);

let EmailModel = require("./email");

let msg = new EmailModel({
  email: "ADA.LOVELACE@GMAIL.COM",
});

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

EmailModel.find({
  email: "ada.lovelace@gmail.com", // search query
})
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

EmailModel.findOneAndUpdate(
  {
    email: "ada.lovelace@gmail.com", // search query
  },
  {
    email: "theoutlander@live.com", // field:values to update
  },
  {
    new: true, // return updated doc
    runValidators: true, // validate before update
  }
)
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

EmailModel.findOneAndRemove({
  email: "theoutlander@live.com",
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
