const Todo = require("../Models/Todo")
const createError = require("http-errors")

exports.getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    next(error)
  }
};

exports.addTodo = async (req, res, next) => {
  try {
    const todo= new Todo(req.body);

    await todo.save();
    res.status(200).send(todo);
  } catch (e) {
    next(e);
  }
};


// exports.getTodo = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const todo = await Todo.findById(id);
//     if (!todo) throw new createError.NotFound();
//     res.status(200).send(user);
//
//   } catch (error) {
//     next(error)
//   }
//
// };

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send(todo)
  } catch (error) {
    next(error)
  }
  res.status(200).send(todo);
};

exports.updateTodo = async (req, res, next) => {

  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) throw new createError.NotFound();
    res.status(200).send(todo);

  } catch (error) {
    next(error)
  }

};
