import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Course Scheduler",
  description: "Manage courses",
};

// this file contains shared components for the pages
function LoadTeacher() {
  return (
  <>
    <Link href="/" className="bg-blue-400 px-8">Home</Link>
    <Link href="/login" className="bg-yellow-400 px-8">Login</Link>
    <Link href="/teacher" className="bg-red-400 px-8">Course Instructor Page</Link>
  </>)
}
export function LoadStudent () {
  return (
  <>
    <Link href="/" className="bg-blue-400 px-8">Home</Link>
    <Link href="/login" className="bg-yellow-400 px-8">Login</Link>
    
  </>)
}
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
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <h1  className="flex justify-center text-4xl italic py-15">Welcome to the Course Scheduler</h1>

          <nav className="flex items-center justify-center border">
            <Link href="/"      className="bg-blue-400 text-2xl px-8 py-5">Home</Link>
            <Link href="/login" className="bg-yellow-400  text-2xl px-8 py-5">Login</Link>
            <Link href="/student" className="bg-pink-400  px-8">Student Page</Link>
            <Link href="/teacher" className="bg-red-400 px-8">Course Instructor Page</Link>
           
          </nav>
        </div>

        {/* This code causes every page to have a list shown up. I do not believe that is needed*/
        /* <div className="flex justify-center text-xl px-5">
          <h1 className="text-xl">The following are our currently available courses: </h1>
      
            <div className="flex justify-center mx-auto">
              <Courses/>
            </div>
        </div> */}

        {children}
      </body>
    </html>
  );
}


