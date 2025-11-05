const Class = require("../models/classModel");
const User = require("../models/userModel");
const ClassTeacher = require("../models/classTeacherModel");
const mongoose = require("mongoose");

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

    console.log(userId);
    // Check if already exists
    const existClassTeacher = await ClassTeacher.findOne({
      $or: [
        {
          classId: classId,
        },
        {
          userId: userId,
        },
      ],
    });

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

const classTeacherList = async (req, res) => {
  try {
    const data = await ClassTeacher.aggregate([
      {
        $lookup: {
          from: "classes",
          localField: "classId",
          foreignField: "_id",
          as: "classList",
        },
      },
      { $unwind: "$classList" },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userList",
        },
      },
      { $unwind: "$userList" },

      // 👇 Combine everything into one flat object
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              "$userList",
              "$classList",
              "$$ROOT", // the original ClassTeacher document
              // merged user data
            ],
          },
        },
      },

      // optional: remove now-unnecessary fields
      {
        $project: {
          classList: 0,
          userList: 0,
          password: 0,
        },
      },
    ]);

    console.log(data);
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const classTeacherDetail = async (req, res) => {
  try {
    const { id } = req.params;

    // Convert the id from string to ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    const data = await ClassTeacher.aggregate([
      { $match: { _id: objectId } },

      {
        $lookup: {
          from: "classes",
          localField: "classId",
          foreignField: "_id",
          as: "classList",
        },
      },
      { $unwind: { path: "$classList", preserveNullAndEmptyArrays: true } },

      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userList",
        },
      },
      { $unwind: { path: "$userList", preserveNullAndEmptyArrays: true } },

      // Optional: rename original _id to avoid confusion
      {
        $addFields: {
          classTeacherId: "$_id",
        },
      },

      // Merge all data
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ["$userList", "$classList", "$$ROOT"],
          },
        },
      },

      // Clean up
      {
        $project: {
          classList: 0,
          userList: 0,
          password: 0,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: data[0] || null, // return single object
    });
  } catch (error) {
    console.error("Error fetching class teacher details:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  classTeacherRegister,
  classTeacherList,
  classTeacherDetail,
};
