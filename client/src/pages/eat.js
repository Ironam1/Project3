import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";

import 'rc-time-picker/assets/index.css';
// import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class Eat extends Component {
    state = {
        feed: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submitted");
        
        API.feedMe()
        .then(res => this.setState({ feed: res.data }))
        .catch(err => console.log("Error" + err))
        
    };


    onChange = value => {
      console.log(value && value.format(format));
    }

    render() {
        return(
        <div className="container">
            <h2>Feed Me</h2>

            <TimePicker
                showSecond={false}
                defaultValue={now}
                className="xxx"
                onChange={this.onChange}
                format={format}
                use12Hours
                inputReadOnly
            />,

            <div className="input-group">
                <div className="input-group-prepend">
                <label className="input-group-text">Details</label>
                </div>
                <textarea className="form-control"></textarea>
            </div>
            <button type="button" 
                    className="btn btn-info" 
                    id="save" 
                    onClick={this.handleFormSubmit}
                    value={this.state.feed}
                    >Save</button>
        </div>
    )};
}
export default Eat;