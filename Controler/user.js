const express = require("express");
const app = express();

exports.addUser = (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
};
