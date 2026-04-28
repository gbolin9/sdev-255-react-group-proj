const db = require("../../lib/db")

const Student = db.model("Student",{
    firstName: String,
    lastName: String,
    loginName: {type: String, unique: true},
    password: String
})

module.exports = Student;


// under construction bb <3