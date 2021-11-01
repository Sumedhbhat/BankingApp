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

app.post("/", async (req, res) => {
  var { Transfer, Balance, Amount } = req.body;
  let CustomerTo = { name: `${Transfer}` };
  let CustomerFrom = { name: `${Balance}` };
  console.log(CustomerTo);
  Customer.find({ name: CustomerTo }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
});

// app.patch("/:id", (req, res) => {
//   Customer.find({ id: `${req.params.id}` }).then(data);
// });

module.exports = app;
