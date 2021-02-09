import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
function checkUser(username, password) {
  return new Promise((resolve, reject) => {
    fetch("/check-user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.index === 1) resolve({ messege: "Login success full" });
        else reject({ messege: "Login has been faild" });
      });
  });
}
function Login() {
  let history = useHistory();
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const clickhandler = async (e) => {
    e.preventDefault();
    await checkUser(username, password)
      .then((res) => {
        console.log(res.messege);
        history.push({
          pathname: "/result",
          state: {
            // location state
            name: username,
          },
        });
      })
      .catch((res) => {
        console.log(res.messege);
      });
  };
  return (
    <div className="login">
      <form onSubmit={clickhandler} className="form__login">
        <input
          value={username}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          placeholder="insert your username"
          type="text"
        />
        <br />
        <input
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          placeholder="insert your password"
          type="password"
        />
        <br />
        <input
          disabled={!username || !password}
          className="btn"
          value="Login"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Login;
