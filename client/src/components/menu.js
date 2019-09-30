import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Menu extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Link to="/eat" className={window.location.pathname === "/eat"}>
          <button type="button" className="btn btn-info" id="eat">
            Feed Me
          </button>
        </Link>

        <Link to="/change" className={window.location.pathname === "/change"}>
          <button type="button" className="btn btn-info" id="change">
            Change Me
          </button>
        </Link>

        <Link to="/sleep" className={window.location.pathname === "/sleep"}>
          <button type="button" className="btn btn-info" id="sleep">
            Zzzzz
          </button>
        </Link>

        <Link
          to="/dailyLog"
          className={window.location.pathname === "/dailyLog"}
        >
          <button type="button" className="btn btn-info" id="dailyLog">
            DailyLog
          </button>
        </Link>
      </div>
    );
  }
}

export default Menu;