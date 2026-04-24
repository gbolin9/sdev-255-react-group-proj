"use client";


export default function StudentPage() {

  function handleClick() {
    alert("Build course clicked");
  }
  function Courses() {
    
    return (
      <div>
        <h2>Availiable Courses</h2>
        <ul>
          <li>Course 1</li>
          <li>Course 1</li>
          <li>Course 1</li>
         
        </ul>

      </div>
    )

  }
  return (
    <div>
      <h1 className="text-center">Course Builder</h1>

      <button
        className="px-4 text-center"
        onClick={handleClick}
      >
        Build a course
      </button>

      <h1 className="text-center">My Courses</h1>
      <Courses/>

      <table className="w-full border-collapse">
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
            <td className="px-4 py-4 border">Intro to Biology</td>
            <td className="px-4 py-4 border">Rodriguez</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}