console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//1:Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session
//3:Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.get("/", function (req, res) {
  res.end("<h1>tojimatov abdukarim</h1>");
});
// app.get("/job", function (req, res) {
//   res.end("<h1>full stack developer</h1>");
// });
// app.get("/occupation", function (req, res) {
//   res.end("<h1>CEO of Stars of genius</h1>");
// });

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The Server is running successfully on port ${PORT}`);
});
