import { connectDB } from "@/lib/db";
import Teacher from "@/models/Teacher";

export async function GET() {
  await connectDB();

  const teachers = await Teacher.find({});
  return Response.json(teachers);
}