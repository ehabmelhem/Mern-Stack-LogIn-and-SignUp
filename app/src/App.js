import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("/work")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="app">
      <button className="btn">Login</button>
      <button className="btn">Signup</button>
    </div>
  );
}

export default App;
