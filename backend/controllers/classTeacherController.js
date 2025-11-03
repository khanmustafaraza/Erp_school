const Class = require("../models/classModel");
const User = require("../models/userModel");
const ClassTeacher = require("../models/classTeacherModel");

const classTeacherRegister = async (req, res) => {
  try {
    let {
      userId,
      classId,
      mobile,
      fullName,
      email,
      subjects, // might be a string like "Math, English, Science"
      qualification,
      experience,
      salary,
      aadhaar,
      marital,
      address,
    } = req.body;

    // ✅ Convert comma-separated string to array
    if (typeof subjects === "string") {
      subjects = subjects.split(",");
    }

    if (!userId || !classId) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check if already exists
    const existClassTeacher = await ClassTeacher.findOne({ userId, classId });
    if (existClassTeacher) {
      return res.status(400).json({
        success: false,
        message: "Class Teacher already assigned to this class",
      });
    }

    // Save to DB
    const newClassTeacher = new ClassTeacher({
      userId,
      classId,
      mobile,
      fullName,
      email,
      subjects, // ✅ now always an array
      qualification,
      experience,
      salary,
      aadhaar,
      marital,
      address,
    });

    await newClassTeacher.save();

    return res.status(201).json({
      success: true,
      message: "Class Teacher Created Successfully",
      data: newClassTeacher,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};

const classUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format before using it in a query
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid class ID format",
      });
    }

    const updatedClass = await Class.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true } // runValidators ensures schema rules apply
    );

    if (!updatedClass) {
      return res.status(404).json({
        success: false,
        message: "Class not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: updatedClass,
    });
  } catch (error) {
    console.error("Error updating class:", error);
    res.status(500).json({
      success: false,
      message: "Error updating class. Please try again later.",
      error: error.message,
    });
  }
};

const classTeacherList = async (req, res) => {
  try {
    const classTeachers = await ClassTeacher.find({});
    const classTeacherArr = [];

    for (let index = 0; index < classTeachers.length; index++) {
      const element = classTeachers[index];

      // Fetch related data
      const userData = await User.findOne({ _id: element.userId });
      const classData = await Class.findOne({ _id: element.classId });

      // Combine all into a single object
      const finalObj = {
        classTeacher: element,
        user: userData,
        class: classData,
      };

      // Push to result array
      classTeacherArr.push(finalObj);
    }

    res.status(200).json({
      success: true,
      message: "All Fectched Successfully",
      data: classTeacherArr,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  classTeacherRegister,
  classTeacherList,
};
