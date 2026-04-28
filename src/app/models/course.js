// const db = require("../lib/db")

// const Course = db.model("Course",{
//     courseID: {type: String, unique: true, required: true},
//     teacherID: Number,
//     studentID: [Number],
//     courseName: String,
//     subectArea: String,
//     description: String,
//     credits: Number,
// })

// module.exports = Course;

import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  subject: String,
  description: String,
  credits: Number,
},
{ timestamps: true }
);

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema);