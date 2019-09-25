import React, { Component } from "react";
import "./style.css";
// import DatePicker from "../components/DatePicker";
import "rc-time-picker/assets/index.css";
// import ReactDom from 'react-dom';
import moment from "moment";
import TimePicker from "rc-time-picker";
import API from "../utils/API";
// import App from "../App"

const format = "hh:mm a";
// const now = moment()
//   .hour(0)
//   .minute(0);


class Change extends Component {
  state = {
    value: moment(),
    // user: [],
    details: ""
  };

  // getChangeTime = () => {
  //   console.log("handleInputChange" + this.setState)
  //   API.getChangeTime()
  //     .then(res =>
  //       this.setState({
  //         value: res.data,
  //         details: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleFormSubmit = (event) => {
    event.preventDefault();

    API.getChangeTime({
      value: this.state.value,
      details: this.state.details
    })
      .then(res =>
        this.setState({
          value: res.data,
          details: ""
      
        })
      )

    // this.setState({ value });
    // this.setState({ details });

    // this.getChangeTime(this.state.value.format('hh:mm:ss'));
    // this.getChangeTime(this.state.details);
    console.log("time: " + this.state.value.format('hh:mm:ss'));
    console.log("details: " + this.state.details);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <h2>Change Me</h2>
        <TimePicker
          showSecond={false}
          defaultValue={value}
          className="xxx"
          onChange={this.handleInputChange}
          format={format}
          use12Hours
          inputReadOnly
          name="value"
          
        />

        
        <div className="input-group">
          <div className="input-group-prepend">
            <label className="input-group-text">Details</label>
          </div>
          <textarea className="form-control" id="details" name="details"  onChange={this.handleInputChange} >
          </textarea>
        </div>
        <button
          type="button"
          className="btn btn-info"
          id="save"
          onClick={this.handleFormSubmit}
          // value={details => this.state.details(details)}
          >
          Save
        </button>
      </div>
        // 
    );
  }
}


export default Change;