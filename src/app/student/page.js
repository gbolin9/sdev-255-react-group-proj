"use client";
import { useState } from "react";
import { CourseCodeInput } from "@/app/components/CourseCodeInput";

export default function Page() {
  const [student, setStudent] = useState("alex") //alex is a placeholder name
  const [addedCourses, setAddedCourses] = useState([]);

  function handleAddCourse(code) {
    setAddedCourses((prev) => [...prev, code]);
  }

  function handleRemoveCourse(codeToRemove) {
  setAddedCourses((prev) =>
    prev.filter((code) => code !== codeToRemove)
  )};

  function handleClick() {
    alert("Build course clicked");
  }

  return ( 
    <div className="max-w-600 mx-auto px-20 py-8 space-y-6">
      <h1 className="text-center">Course Builder</h1>

      {/* added styling to make button more apparent */}

      <h1 className="text-3xl">Welcome {student}, to course builder</h1>
      <h2 className="text-2xl">Current Courses:</h2>
      <table className="w-full border-collapse"> 
        {/* needs to populate from DB */}
      {/* current courses */}
        <thead>
          <tr>
            <th className="px-4 py-4 border">Course Name</th>
            <th className="px-4 py-4 border">Course ID</th>
            <th className="px-4 py-4 border">Course Description</th>
            <th className="px-4 py-4 border">Course Instructor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-4 py-4 border">Biology</td>
            <td className="px-4 py-4 border">129-cfd</td>
            <td className="px-4 py-4 border">Intro to biology</td>
            <td className="px-4 py-4 border">Rodriguez</td>
          </tr>
        </tbody>
      </table>
  
    <h2 className="text-2xl">Available Courses</h2>
      <table className="w-full border-collapse">
      {/* needs to populate from DB */}
      {/* course catalog */}
        <thead>
          <tr>
            <th className="px-4 py-4 border">Course Name</th>
            <th className="px-4 py-4 border">Course ID</th>
            <th className="px-4 py-4 border">Course Description</th>
            <th className="px-4 py-4 border">Subject Area</th>
            <th className="px-4 py-4 border">Credits</th>
            <th className="px-4 py-4 border">Course Instructor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td className="px-4 py-4 border">Biology</td>
              <td className="px-4 py-4 border">129</td>
              <td className="px-4 py-4 border">Intro to Biology</td>
              <td className="px-4 py-4 border">Science</td>
              <td className="px-4 py-4 border">3</td>
              <td className="px-4 py-4 border">Rodriguez</td>
          </tr>
        </tbody>
      </table>
      <CourseCodeInput onSubmit={handleAddCourse} />
      
      {/* <button
          onClick={() => handleRemoveCourse(code)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Remove
        </button> */}






      <table className="w-full border-collapse">
      {/* needs to populate from DB */}
      {/* courses to add or modify */}
        <thead>
          <tr>
            <th className="px-4 py-4 border">Course Name</th>
            <th className="px-4 py-4 border">Course ID</th>
            <th className="px-4 py-4 border">Course Description</th>
            <th className="px-4 py-4 border">Course Instructor</th>
          </tr>
        </thead>

        <tbody>
          {addedCourses.map((code, index) => (
            <tr key={index}>
              <td className="px-4 py-4 border">Course</td>
              <td className="px-4 py-4 border">{code}</td>
              <td className="px-4 py-4 border">—</td>
              <td className="px-4 py-4 border">—</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-150"
        onClick={handleClick}
      >
        Build course
      </button>
    </div>
  );
}
