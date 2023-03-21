import React from "react";
import Logo from "../../assets/images/header__loneworker.png";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <main className="header__container">
      <img className="header__logo" src={Logo} alt="SafetyVest Logo" />
      <FaBars className="header__menu" size={40} color="#ffb22f" />
    </main>
  );
}
