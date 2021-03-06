import React, { Component } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "./TimePicker.css";
import moment from "moment";

const format = "hh:mm a";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment()
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange = value => {
    console.log(value.format('lll'));
    this.setState(
      {
        value: value
      },
      () => this.props.onTimeChange(this.state.value)
    );
  };

  render() {
    return (
      <TimePicker
        showSecond={false}
        defaultValue={this.state.value}
        className="xxx"
        onChange={this.handleValueChange}
        format={format}
        use12Hours
        inputReadOnly
        id="timepicker"      
      />
    );
  }
}
export default Timer;
