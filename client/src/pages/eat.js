import React, { Component } from "react";
import "./style.css";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import Timer from "../components/TimePicker";

const format = "h:mm a";

class Eat extends Component {
  state = {
    value: moment(),
    details: ""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    API.getFeed({
      time: this.state.value.format("hh:mm a"),
      details: this.state.details
    })
      .then(res =>
        this.setState({
          value: res.data,
          details: ""
        })
      )

    console.log("time: " + this.state.value.format("hh:mm a"));
    console.log("details: " + this.state.details);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
          render() {
              return(
              <div className="container">
                  <h2>Feed Me</h2>

            <TimePicker
            showSecond={false}
            defaultValue={moment()}
            className="xxx"
            format={format}
            use12Hours
            inputReadOnly
            name="value"
            />

        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">Details</label>
          </div>
          <textarea className="form-control" 
                    id="details" 
                    name="details"  
                    onChange={this.handleInputChange} >
         </textarea>
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
    )};
}
export default Eat;