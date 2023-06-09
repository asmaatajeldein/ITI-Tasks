const express = require("express");
const { createUser } = require("../controllers/userControllers");
const { userValidation } = require("../utils/userValidation");
const router = express.Router();

// router.get("/", (res, req) => {});

router.post("/", userValidation, createUser);

module.exports = router;
