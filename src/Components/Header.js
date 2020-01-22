import React from "react";
import menu from "../Images/menu.svg";
import logo from "../Images/logo.svg";
import search from "../Images/magnifying-glass.svg";

export default function Header() {
  return (
    <header>
      <div>
        <img id="menu" src={menu} alt="" />
      </div>
      <div>
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="search-box">
        <input id="search-field" type="text" />
        <img src={search} alt="" />
      </div>
    </header>
  );
}
