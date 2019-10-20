import axios from "axios";

export default {
  getFeed: function(feed) {
    return axios.get("/api/feed", { params: feed });
  },
  getChange: function(change) {
    return axios.get("/api/change/", { params: change });
  },
  getSleep: function(sleep) {
    return axios.get("/api/sleep/", { params: sleep });
  },

  // POSTS INFO
  postChange: function(change) {
    return axios.post("/api/change/", change);
  },
  postFeed: function(feed) {
    return axios.post("/api/feed/", feed);
  },
  postSleep: function(sleep) {
    console.log("this is the sleep object: ", sleep)
    return axios.post("/api/sleep/", sleep);
  },
  login: function(login) {
    return axios.post("/api/login", login);
  },
  register: function(register) {
    return axios.post("/api/register", register);
  }
};
