import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
function App() {
  useEffect(() => {
    fetch("/work")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <div className="app">
          <button className="btn">Login</button>
          <button className="btn">Signup</button>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
