import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginPage.css";
import image from "../assets/SaylaniPref.png";
import { useGlobalContext } from "../context/Context";

const LoginPage = () => {
  const { token, setToken,isAuthenticated } = useGlobalContext();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = async () => {
    try {
      await fetch("http://localhost:3005/admin/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "admin@gmail.com",
          password: password,
        }),
        credentials: "include",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Uploaded Data", data);
          setToken(data.token);
          if (data.token) {
            setCookie("JWT_TOKEN", data.token, 3);
            navigate("/admin");
          } else {
            navigate("/");
          }
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div style={style} className="main">
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username....." required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password....."
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            {/* <label>
              <input type="checkbox" />
              Remember Me
            </label> */}
            {/* <a href="#">Forget Password?</a> */}
          </div>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          {/* <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
