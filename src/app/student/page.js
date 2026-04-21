"use client";


export default function Page() {

  function handleClick() {
    alert("Build course clicked");
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
            <td className="px-4 py-4 border">Intro to biology</td>
            <td className="px-4 py-4 border">Rodriguez</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}