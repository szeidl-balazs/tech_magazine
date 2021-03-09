import "./scss/App.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Wall from "./components/Wall";
import Landing from "./components/Landing";



function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/wall" exact component={Wall}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
