"use client";


export default function Home() {

  function handleClick() {
    alert("Course clicked!");
  }

  

  return (
      <div className="flex justify-center text-xl px-5">
        <h1>The following are our currently availble courses: </h1>
      
      
      
      
      <div className="flex justify-center underline px-5 mx-auto">
        <ul>
          <li>
            <p>"Fetch list of courses here from db"</p>
          </li>
        </ul>
      </div>
    </div>
  );
}