const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

// Routes
router.post("/register", schoolController.schoolRegister); // Create class
router.get("/school-list", schoolController.schoolList); // Update class

module.exports = router;
