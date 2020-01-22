import React from "react";
import IconInput from "../Components/IconInput.js";
import login from "../Images/login.svg";
import password from "../Images/Password.svg";
import email from "../Images/email.svg";

import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-area">
        <div>
          <h3 style={{ marginBottom: "2rem" }}>SIGN IN</h3>
          <IconInput placeholder="Email" img={email} type="email" />
          <IconInput placeholder="Password" img={password} type="password" />
          <Button>Login</Button>
          <h3>OR</h3>
          <Link to="/register">
            <Button variant={3}>Register</Button>
          </Link>
        </div>
        <div>
          <img id="dancing-girl" src={login} alt="" />
        </div>
      </div>
    </div>
  );
}
