import { connectDB } from "@/lib/db";
import Course from "@/app/models/course";
import { NextResponse } from "next/server";

// REMOVED: force-static (PUT requests must be dynamic)

export async function PUT(req, { params }) {
  try {
    await connectDB();
    
    // Ensure params.id exists before proceeding
    const { id: courseId } = params;
    const body = await req.json();

    const updated = await Course.findByIdAndUpdate(
      courseId,
      { 
        name: body.name, 
        subject: body.subject, 
        description: body.description, 
        credits: Number(body.credits) 
      },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
