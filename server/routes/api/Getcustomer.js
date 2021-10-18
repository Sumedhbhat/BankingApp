const express = require("express");
const app = express.Router();
const Customer = require("../../models/Customer");

app.get("/", (req, res) => {
  Customer.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.get("/app", (req, res) => {
  console.log(req.url);
});

module.exports = app;
