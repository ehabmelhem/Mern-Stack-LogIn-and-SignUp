const express = require("express");
const app = express();

exports.work = (req, res) => {
  res.send({ messege: "hello from controller" });
};
