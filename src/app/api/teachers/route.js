import { connectDB } from "@/lib/db";
import Teacher from "@/app/models/teacher";



export async function GET() {
  await connectDB();

  const teachers = await Teacher.find({});
  return Response.json(teachers);
}