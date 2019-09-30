import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="wrapper">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="home" href="/">
          Login
        </a>
        <a className="eat" href="/eat">
          Eat
        </a>
        <a className="zzz" href="/sleep">
          Sleep
        </a>
        <a className="change" href="/change">
          Change
        </a>
        <a className="daily" href="/dailyLog">
          Daily Log
        </a>
      </div>
    </div>
  );
}

export default NavBar;