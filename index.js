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

app.get('/api/data', (req, res) => {

  res.json(data)
})


app.get('/categoryId/:id', (req, res) => {
  const dataNews = data.news.filter(item => item.categoryId === Number(req.params.id))
  console.log(dataNews)
  res.render("home", {
    mainNews: dataNews[0],
    secondNews: dataNews.slice(1, 3),
    headers: data.categories
  })
})

app.get('/contacts', (req, res) => {
  res.render("contacts")
})

app.get('/news/:id', (req, res )=> {
  const oneNews = data.news.find(item =>item.id === Number(req.params.id))
  res.render('news', {
    oneNews
  })
})

app.listen(3030, () => {
  console.log("Server has been started...");
});
