import React, { useState } from "react";
import Axios from "axios";
import Articles from "./Articles";

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
        <Articles news={data} />
      </div>
    </div>
  );
}

export default Wall;
