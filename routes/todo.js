const express = require('express');
const router = express.Router();

const {
  getTodo,
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo
} = require('../Controller/todoController');

router
  .route('/')
  .get(getUsers)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ name: 'MyToDo' });
});

module.exports = router;
