import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Result from "./Result";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <div className="app">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>

          <Link to="/signup">
            <button className="btn">Signup</button>
          </Link>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
