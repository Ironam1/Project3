import React, { Component } from "react";
import "./style.css";
import "rc-time-picker/assets/index.css";
import moment from "moment";
// import TimePicker from "rc-time-picker";
import DatePicker from "../components/DatePicker";
import Timer from "../components/TimePicker";
import Timer2 from "../components/TimePicker2"
import API from "../utils/API";
import SleepContainer from "../components/SleepContainer/sleepContainer";
import NavBar from "../components/NavBar/NavBar";

const format = "h:mm a";

class Sleep extends Component {
  state = {
    user: "connie@mail.com",
    date: "",
    value1: moment(),
    value2: moment(),
    details: "",
    sleep: []
  };

  handleTimeChange = timeValue => {
    this.setState({ value1: timeValue });
  };

  handleTimeChange2 = timeValue => {
    this.setState({ value2: timeValue });
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

  componentDidMount = () => {
    const user = {
      user: this.state.user,
      date: this.state.date
    };

    API.getSleep(user)
      .then(res => {
        this.setState({ sleep: res.data });
      })
      .catch(err => console.log("Error" + err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.postSleep({
      user: this.state.user,
      date: this.state.date,
      starttime: this.state.value1.format(format),
      endtime: this.state.value2.format(format),
      details: this.state.details
    }).then(res =>
      this.setState({
        value1: res.data,
        value2: res.data,
        details: ""
      })
    );

    window.location.reload();
  };

  render(props) {
    return (
      <div className="container">
        <NavBar />
        <h2>Sleep</h2>
        <DatePicker onDateChange={this.DateChange} />

        <h6>Asleep</h6>
        <Timer onTimeChange={this.handleTimeChange} />

        <h6>to</h6>

        <h6>Awake</h6>
        <Timer2 onTimeChange2={this.handleTimeChange2} />

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

        <SleepContainer
          itemList={this.state.sleep}
          title="Sleep"
        ></SleepContainer>
      </div>
    );
  }
}

export default Sleep;
