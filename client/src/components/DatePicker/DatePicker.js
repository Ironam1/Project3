import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { start } from "repl";
// CSS Modules, react-datepicker-cssmodules.css

class DatePick extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    // console.log(startDate);
    // if (startDate === this.state.startDate) return;
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePick;
