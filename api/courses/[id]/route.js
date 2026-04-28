import { connectDB } from "@/lib/db";
import Course from "@/app/models/course";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const updated = await Course.findByIdAndUpdate(
      params.id,
      { 
        id: body.id, 
        name: body.name, 
        subject: body.subject, 
        description: body.description, 
        credits: Number(body.credits) 
      },
      { new: true, runValidators: true } // Ensures validation rules are run
    );
    
    if (!updated) return NextResponse.json({ error: "Course not found" }, { status: 404 });
    
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
