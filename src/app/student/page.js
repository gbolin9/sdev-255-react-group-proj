"use client";

export default function Student() {
    function handleClick() {
        alert("Button Clicked!!")
    }

    var studentName = "steve"
    
    return( 
        <div>
            <h1 className="justify-cetner">Welcome, {studentName}</h1>
            <div className="flex justify-center">

                <button className="px-4" onClick={handleClick}>Add Course</button>
                <button className="px-4" onClick={handleClick}>Edit Course</button>
                <button className="px-4" onClick={handleClick}>Drop Course</button>
                <button className="px-4" onClick={handleClick}>Zen Button</button>
            </div>
            <h1>Course Builder</h1>
            <button className="px-4" onClick={handleClick}>Build a course</button>
            <h1>My Courses</h1>
            {/* there are buttons here in the original document (courseStudent.html) but they don't seem 
            to suit it's purpose. I'm replacing them with a table and table headers */}
            <table>
                <tr className="flex align-center justify-center">
                    <th className="px-4 py-4">Course Name</th>
                    <th className="px-4 py-4">Course ID</th>
                    <th className="px-4 py-4">Course Desiciption</th>
                    <th className="px-4 py-4">Course Instructor</th>
                </tr>
                <tr className="flex justify-center">
                    <td className="px-4 py-4">Biology</td>
                    <td className="px-4 py-4">129-cfd</td>
                    <td className="px-4 py-4">Intro to biology</td>
                    <td className="px-4 py-4">Rodriguez</td>
                </tr>
            </table>
        </div>
        
    )
}