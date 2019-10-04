import React, { Component } from "react";
// import PropTypes from "prop-types";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "./TimePicker.css";
import moment from "moment";

const format = "hh:mm a";

class Timer extends Component {
  state = {
    value: moment()
  };

  handleValueChange = value => {
    console.log(value && value.format(format));
    this.setState({ value });
  };

 

  render() {
    const { value } = this.state;
    return (
      <TimePicker
        showSecond={false}
        defaultValue={moment()}
        className="xxx"
        onChange={this.handleInputChange}
        format={format}
        use12Hours
        inputReadOnly
        id="timepicker"
      />
    );
  }
}
export default Timer;
