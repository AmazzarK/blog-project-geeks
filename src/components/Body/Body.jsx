import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, deleteBlog } from "../../utils/api";

const Body = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /* ───────────────  Fetch blogs  ─────────────── */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getBlogs(); // token added automatically if present
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  /* ───────────────  Delete post  ─────────────── */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await deleteBlog(id); // protected route – token already in header
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete blog.");
    }
  };

  const handleEdit = (blog) => navigate("/add-blog", { state: { blog } });

  /* ───────────────  UI  ─────────────── */
  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500">Loading blogs…</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Blog Posts
      </h1>

      {error && (
        <p className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 text-center">
          {error}
        </p>
      )}

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="group relative bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.content}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;