const express = require("express");
const app = express();
const cors = require("cors");
const hbs = require("express-handlebars");

const data = require("./data");

app.use(cors());
app.set("view engine", "handlebars");
app.engine("handlebars", hbs());

app.get("/", (req, res) => {
  res.render("home", {
    mainNews: data.news[0],
    secondNews: data.news.slice(1, 3),
    headers: data.categories,
  });
});

app.listen(3030, () => {
  console.log("Server has been started...");
});
