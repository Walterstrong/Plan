console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MONGODB choqirish
const db = require("./server.js").db();

//1:Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session
//3:Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;