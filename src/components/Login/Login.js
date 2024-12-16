import React, { useState } from "react";
import axios from "axios";
import style from "./Login.module.scss"
import { useNavigate } from "react-router-dom";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/v1/auth/login", {
        username,
        password,
      });
      setToken(response.data.accessToken);
      navigate("/addpothole")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <h2 className={style.header}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
