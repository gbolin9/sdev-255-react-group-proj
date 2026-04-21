"use client";


export default function Home() {

  function handleClick() {
    alert("Course clicked!");
  }

  return (

    <div className="flex justify-center">
      <h1>The following are our currently availble courses: </h1>
    {/* add a line break here */}
      <div className="flex space-x-4 justify-center">
        <button onClick={handleClick}>Course Name</button>
        <button onClick={handleClick}>Course ID</button>
        <button onClick={handleClick}>Course Description</button>
      </div>
    </div>
  );
}