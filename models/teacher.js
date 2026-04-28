// const db = require("../lib/db")

// const Teacher = db.model("Teacher",{
//     firstName: String,
//     lastName: String,
//     loginName: {type: String, unique: true},
//     password: String
// })

// module.exports = Teacher;

import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  teacherId: Number,
  name: String,
  password: String,
});

export default mongoose.models.Teacher ||
  mongoose.model("Teacher", TeacherSchema);