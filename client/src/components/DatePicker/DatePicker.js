import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatePick extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    // console.log(this.state.startDate);
    // if (startDate === this.state.startDate) return;
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        name="date"
        selected={this.state.startDate}
        onChange={this.handleChange}
        id="datepicker"
      />
    );
  }
}

export default DatePick;