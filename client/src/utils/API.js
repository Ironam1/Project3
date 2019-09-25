import axios from "axios";

export default {
  // Gets all info
  getFeed: function() {
    return axios.get("/api/feedMe/");
  },
  getChangeTime: function() {
    console.log("API.js")
    return axios.post("/api/change/");
  },
  getZzz: function() {
    return axios.get("/api/zzz/");
  },

  // Saves email & password to database
  saveLogin: function() {
    return axios.post("/api/login");
  },

  // Saves time & details
  feedMe: function() {
    return axios.post("/api/feedMe");
  }
};
