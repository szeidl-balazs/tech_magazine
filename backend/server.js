const express = require("express");
const app = express();
const cors = require("cors");
const NewsAPI = require("newsapi");
const api_key = process.env.API_KEY;
const newsapi = new NewsAPI(api_key);
const PORT = 8000;

app.use(cors());

let randomNum = 1;

function randomize() {
  randomNum = Math.floor(Math.random() * Math.floor(10) + 1);
  return randomNum;
}

app.get("/", function (req, res) {
  newsapi.v2
    .topHeadlines({
      category: "technology",
      language: "en",
      pagesize: 10,
      page: randomize(),
    })
    .then((response) => {
      res.send(response);
      console.log(response);
    });
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT);
});
