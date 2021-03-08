const express = require("express");
const app = express();
const cors = require("cors");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("42232197917242eeb407d032926b3532");
const PORT = 8000;

app.use(cors());

app.get("/", function (req, res) {
  newsapi.v2
    .topHeadlines({
      category: "technology",
      language: "en",
    })
    .then((response) => {
      res.send(response);
      console.log(response);
    });
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT);
});
