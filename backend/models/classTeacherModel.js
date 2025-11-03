const mongoose = require("mongoose");
const { Schema, model } = mongoose;
//
//

const classTeacherSchema = new Schema(
  {
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
    mobile: {
      type: Number,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    subjects: {
      type: [],
    },
    qualification: {
      type: String,
    },
    experience: {
      type: Number,
    },
    salary: {
      type: Number,
    },
    aadhaar: {
      type: Number,
    },
    marital: {
      type: String,
    },
    address: {
      type: String,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model creation
const ClassTeacher = model("ClassTeacher", classTeacherSchema);

module.exports = ClassTeacher;
