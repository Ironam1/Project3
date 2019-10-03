require('dotenv').config();

const express = require("express");
const app = express();
const routes = require('./routes');
const logger = require('morgan');
const session = require('express-sessions');
const PORT = process.env.PORT || 3001;
// const passport = require('./passport');
// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(logger('dev'));

// Require database
const mongoose = require('mongoose');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

// Connect to the Mongo DB
mongoose
    .connect(
        process.env.MONGODB_URI ||
            'mongodb://babytracker:babytracker4@ds127044.mlab.com:27044/heroku_lpcfhcpj',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
        },
    )
    .then(
        () => {
            console.log('Database is connected');
        },
        (err) => {
            console.log('Cannot connect to database' + err);
        },
    );
const passport = require('passport');
app.use(passport.initialize());
app.use(
    passport.session({
        secret: process.env.SECRET,
    })
    // console.log(secret),
);
app.use((req, res, next) => {
    console.log('req.session', req.session);
    return next();
});

app.use((req, res, next) => {
    console.log('req.session', req.session);
    next();
});
app.post('/user', (req, res) => {
    console.log('user signup');
    req.session.username = req.body.username;
    res.end();
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
