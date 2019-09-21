const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const routes = require("./routes");
app.use(routes);

const logger = require("morgan");
app.use(logger("dev"));

// Require database
const mongoose = require("mongoose");

// Define middleware
app.use(express.urlencoded({ exteded: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/babytracker", { useNewUrlParser: true })
    .then(() => {console.log("Database is connected") },
        err => { console.log("Cannot connecttodatabase" + err)}
    );
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});