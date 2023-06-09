const jwt = require("jsonwebtoken");

const User = require("../models/User");
const AppError = require("../utils/AppError");

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email: email, password: password });
  user.password = undefined;
  res.send(user);
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).select("+password");
  if (!user) return next(new AppError("Invaild credentials", 404));
  const isMatch = user.checkPassword(password);
  if (!isMatch) return next(new AppError("Invaild credentials", 404));
  user.password = undefined;
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });
  res.send({ token, user });
};

module.exports = {
  createUser,
  loginUser
};
