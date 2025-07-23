import React, { useState } from "react";
import api from "../utils/axios"; 
import {useNavigate} from "react-router-dom"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/users/login", {
        email: form.email,
        password: form.password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token); // store token locally
      alert("Login successful!");
setTimeout(() => {
  navigate("/home");
  console.log(" Login success — navigating to /home");
}, 100);

      console.log("User data:", response.data.user);

      // Optionally: redirect or reset form
      setForm({ email: "", password: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed: " + (err.response?.data?.message || "Check console"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
