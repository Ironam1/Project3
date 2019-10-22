import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="main">
      <h2 id="welcome">Welcome!</h2>

      <Link to="/eat" className={window.location.pathname === "/eat"}>
        <button type="button" className="btn btn-info navbutton" id="eat">
          Eat
        </button>
      </Link>
      <Link to="/sleep" className={window.location.pathname === "/sleep"}>
        <button type="button" className="btn btn-info navbutton" id="sleep">
          Sleep
        </button>
      </Link>
      <Link to="/change" className={window.location.pathname === "/change"}>
        <button type="button" className="btn btn-info navbutton" id="change">
          Change
        </button>
      </Link>
      <Link to="/dailyLog" className={window.location.pathname === "/dailyLog"}>
        <button type="button" className="btn btn-info navbutton" id="dailyLog">
          Daily Log
        </button>
      </Link>
    </div>
  );
}
export default Start;
