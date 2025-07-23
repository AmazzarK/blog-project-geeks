import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createBlog,
  updateBlog,
  uploadImage,
} from "../utils/api";          // adjust the path if you placed utils elsewhere

const empty = { title: "", content: "", image: "" };

export default function AddBlog() {
  const { state }   = useLocation();
  const navigate    = useNavigate();
  const editing     = Boolean(state?.blog);
  const [form, setForm]           = useState(editing ? state.blog : empty);
  const [file, setFile]           = useState(null);     // raw File while uploading
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving]       = useState(false);
  const [error, setError]         = useState("");

  /* ────────── pick/change cover image ────────── */
  const onFileChange = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);

    try {
      setUploading(true);
      const { data } = await uploadImage(f);          // POST /api/upload
      setForm((prev) => ({ ...prev, image: data.url }));
    } catch (err) {
      console.error(err);
      setError("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  /* ────────── handle title / content ────────── */
  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* ────────── submit ────────── */
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.title || !form.content)
      return setError("Title & content are required.");

    try {
      setSaving(true);
      if (editing) {
        await updateBlog(form._id, form);   // token auto‑attached
        alert("Blog updated!");
      } else {
        await createBlog(form);
        alert("Blog created!");
      }
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to save blog.");
    } finally {
      setSaving(false);
    }
  };

  /* ────────── UI ────────── */
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {editing ? "Edit Blog" : "Add New Blog"}
      </h1>

      {error && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-2xl shadow-md space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="Blog title"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Cover image */}
        <div>
          <label className="block mb-2 text-sm font-medium">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
          {uploading && (
            <p className="text-sm text-gray-500 mt-2">Uploading…</p>
          )}
          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="mt-4 w-full h-64 object-cover rounded-lg border"
            />
          )}
        </div>

        {/* Content */}
        <div>
          <label className="block mb-2 text-sm font-medium">Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={onChange}
            rows={8}
            className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={saving || uploading}
            className={`bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-blue-700 transition ${
              saving || uploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {saving
              ? editing
                ? "Updating…"
                : "Publishing…"
              : editing
              ? "Update Blog"
              : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
