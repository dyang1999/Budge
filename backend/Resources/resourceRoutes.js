const express = require("express");

const {
    resourceHandler
} = require("./resourceController");

const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch all resources
router.get("/", resourceReadHandler);

// Store resource
router.post("/save", resourceSaveHandler);

module.exports = router;