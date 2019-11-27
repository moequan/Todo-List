/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/** ROUTERS */
const todoRouter = require('./routes/todo');

const mongoose = require('mongoose')



/** INIT THE SERVER */
const app = express();

/** LOGS */
app.use(logger('dev'));

/** MONGOOSE */

mongoose.connect("mongodb://localhost:27017/Todo", {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
});
mongoose.connection.on(
 "error",
 console.error.bind(console, "connection error:")
);
mongoose.connection.on("open", () => {
 console.log("Connected to the database...");
});




/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/** STATIC FILES */
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/records', recordsRouter);
app.use('/orders', ordersRouter);

/** ERROR HANDLING */

app.use(function(req, res, next) {
  const err = new Error('Uuuups...');
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(400).send({
    error: {
      message: err.message
    }
  });
});

module.exports = app;
