import "./scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wall from "./components/Wall";
import Landing from "./components/Landing";
import { useState, useEffect } from "react";

function App() {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    let visited = localStorage["alreadyVisited"];
    if (visited) {
      setShowLanding(false);
    } else {
      localStorage["alreadyVisited"] = true;
      setShowLanding(true);
    }
  }, []);

  if (showLanding) {
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
