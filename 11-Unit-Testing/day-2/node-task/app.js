const express = require("express");
const mongoose = require("mongoose");
const PostModel = require("./models/post");

var app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/unitTesting");

app.get("/posts", async function (req, res) {
  var posts = await PostModel.find();
  res.status(200).json(posts);
});

app.post("/posts", async function (req, res) {
  var newPost = await PostModel.create(req.body);
  res.status(201).json(newPost);
});

var server = app.listen(3000, () => {
  console.log("listening successfully");
});

module.exports = server;
