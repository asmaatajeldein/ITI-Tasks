const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

require("./db");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
const { loginUser } = require("./controllers/userControllers");
const { userValidation } = require("./utils/userValidation");
const { verifyToken } = require("./utils/verifyToken");

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/todos", verifyToken, todoRoutes);

// login
app.post("/login", userValidation, loginUser);

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    statusCode: statusCode,
    message: err?.message || "internal server error",
    errors: err?.errors
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port} ✨`);
});
