import React, { Component } from "react";
import "./style.css";
import Container from "../components/Container/container";
import API from "../utils/API";
import DatePicker from "../components/DatePicker";
import NavBar from "../components/NavBar/NavBar";
import SleepContainer from "../components/SleepContainer/sleepContainer";

class DailyLog extends Component {
  state = {
    user: "connie@mail.com",
    date: "1999-01-01 05:00:00.000Z",
    feed: [],
    sleep: [],
    change: []
  };

  componentDidMount = () => {
    const user = {
      user: this.state.user,
      date: this.state.date
    };

    API.getFeed(user)
      .then(res => {
        this.setState({ feed: res.data });
      })
      .catch(err => console.log("Error" + err));

    API.getSleep(user)
      .then(res => {
        this.setState({ sleep: res.data });
      })
      .catch(err => console.log("Error" + err));

    API.getChange(user)
      .then(res => {
        this.setState({ change: res.data });
      })
      .catch(err => console.log("Error" + err));
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <h2>Daily Log</h2>
        <DatePicker />
        <div className="log">
          <Container itemList={this.state.change} title="Changes"></Container>
          <SleepContainer
            itemList={this.state.sleep}
            title="Sleep"
          ></SleepContainer>
          <Container itemList={this.state.feed} title="Feed"></Container>
        </div>
      </div>
    );
  }
}
export default DailyLog;
