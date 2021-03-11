import React, { useState, useEffect } from "react";
import Axios from "axios";
import Articles from "./Articles";
import LoadingMask from "./LoadingMask";
import Navbar from "./Navbar";

function Wall() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/",
    }).then((res) => setData(res));
  }, []);

  console.log(data);

  if (data === undefined || data.data.articles === undefined) {
    return (
      <div>
        <LoadingMask />
      </div>
    );
  }

  return (
    <div className="wall">
      <Navbar/>
      <Articles news={data} />
    </div>
  );
}

export default Wall;
