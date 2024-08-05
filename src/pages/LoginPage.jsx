import React, { useState } from "react";
import "./LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa";
import image from "../assets/SaylaniPref.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // const [name,setName]=useState()
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };

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
        credentials: 'include',
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Uploaded Data", data);
          setToken(data.token);
        });
      if (token) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("Error", error);
    }

    // navigate("/admin")
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
