import React, { useState, useEffect } from "react";
import "./SignUp.css";
function addUser(username, password) {
  return new Promise((resolve, reject) => {
    fetch("/add-user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.index === 1) {
          resolve("its Good");
        } else {
          reject("there is a problem");
        }
      });
  });
}
function SignUp() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [flag, setFlag] = useState(false);
  const [validation, setValidation] = useState(false);
  const handelClick = async (e) => {
    e.preventDefault();
    await addUser(username, password)
      .then((messege) => {
        console.log(messege);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup">
      <form className="grid">
        <input
          value={username}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          autoFocus
          placeholder="Insert your userName"
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
          onChange={(e) => {
            if (e.target.value !== "") {
              if (e.target.value === password) {
                setValidation(false);
                setFlag(true);
              } else {
                setValidation(true);
                setFlag(false);
              }
            } else {
              setFlag(false);
              setValidation(false);
            }
          }}
          placeholder="Confirm password"
          type="password"
        />
        <br />
        <label hidden={!validation}>
          the confirm password it's not correct
        </label>
        <br />
        <button
          disabled={!username || !password || !flag}
          onClick={handelClick}
          className="btn"
        >
          SignUp
        </button>
      </form>
    </div>
  );
}

export default SignUp;
