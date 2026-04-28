// "use client";

// function Courses() {
    
//   return (
//     <div className= "py-5">
//       <h2 className= "underline text-2xl">Availiable Courses</h2>
//       <ul>
//         <li>"fetch data goes here"</li>
//         <li>"here"</li>
//         <li>"and here"</li>
       
//       </ul>

//     </div>
//   )

// }
// export default function Home() {

//   function handleClick() {
//     alert("Course clicked!");
//   }

  

//   return (
//     <div></div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const [coursesRes, teachersRes] = await Promise.all([
          fetch("/api/courses"),
          fetch("/api/teachers"),
        ]);

        if (!coursesRes.ok || !teachersRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const coursesData = await coursesRes.json();
        const teachersData = await teachersRes.json();

        const teacherMap = {};
        teachersData.forEach((t) => {
          teacherMap[t.teacherId] = t;
        });

        setCourses(coursesData);
        setTeachers(teacherMap);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="py-5">Loading courses...</p>;
  }

  if (error) {
    return <p className="py-5 text-red-600">{error}</p>;
  }

  return (
    <div className="py-5">
      <h2 className="underline text-2xl mb-4">Available Courses</h2>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => {
            const teacher = teachers[course.teacherId];

            return (
              <li
                key={course.courseId}
                className="border p-4 rounded-md shadow-sm"
              >
                <h3 className="text-lg font-semibold">
                  {course.name}
                </h3>

                <p>
                  <strong>Course ID:</strong> {course.courseId}
                </p>

                <p>
                  <strong>Teacher:</strong>{" "}
                  {teacher ? teacher.name : "Unknown Teacher"}
                </p>

                <p>
                  <strong>Description:</strong> {course.description}
                </p>

                <p>
                  <strong>Subject Area:</strong> {course.subjectArea}
                </p>

                <p>
                  <strong>Credits:</strong> {course.credits}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Home() {
  function handleClick() {
    alert("Course clicked!");
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Courses />
    </div>
  );
}