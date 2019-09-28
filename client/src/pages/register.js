import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class Register extends Component {
  state = {
    user: "",
    password: "",
    babyName: "",
    babyImg: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("success!");
    API.register({
      user: this.state.user,
      password: this.state.password,
      babyName: this.state.babyName,
      babyImg: this.state.babyImg
    })
      .then(res =>
        this.setState({
          user: "",
          password: "",
          babyName: "",
          babyImg: ""
        })
      )

      console.log("Current states: " + this.state.user + " " + this.state.password + " " + this.state.babyName + " " + this.state.babyImg);
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
              name="babyName"  
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
              name="babyImg"  
              onChange={this.handleInputChange}
              />
          </div>

          <button type="submit" 
                  className="btn btn-info"
                  onClick={this.handleFormSubmit}
                  >
                  Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
