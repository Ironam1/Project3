const express = require("express");
// zd add 
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const routes = require("./routes");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
// zd adding new code to middleware (start)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// zd end
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
// zd adding to db code (start)
const db = require("./config/keys").mongoURI;
// zd end
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
// zd adding to db code (start)
  mongoose.connect(
    db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// zd adding passports middleware
app.use(passport.initialize());
// zd requiring passport config
require("./config/passport")(passport);
// zd requiring passport route
app.use("/api/users", users);
//zd end
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
