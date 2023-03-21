import Logo from "../assets/images/LoneWorker.png";
import Login from "../components/Login/Login";
import { Link } from "react-router-dom";

import React from "react";

export default function Landing() {
  return (
    <main className="login__container">
      <img src={Logo} className="login__logo" alt="SafetyVest Logo" />
      <Login />
      <Link to="/homepage">Continue to Site</Link>
    </main>
  );
}
