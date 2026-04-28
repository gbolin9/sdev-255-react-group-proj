"use client";

import { useState } from "react";

export default function Page() {
  const [student] = useState("alex");

  const [courses, setCourses] = useState([]);

  const [mode, setMode] = useState("add"); // add | edit
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    id: "",
    name: "",
    subject: "",
    description: "",
    credits: "",
  });

  // ---------------------------
  // FORM HANDLING
  // ---------------------------
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm() {
    setForm({
      id: "",
      name: "",
      subject: "",
      description: "",
      credits: "",
    });

    setMode("add");
    setEditingId(null);
  }

  // ---------------------------
  // SUBMIT (ADD + EDIT)
  // ---------------------------
  async function handleSubmit(e) {
    e.preventDefault();

    const { id, name, subject, description, credits } = form;

    // basic validation
    if (!name || !subject || !description || !credits) return;

    // ---------------- ADD ----------------
    if (mode === "add") {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        alert("Failed to create course");
        return;
      }

      const created = await res.json();

      setCourses((prev) => [...prev, created]);
      resetForm();
      return;
    }

    // ---------------- EDIT ----------------
    if (mode === "edit") {
      if (!editingId) return;

      const res = await fetch(`/api/courses/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        alert("Failed to update course");
        return;
      }

      const updated = await res.json();

      setCourses((prev) =>
        prev.map((c) => (c._id === editingId ? updated : c))
      );

      resetForm();
    }
  }

  // ---------------------------
  // EDIT BUTTON
  // ---------------------------
  function handleEdit(course) {
    setMode("edit");
    setEditingId(course._id);
    setForm({
      id: course.id || "",
      name: course.name || "",
      subject: course.subject || "",
      description: course.description || "",
      credits: course.credits || "",
    });
  }

  // ---------------------------
  // DELETE BUTTON
  // ---------------------------
  async function handleDelete(id) {
    const res = await fetch(`/api/courses/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Failed to delete course");
      return;
    }

    setCourses((prev) => prev.filter((c) => c._id !== id));
  }

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Course Builder
      </h1>

      <h2 className="text-xl">Welcome {student}</h2>

      {/* FORM */}
      <div className="p-4 border rounded-lg space-y-4">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setMode("add")}
            className={`px-4 py-2 rounded ${
              mode === "add" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Add
          </button>

          <button
            type="button"
            onClick={() => setMode("edit")}
            className={`px-4 py-2 rounded ${
              mode === "edit" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Edit
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            name="id"
            placeholder="Course ID"
            value={form.id}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="name"
            placeholder="Course Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="subject"
            placeholder="Subject Area"
            value={form.subject}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="credits"
            placeholder="Credits"
            value={form.credits}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
          />

          <button
            type="submit"
            className="col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* LIST */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Your Courses
        </h2>

        {courses.length === 0 && (
          <p className="text-gray-500">
            No courses created yet.
          </p>
        )}

        <div className="space-y-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="border p-4 rounded flex justify-between items-start"
            >
              <div>
                <p>
                  <strong>{course.name}</strong> ({course.id})
                </p>
                <p>Subject: {course.subject}</p>
                <p>Credits: {course.credits}</p>
                <p className="text-sm text-gray-600">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(course)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(course._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Drop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}