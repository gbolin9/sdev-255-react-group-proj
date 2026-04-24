// "use client";

export default function Teacher(){
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
    
    var instructorName = "steve"

    return(
        <div>
            <main>
                <div className="justify-center">
                    <h1>Welcome {instructorName} </h1>
                </div>
                <div>
                    <h1>Course Builder</h1>
                </div>
                <form className="text-center space-y-4" action={submitForm}>
                    <div>
                        <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
                        <input className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="courseName"  name="courseName" required></input>
                    </div>    
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Course ID</label>
                        <input className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="message" required name="message"></input>
                    </div>
                   <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea className="border border-black bg-white Focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="message" required name="message" rows={4} placeholder="Enter a brief description of the class..."></textarea>
                    </div>
                    <button type="submit" className="flex-grow-0 text-white bg-blue-600 rounded-md p-3">
                        Submit Class
                    </button>
                </form>
                <div>
                    {/* courses in my catalog */}
                    {/* this can be represented with a tble instead of buttons again */}
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
            </main>
        </div>

    
    )

}