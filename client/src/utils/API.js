import axios from "axios";

export default {
  // Gets all info
  getFeed: function(feed) {
    return axios.get("/api/feedMe/", feed);
  },
  getChangeTime: function(change) {
    console.log("API.js");
    return axios.post("/api/change/", change);
  },
  getZzz: function(sleep) {
    return axios.get("/api/zzz/", sleep);
  },
  // Saves email & password to database
  saveLogin: function(login) {
    return axios.post("/api/login", login);
  },
  register: function(register) {
    return axios.post("/api/register", register);
  },

};
