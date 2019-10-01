import React, { Component } from "react";
import "./style.css";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import TimePicker from "rc-time-picker";
import Date from "../components/DatePicker";
import Timer from "../components/TimePicker";
import API from "../utils/API";

const format = "h:mm a";

class Sleep extends Component {
  state = {
    user: "connie@mail.com",
    date: "1999-01-01 05:00:00.000Z",
    value1: moment(),
    value2: moment(),
    details: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getSleep({
      user: "connie@mail.com",
      date: "1999-01-01 05:00:00.000Z",
      starttime: this.state.value1.format("hh:mm a"),
      endTime: this.state.value2.format("hh:mm a"),
      details: this.state.details
    }).then(res =>
      this.setState({
        value1: res.data,
        value2: res.data,
        details: ""
      })
    );

    console.log("time: " + this.state.value1.format("hh:mm a"));
    console.log("time: " + this.state.value2.format("hh:mm a"));
    console.log("details: " + this.state.details);
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
        <h2>Sleep</h2>
        <Date />

        <h6>Asleep</h6>
        <Timer />

        <h6>to</h6>

        <h6>Awake</h6>
        <TimePicker
          showSecond={false}
          className="xxx"
          // onChange={onChange}
          format={format}
          use12Hours
          inputReadOnly
          placeholder="awake time"
        />

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
      </div>
    );
  }
}

export default Sleep;
