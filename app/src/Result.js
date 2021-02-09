import React, { useState } from "react";
import "./Result.css";
import { useLocation } from "react-router-dom";
function Result() {
  let location = useLocation();
  const [username, setUser] = useState(location.state.name);
  return (
    <div className="result">
      <h1>{username}</h1>
    </div>
  );
}

export default Result;
