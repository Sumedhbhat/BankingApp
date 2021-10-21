const express = require("express");
const app = express.Router();
const Customer = require("../../models/Customer");

app.get("/", (req, res) => {
  Customer.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.get("/:id", (req, res) => {
  Customer.find({ _id: `${req.params.id}` })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// app.patch("/:id", (req, res) => {
//   Customer.find({ id: `${req.params.id}` }).then(data);
// });

module.exports = app;
