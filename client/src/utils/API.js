import axios from "axios";


export default {
  
  // Gets all info
  getFeed: function() {
    return axios.get("/api/feedMe/");
  },
  getChange: function() {
    return axios.get("/api/changeMe/");
  },
  getZzz: function() {
    return axios.get("/api/zzz/");
  },

  // Saves email & password to database
  saveLogin: function() {
    return axios.post("/api/register")
  },

  // Saves time & details
  feedMe: function() {
    return axios.create("/api/feedMe")
  }
};

