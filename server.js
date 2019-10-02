require('dotenv').config();

const express = require("express");
const app = express();
const routes = require("./routes");
const logger = require("morgan");

// const PORT = process.env.PORT || 3001;
app.set('port', (process.env.PORT || 1337));


// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(logger("dev"));

// Require database
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
.connect(process.env.MONGODB_URI || "mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}", {
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
