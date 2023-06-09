const Todo = require("../models/Todo");

const createTodo = async (req, res, next) => {
  const { title } = req.body;
  const todo = await Todo.create({ title: title, user: req.user._id });
  res.send(todo);
};

const getTodos = async (req, res, next) => {
  const todos = await Todo.find({ user: req.user._id }).populate({
    path: "user",
    select: "email" // "email password"
  });
  res.send(todos);
};

module.exports = { createTodo, getTodos };
