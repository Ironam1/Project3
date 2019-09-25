import React, { Component } from "react";
import "./style.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    babyName: "",
    babyImg: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("success!");
    // API call here
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
              email={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="*******"
              password={this.state.password}
            />
          </div>
          <div className="form-group">
            <label>Baby Name</label>
            <input
              type="string"
              className="form-control"
              id="newName"
              placeholder="Baby's Name Here!"
              babyName={this.state.babyName}
            />
          </div>
          <div className="form-group">
            <label>Baby Image</label>
            <input
              type="string"
              className="form-control"
              id="newImage"
              placeholder="Image Url"
              babyImg={this.state.babyImg}
            />
          </div>
          <button type="submit" className="btn btn-info">
              Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;