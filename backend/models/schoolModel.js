const { Schema, model } = require("mongoose");

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    subName: {
      type: String,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    affiCode: {
      type: String,
      trim: true,
    },
    board: {
      type: String,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    contact: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

const School = model("School", schoolSchema);

module.exports = School;
