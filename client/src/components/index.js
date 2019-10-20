import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./style.css";

class Login extends Component {
  state = {
    user: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.login({
      user: this.state.user,
      password: this.state.password
    }).then(res =>
      this.setState({
        user: "",
        password: ""
      })
    );
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email or User Name</label>
            <input
              type="user"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="user"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="********"
              name="password"
              onChange={this.handleInputChange}
            />
          </div>

          <Link to="/start" className={window.location.pathname === "/start"}>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </Link>

          <a className="" href="/register">
            Register your baby here!
          </a>
        </form>
      </div>
    );
  }
}

export default Login;
