import React from "react";
import menu from "../Images/menu.svg";
import logo from "../Images/logo.svg";
import search from "../Images/magnifying-glass.svg";

export default function Header() {
  const searchRef = React.createRef();

  const doSearch = e => {
    console.log(searchRef.current.value);
    e.preventDefault(); //disable form submit from refreshing page
    //Call Search API
  };

  return (
    <header>
      <div>
        <img id="menu" src={menu} alt="" />
      </div>
      <div>
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="search-box">
        <form action="" onSubmit={doSearch}>
          <input class="large" type="text" ref={searchRef} />
        </form>
        <img src={search} alt="" />
      </div>
    </header>
  );
}
