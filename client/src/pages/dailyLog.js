import React, { Component } from "react";
import "./style.css";
import Container from "../components/Container/container";
import API from "../utils/API";
import DatePicker from "../components/DatePicker";

class DailyLog extends Component {
  state = {
    user: "connie@mail.com",
    date: "1999-01-01 05:00:00.000Z",
    feed: [],
    sleep: [],
    change: []
  }

  componentDidMount = () => {
    console.log("mounted");
    console.log(this.state.change)

    const user = {
      user: "connie@mail.com",
      date: "1999-01-01 05:00:00.000Z",
    }

    API.getFeed(user)
      .then(res => {
        this.setState({ feed: res.data })
        console.log(res.data)
      })
      .catch(err => console.log("Error" + err));

    API.getSleep(user)
      .then(res => {
        this.setState({ sleep: res.data })
      })
      .catch(err => console.log("Error" + err));

    API.getChange(user)
      .then(res => {
        this.setState({ change: res.data })
        console.log(res.data)
      })
      .catch(err => console.log("Error" + err));

  };

  render() {

      return (
  
        <div className="container">
        <h2>Daily Log</h2>
        <DatePicker />
        <div className="log">
          <Container
            itemList={this.state.change}
            title="Changes"> 
          </Container>
          <Container
            itemList={this.state.sleep}
            title="Sleep"> 
          </Container>
          <Container
            itemList={this.state.feed}
            title="Feed"> 
          </Container>
        </div>
      </div>
    );
  }
}
export default DailyLog;