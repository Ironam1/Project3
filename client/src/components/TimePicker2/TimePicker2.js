import React, { Component } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import "./TimePicker2.css";
import moment from "moment";

const format = "hh:mm a";

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment()
    };
    this.handleValueChange2 = this.handleValueChange2.bind(this);
  }

  handleValueChange2 = value => {
    this.setState(
      {
        value: value
      },
      () => this.props.onTimeChange2(this.state.value)
    );
  };

  render() {
    return (
      <TimePicker
        showSecond={false}
        defaultValue={this.state.value}
        className="xxx"
        onChange={this.handleValueChange2}
        format={format}
        use12Hours
        inputReadOnly
        id="timepicker2"
      />
    );
  }
}
export default Timer2;
