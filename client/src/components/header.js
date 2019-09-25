import React from "react";
import "./style.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid" id="header">
      <div className="container">
        <h1 className="display-4">Parent's Little Helper</h1>
        <p className="lead">Tracking Baby's Basic Needs</p>
      <NavBar></NavBar>
      </div>
    </div>
  );
}
export default Header;