import React from 'react'
import Axios from "axios";

function Wall() {

  const register = () => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <div>
        <button onClick={register}>Get Data</button>
      </div>
    </div>
  )
}

export default Wall
