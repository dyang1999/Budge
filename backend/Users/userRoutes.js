const express = require("express");

const {
    userHandler
} = require("./userController");

const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch User
router.get("/", userHandler);


module.exports = router;