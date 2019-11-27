const express = require('express');
const router = express.Router();


const {
  getTodo,
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo
} = require('../controllers/todoController');

router
  .route('/')
  .get(getTodo)


router
  .route('/:id')
  .get(getTodo)
  .delete(deleteTodo)
  .put(updateTodo);

module.exports = router;
