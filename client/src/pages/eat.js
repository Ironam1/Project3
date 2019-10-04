import React, { Component } from "react";
import "./style.css";
import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import Timer from "../components/TimePicker";
import API from "../utils/API";
import Container from "../components/Container/container";
import NavBar from "../components/NavBar/NavBar";

// const format = "h:mm a";

class Eat extends Component {
  state = {
    user: "connie@mail.com",
    date: "1999-01-01 05:00:00.000Z",
    value: moment(),
    details: "",
    feed: []
  };

  componentDidMount = () => {
    const user = {
      user: this.state.user,
      date: this.state.date
    };

    API.getFeed(user)
      .then(res => {
        this.setState({ feed: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("Error" + err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.postFeed({
      user: this.state.user,
      date: this.state.date,
      time: this.state.value.format("hh:mm a"),
      details: this.state.details
    }).then(res =>
      this.setState({
        value: res.data,
        details: ""
      })
    );
    // console.log("value " + this.state.value.format("hh:mm a"));
    window.location.reload();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(value);
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <h2>Feed Me</h2>
        <DatePicker />
        <p></p>
        <Timer />

        <div className="input-group">
          <div className="input-group-prepend">
            <label className="input-group-text">Details</label>
          </div>
          <textarea
            className="form-control"
            id="details"
            name="details"
            onChange={this.handleInputChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-info"
          id="save"
          onClick={this.handleFormSubmit}
        >
          Save
        </button>

        <Container itemList={this.state.feed} title="Feed"></Container>
      </div>
    );
  }
}
export default Eat;
