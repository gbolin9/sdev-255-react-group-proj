import { connectDB } from "@/lib/db";
import Course from "@/app/models/course";


// UPDATE course
export async function PUT(req, { params }) {
  await connectDB();

  const body = await req.json();

  const updated = await Course.findByIdAndUpdate(
    params.id,
    {
      id: body.id,
      name: body.name,
      subject: body.subject,
      description: body.description,
      credits: Number(body.credits),
    },
    { new: true }
  );

  return Response.json(updated);
}

// DELETE course
export async function DELETE(req, { params }) {
  await connectDB();

  await Course.findByIdAndDelete(params.id);

  return Response.json({ success: true });
}