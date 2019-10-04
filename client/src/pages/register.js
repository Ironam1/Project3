import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
// import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    user: "",
    password: "",
    babyname: "",
    babyimg: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.register({
      user: this.state.user,
      password: this.state.password,
      babyname: this.state.babyname,
      babyimg: this.state.babyimg
    }).then(res =>
      this.setState({
        user: "",
        password: "",
        babyname: "",
        babyimg: ""
      })
    );
    window.location.assign("/");
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
        <h2>Register Your Baby</h2>
        <form>
          <div className="form-group">
            <label>Email or User Name</label>
            <input
              type="string"
              className="form-control"
              id="newEmail"
              placeholder="Enter email or user name"
              name="user"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="*******"
              name="password"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="*******"
              name="password"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Baby Name</label>
            <input
              type="string"
              className="form-control"
              id="newName"
              placeholder="Baby's Name Here!"
              name="babyname"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Baby Image</label>
            <input
              type="string"
              className="form-control"
              id="newImage"
              placeholder="Image Url"
              name="babyimg"
              onChange={this.handleInputChange}
            />
          </div>

          {/* <Link to="/" className={window.location.pathname === "/"}> */}
          <button
            type="submit"
            className="btn btn-info"
            onClick={this.handleFormSubmit}
          >
            Register
          </button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default Register;
