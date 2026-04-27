"use client";
import { useState } from "react";
import { CourseCodeInput } from "@/app/components/CourseCodeInput";
import DataTable from "@/app/components/DataTable";

export default function Page() {
  const [student] = useState("alex"); //removed setStudent, alex is being used a placeholder name
  const [addedCourses, setAddedCourses] = useState([]);


async function handleAddCourse(courseId) {
  try {
    const res = await fetch(`/api/course/${courseId}`);
    const course = await res.json();

    setAddedCourses(prev => [...prev, course]);
  } catch (err) {
    console.error("Course not found", err);
  }
}
  function handleRemoveCourse(codeToRemove) {
    setAddedCourses(prev =>
      prev.filter(code => code !== codeToRemove)
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">

      <h1 className="text-3xl text-center">
        Welcome {student}, to COURSE BUILDER
      </h1>
      {/* LIVE COURSES FROM DB */}
      <DataTable
        title="Available Courses"
        endpoint="/api/course"
        columns={[
          { header: "ID", field: "_id" },
          { header: "Name", field: "name" },
          { header: "Instructor", field: "instructor" }
        ]}
      />
      

            {/* USER ADDED COURSES (local state) */}
      <CourseCodeInput onSubmit={handleAddCourse} />
      <h2 className="text-2xl">Selected Courses</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-3">Course Code</th>
          </tr>
        </thead>
        <tbody>
          {addedCourses.map((course) => (
            <tr key={course._id}>
              <td className="border p-3">{course.name}</td>
              <td className="border p-3">{course._id}</td>
              <td className="border p-3">{course.description}</td>
              <td className="border p-3">{course.instructor}</td>

              {/* REMOVE BUTTON */}
              <td className="border p-3">
                <button
                  onClick={() => handleRemoveCourse(course._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}