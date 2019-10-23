import React, { Component } from "react";
import "./style.css";
import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import Timer from "../components/TimePicker";
import API from "../utils/API";
import Container from "../components/Container/container";
import NavBar from "../components/NavBar/NavBar";

class Eat extends Component {
  state = {
    user: "connie@mail.com",
    date: "",
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
      })
      .catch(err => console.log("Error" + err));
  };

  handleTimeChange = timeValue => {
    this.setState({ value: timeValue });
  };

  DateChange = dateNow => {
    this.setState({ date: dateNow });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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

    window.location.reload();
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <h2>Feed Me</h2>
        <DatePicker onDateChange={this.DateChange} />
        <p></p>
        <Timer onTimeChange={this.handleTimeChange} />

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
