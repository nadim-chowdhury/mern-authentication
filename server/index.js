const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/userSchema");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Invalid Credentials");
      }
    } else {
      res.json("No User Found");
    }
  });
});

app.post("/signup", (req, res) => {
  userModel
    .create(req.body)
    .then((res) => res.json())
    .catch((err) => res.json(err));
});

app.listen(8000, () => {
  console.log("Server Connected @ 8000");
});
