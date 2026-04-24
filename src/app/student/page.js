"use client";


export default function StudentPage() {

  function handleClick() {
    alert("Build course clicked");
  }
  function Courses() {
    
    return (
      <div className= "py-5">
        <h2 className= "underline text-2xl">Availiable Courses</h2>
        <ul>
          <li>"fetch data goes here"</li>
          <li>"here"</li>
          <li>"and here"</li>
         
        </ul>

      </div>
    )

  }
  return (
    <div className = "py-8">
      <button className="px-4 text-center bg-pink-500" onClick={handleClick}>
        Build a course
      </button>

      <Courses/>

      <table className="w-full border-collapse">
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
    </div>
  );
}