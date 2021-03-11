import "./scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wall from "./components/Wall";
import Landing from "./components/Landing";
import { useEffect } from "react";

function App() {
  let visited = localStorage["alreadyVisited"];

  useEffect(() => {
    if (visited) {
    } else {
      localStorage["alreadyVisited"] = true;
    }
  }, []);

  if (!localStorage["alreadyVisited"]) {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/wall" component={Wall} />
          </Switch>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Wall} />
          <Route path="/wall" component={Wall} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
