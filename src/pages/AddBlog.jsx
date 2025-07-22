import { useState } from "react";
import React from "react";

export default function AddBlog() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      date: "2025-07-22",
      author: "Amine",
      content: "React is a powerful JavaScript library for building UIs..."
    },
    {
      id: 2,
      title: "Tailwind CSS Tips",
      date: "2025-07-21",
      author: "Amine",
      content: "Tailwind makes styling so much faster with its utility-first classes..."
    }
  ]);

  const [form, setForm] = useState({
    title: "",
    author: "",
    content: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      date: new Date().toISOString().split("T")[0],
      ...form
    };
    setBlogs([newBlog, ...blogs]);
    setForm({ title: "", author: "", content: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">My Blog</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold mb-4">Add a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="content"
            placeholder="Content"
            rows="5"
            value={form.content}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Add Blog
          </button>
        </form>
      </div>

      {/* Blog List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mb-6 p-6 bg-white rounded-lg shadow"
          >
            <h3 className="text-xl font-bold text-orange-600">{blog.title}</h3>
            <p className="text-sm text-gray-500 mb-1">
              By {blog.author} on {blog.date}
            </p>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
