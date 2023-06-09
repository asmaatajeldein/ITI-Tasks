const jwt = require("jsonwebtoken");
const AppError = require("./AppError");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(new AppError("Please provide a token", 404));
  const { id } = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(id);
  if (!user) return next(new AppError("invalid token", 404));
  req.user = user;
  next();
};

module.exports = { verifyToken };
