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
  const { Transfer, Balance } = req.body;
  var { Amount } = req.body;
  Amount = parseInt(Amount);
  console.log(Transfer, Balance);
  const CustomerFrom = await Customer.findById(Balance);
  const CustomerTo = await Customer.findById(Transfer);
  console.log(CustomerFrom, CustomerTo);
  const newTo = (await CustomerTo.balance) + Amount;
  const newFrom = (await CustomerFrom.balance) - Amount;
  console.log(newFrom, newTo);
  const docsTo = await Customer.findByIdAndUpdate(
    Transfer,
    { balance: newTo },
    { new: true }
  );
  const docsFrom = await Customer.findByIdAndUpdate(
    Balance,
    { balance: newFrom },
    { new: true }
  );
  console.log(docsFrom, docsTo);
  res.send({ docsTo, docsFrom });
  // var DocsFrom = await Customer.findOneAndUpdate(
  //   CustomerFrom,
  //   { balance: `${newFrom}` },
  //   { new: true }
  // );
  // var DocsTo = await Customer.findOneAndUpdate(
  //   CustomerTo,
  //   { balance: `${newTo}` },
  //   { new: true }
  // );
  // console.log(DocsTo);
  // console.log(DocsFrom);
});

// app.patch("/:id", (req, res) => {
//   Customer.find({ id: `${req.params.id}` }).then(data);
// });

module.exports = app;
