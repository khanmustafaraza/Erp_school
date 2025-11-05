const express = require("express");
const router = express.Router();
const classTeacherController = require("../controllers/classTeacherController");

// Routes
router.post("/register", classTeacherController.classTeacherRegister); // Create class
// router.put("/update/:id", classController.classUpdate); // Update class
router.get("/class-teacher-list", classTeacherController.classTeacherList); // Get all classes
router.get(
  "/class-teacher-detail/:id",
  classTeacherController.classTeacherDetail
); // Get all classes

module.exports = router;
