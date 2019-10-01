const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
//passport config
require('./config/passport')(passport);
//db config
const db = require('./config/middleware/keys').mongoURI;
//connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connect :-)'))
    .catch(err => console.log(err));
//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');
//express bodyParser
app.use(express.urlencoded({ extended: true }));
//express session
app.use(session({
    secret: 'baby',
    resave: true,
    saveUninitialized: true
}));
//passport middleware
app.use(passport.initialize());
app.use(passport.session());
// connect flash
app.use(flash());
//global variables
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
//??????????
//routes
app.use('/', require('../routes/api/index'));
app.use('/users', require('../routes/api/users'));
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server started on port ${PORT}`));