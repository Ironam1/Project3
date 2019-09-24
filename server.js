const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(logger("dev"));

// Require database

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/babytracker", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Cannot connect to database" + err);
    }
  );

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
