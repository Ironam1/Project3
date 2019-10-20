import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { throws } from "assert";

class DatePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = date => {
    this.setState(
      {
        date: date
      },
      () => this.props.onDateChange(this.state.date)
    );
  };

  render() {
    return (
      <DatePicker
        name="date"
        selected={this.state.date}
        onChange={this.handleChange}
        id="datepicker"
      />
    );
  }
}

export default DatePick;
