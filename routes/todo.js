const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//ROUTES
const todoRouter = require('./routes/todo');

/** INIT THE SERVER */
const app = express();

/** LOGS */
app.use(logger('dev'));

const {
  getTodo,
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo
} = require('../Controller/todoController');

router
  .route('/')
  .get(getTodo)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ name: 'MyToDo' });
});

module.exports = router;
