Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@zfdunn 
2
10Ironam1/Project3
 Code Issues 16 Pull requests 1 Projects 1 Wiki Security Insights
Project3/client/src/pages/sleep.js
@conniepope conniepope button click event taking in inputs
1697ea9 2 days ago
60 lines (50 sloc)  1.48 KB
  
import React, { Component } from "react";
import "./style.css";

import 'rc-time-picker/assets/index.css';
// import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class Sleep extends Component {
    state = {
    };

// function onChange(value) {
//   console.log(value && value.format(format));
// }

    render() {
        return (
        <div class="container">
            <h2>Sleep</h2>

            <h6>Asleep</h6>
            <TimePicker
                showSecond={false}
                defaultValue={now}
                className="xxx"
                // onChange={onChange}
                format={format}
                use12Hours
                inputReadOnly
            />

            <h6>to</h6>

            <h6>Awake</h6>
            <TimePicker
                showSecond={false}
                defaultValue={now}
                className="xxx"
                // onChange={onChange}
                format={format}
                use12Hours
                inputReadOnly
            />

            <div class="input-group">
                <div class="input-group-prepend">
                <label class="input-group-text">Details</label>
                </div>
                <textarea class="form-control"></textarea>
            </div>
            <button type="button" class="btn btn-info" id="save">Save</button>
        </div>
    )};
}

export default Sleep;