const School = require("../models/schoolModel");

// 📌 Register a new school
const schoolRegister = async (req, res) => {
  try {
    const { name, subName, code, affiCode, board, address, email, contact } =
      req.body;

    if (!name || !code || !address) {
      return res.status(400).json({
        success: false,
        message: "Name, Code, and Address are required fields.",
      });
    }

    const existingSchool = await School.findOne({
      $or: [{ code }, { email }],
    });

    if (existingSchool) {
      return res.status(400).json({
        success: false,
        message: "A school with this code or email already exists.",
      });
    }

    const newSchool = new School({
      name,
      subName,
      code,
      affiCode,
      board,
      address,
      email,
      contact,
    });

    await newSchool.save();

    res.status(201).json({
      success: true,
      message: "School registered successfully!",
      data: newSchool,
    });
  } catch (error) {
    console.error("Error registering school:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while registering school.",
    });
  }
};

// 📌 Get School List (with optional search)
const schoolList = async (req, res) => {
  try {
    const search = req.query.search || "";

    // 🔍 Dynamic filter for search
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { code: { $regex: search, $options: "i" } },
            { board: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // 🧾 Fetch schools
    const schools = await School.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: schools.length,
      data: schools,
      message: "Fetched school list successfully!",
    });
  } catch (error) {
    console.error("Error fetching school list:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching school list.",
    });
  }
};

module.exports = { schoolRegister, schoolList };
