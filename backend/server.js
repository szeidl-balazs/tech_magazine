const express = require("express");
const app = express();
const cors = require("cors");
const NewsAPI = require("newsapi");
const PORT = 8000;
const api_key = process.env.API_KEY;
const newsapi = new NewsAPI(api_key);

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
