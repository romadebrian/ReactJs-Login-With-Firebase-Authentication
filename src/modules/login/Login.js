import React, { useState } from "react"; //rfce
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Login.css";

function Login(props) {
  const history = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("Login Sucess");
        console.log("UserId: ", user.uid);
        console.log("Email: ", user.email);

        localStorage.setItem("token", JSON.stringify(user.uid));
        history("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error code: ", errorCode);
        console.log("error messege: ", errorMessage);
        alert("Email atau Password salah");
      });
  };

  return (
    <div className="login-form">
      <div className="card">
        <h1>Login</h1>
        <div className="body-card">
          <input
            id="Email"
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
          />

          <input
            id="Password"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
        </div>
        <button onClick={handleLogin} className="btn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
