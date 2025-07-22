import { useRef } from "react";
import React from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    console.log("Submitted:", {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
    formRef.current.reset();
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-500" />
              <span>+212 6 12 34 56 78</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>123 Street, Casablanca, Morocco</span>
            </div>

            <div className="flex gap-6 mt-6 text-xl">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe
            title="map"
            className="w-full h-72 rounded-xl border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4787753747424!2d-7.620812885095944!3d33.57311068073721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdcb736515db%3A0x1dc60a8b9d11f0ae!2sCasablanca!5e0!3m2!1sen!2sma!4v1620061720927!5m2!1sen!2sma"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
