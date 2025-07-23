import React, { useState } from 'react';

const Body = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of my first blog post. Welcome to my blogging journey!",
      author: "John Doe",
      date: "2023-05-15",
      category: "Getting Started"
    },
    {
      id: 2,
      title: "React Tips and Tricks",
      content: "Here are some useful React tips I've learned while building applications.",
      author: "Jane Smith",
      date: "2023-06-02",
      category: "React"
    }
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: ""
  });

  const [activeTab, setActiveTab] = useState('all');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const blogToAdd = {
      id: blogs.length + 1,
      title: newBlog.title,
      content: newBlog.content,
      author: newBlog.author,
      date: currentDate,
      category: newBlog.category || "Uncategorized"
    };

    setBlogs([...blogs, blogToAdd]);
    setNewBlog({ title: "", content: "", author: "", category: "" });
  };

  const filteredBlogs = activeTab === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category.toLowerCase() === activeTab);

  const categories = ['all', ...new Set(blogs.map(blog => blog.category.toLowerCase()))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with category tabs */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Blog Posts</h1>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {filteredBlogs.map(blog => (
          <article 
            key={blog.id} 
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {blog.category}
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>By {blog.author}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.content}
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};

export default Body;