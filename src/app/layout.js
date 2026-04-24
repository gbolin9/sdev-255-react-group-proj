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
    <Link href="/" className="px-8">Home</Link>
    <Link href="/login" className="px-8">Login</Link>
    <Link href="/teacher" className="px-8">Course Instructor Page</Link>
  </>)
}
function LoadStudent () {
  return (
  <>
    <Link href="/" className="px-8">Home</Link>
    <Link href="/login" className="px-8">Login</Link>
    <Link href="/student" className="px-8">Student Page</Link>
  </>)
}
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <h1  className="flex justify-center text-4xl italic py-15">Welcome to the Course Scheduler</h1>
          <nav className="flex items-center justify-center">
          <Link href="/" className="text-2xl px-8 py-5">Home</Link>
          <Link href="/login" className="text-2xl px-8 py-5">Login</Link>
          </nav>
        </div>


        {children}
      </body>
    </html>
  );
}


