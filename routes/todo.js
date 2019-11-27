const express = require('express');
const router = express.Router();


const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser
} = require('../controllers/usersController');

router
  .route('/')
  .get(getTodo)


router
  .route('/:id')
  .get(getTodo)
  .delete(deleteTodo)
  .put(updateTodo);

module.exports = router;
