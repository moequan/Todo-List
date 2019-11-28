const express = require('express');
const router = express.Router();


const {
  getTodos,
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo
} = require('../Controller/todoController');

router
  .route('/')
  .get(getTodo)
  .post(addTodo)


router
  .route('/:listItem')
  .get(getTodo)
  .delete(deleteTodo)
  .put(updateTodo)


module.exports = router;
