const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();
const api = require("./routes/api/Getcustomer");

//Connecting the mongodb database
mongoose.connect(process.env.DATABASE);

const conn = mongoose.connection;
conn.once("open", () => {
  console.log("connection established");
});

//Adding a bodyParser to the app so that it opens up as a json file
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "Successfully Connected" });
});

app.use("/api/customers", api);

console.log(process.env.NODE_ENV);
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
