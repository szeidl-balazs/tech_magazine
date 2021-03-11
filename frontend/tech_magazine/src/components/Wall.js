import React, { useState } from "react";
import Axios from "axios";

function Wall() {
  const [data, setData] = useState(undefined);

  const register = () => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/",
    }).then((res) => setData(res));
  };

  console.log(data);

  if (data === undefined || data.data.articles === undefined) {
    return (
      <div>
        <h1>Loading</h1>
        <button onClick={register}>Get Data</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <button onClick={register}>Get Data</button>
        <div>
          {data.data.articles.map((article, index) => (
            <div>
              <h2 key={index}>{article.title}</h2>
              <img src={article.urlToImage} alt="fos" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wall;
