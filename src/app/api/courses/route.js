import { connectDB } from "@/lib/db";
import Course from "@/app/models/course";

// GET all courses
export async function GET() {
  await connectDB();
  const courses = await Course.find({});
  return Response.json(courses);
}

// CREATE course
export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const newCourse = await Course.create({
    id: body.id,
    name: body.name,
    subject: body.subject,
    description: body.description,
    credits: Number(body.credits),
  });

  return Response.json(newCourse);
}