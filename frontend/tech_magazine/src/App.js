import "./scss/App.scss";
import Axios from "axios";

function App() {
  const register = () => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/",
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <div>
        <button onClick={register}>Get Data</button>
      </div>
    </div>
  );
}

export default App;
