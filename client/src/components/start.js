import React from "react";
import "./style.css";

function Start() {
  return (
    <div className="container">
      <button type="button" className="btn btn-info" id="add">
        Add a child
      </button>
      <button type="button" className="btn btn-info" id="name">
        Who's Your Baby?
      </button>
    </div>
  );
}
export default Start;