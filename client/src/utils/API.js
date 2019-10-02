import axios from "axios";

export default {

  // GETS INFO
  getFeed: function(feed) {
    return axios.get("/api/feed", feed);
  },
  getChange: function(change) {
    console.log("API.js");
    return axios.get("/api/change/", change);
  },
  getSleep: function(sleep) {
    return axios.get("/api/sleep/", sleep);
  },

  // POSTS INFO
  postChange: function(change) {
    console.log("API.js");
    return axios.post("/api/change/", change);
  },
  postFeed: function(feed) {
    return axios.post("/api/feed/", feed);
  },
  postSleep: function(sleep) {
    return axios.post("/api/sleep/", sleep);
  },
  login: function(login) {
    return axios.post("/api/login", login);
  },
  register: function(register) {
    return axios.post("/api/register", register);
  },

};