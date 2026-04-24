// "use client";

export default function TeacherPage(){
        async function submitForm(FormData) {
        "use server";
        const formFields = {
            email: FormData.get("email"),
            message: FormData.get("message")
        };
        console.log("formFields", formFields);
        console.log("TODO: Send these form field values to the backend");
        
        return formFields;
    }
    
    var instructorName = "Dr. Rodriguez"

    return(
        <div>
            <main>
                <div className="py-8 justify-center">
                    <h1 className="text-3xl italic">Welcome, {instructorName} </h1>
                </div>
                
                <form className="border justify-center text-center space-y-2" action={submitForm}>
                    <div>
                        <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
                        <input className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="courseName" required name="courseName" placeholder="Course Name" ></input>
                    </div>    
                    <div>
                        <label htmlFor="courseID" className="block text-sm font-medium text-gray-700">Course ID</label>
                        <input className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="courseID" required name="courseID" placeholder="Course ID"></input>
                    </div>
                   <div>
                        <label htmlFor="subjectArea" className="block text-sm font-medium text-gray-700">Subject Area</label>
                        <input className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="subjectArea" required name="subjectArea" placeholder="Subject Area"></input>
                    </div>
                   <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="description" required name="description" rows={4} placeholder="Enter a brief description of the class..."></textarea>
                    </div>
                   <div>
                        <label htmlFor="credits" className="block text-sm font-medium text-gray-700">Credits</label>
                        <input type="number" className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="credits" required name="credits" min="1" max = "3" placeholder="0"></input>
                    </div>
                    <div>
                        <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">Teacher</label>
                        <input className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="teacher" required name="teacher" placeholder="Teacher Name"></input>
                    </div>
                    <button type="submit" className="flex-grow-0 text-white bg-blue-600 rounded-md p-4">
                        Submit Class
                    </button>
                </form>
                <div className= "py-5">
                    {/* courses in my catalog */}
                    {/* this can be represented with a tble instead of buttons again */}
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
            </main>
        </div>

    
    )

}