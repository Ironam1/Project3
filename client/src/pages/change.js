import React, { Component } from "react";
import "./style.css";
import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import Timer from "../components/TimePicker";
import API from "../utils/API";
import Container from "../components/Container/container";
import NavBar from "../components/NavBar/NavBar";

class Change extends Component {
  state = {
    user: "connie@mail.com",
    date: moment(),
    value: moment(),
    details: "",
    change: []
  };

  componentDidMount = () => {
    const user = {
      user: this.state.user,
      date: this.state.date
    };

    API.getChange(user)
      .then(res => {
        this.setState({ change: res.data });
      })
      .catch(err => console.log("Error" + err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.postChange({
      user: this.state.user,
      date: this.state.date,
      time: this.state.value.format("hh:mm a"),
      details: this.state.details
    }).then(res =>
      this.setState({
        date: res.data,
        value: "",
        details: ""
      })
    );
    console.log("date: " + this.state.date);
    console.log("time: " + this.state.value.format("hh:mm a"));
    console.log("details: " + this.state.details);

    window.location.reload();
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

  render() {
    return (
      <div className="container">
        <NavBar />
        <h2>Change Me</h2>
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

        <Container itemList={this.state.change} title="Changes">
        </Container>
      </div>
    );
  }
}

export default Change;
