const express = require("express");

const {
    expenseHandler
} = require("./expenseController");

const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch User
router.get("/", expenseHandler);


module.exports = router;