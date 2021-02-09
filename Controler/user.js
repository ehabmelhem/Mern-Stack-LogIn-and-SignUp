const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ehab:e0iVP2mdpxBvW2OZ@cluster0.ojjnq.mongodb.net/LoginandSignUp",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const userData = new mongoose.Schema({
  username: String,
  password: String,
});

const userCollection = mongoose.model("userCollection", userData);

exports.addUser = async (req, res) => {
  const { username, password } = req.body;
  var flag = false;
  await userCollection.find({ username: username }).then((docs) => {
    if (docs.length === 0) {
      flag = true;
    }
  });
  if (flag) {
    var adduser = new userCollection({
      username: username,
      password: password,
    });
    await adduser.save().then(() => {
      console.log("add new user to DB");
    });
    res.send({ index: 1 });
  } else {
    res.send({ index: -1 });
  }
};

exports.checkUser = async (req, res) => {
  const { username, password } = req.body;
  await userCollection
    .find({ username: username, password: password })
    .then((docs) => {
      if (docs.length === 0) {
        res.send({ index: -1 });
      } else {
        res.send({ index: 1 });
      }
    });
};
