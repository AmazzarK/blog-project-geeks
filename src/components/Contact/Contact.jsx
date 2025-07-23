import React from "react";
import { useRef } from "react";
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
    <section id="contact" className="w-full bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10 lg:mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm"
          >
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-indigo-600">
                <FaPhone className="text-lg" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+212 6 12 34 56 78</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-indigo-600">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-indigo-600">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">123 Street, Casablanca, Morocco</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium text-gray-800 mb-3">Follow Us</h3>
              <div className="flex gap-4 text-xl">
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 bg-gray-50 p-1 rounded-xl shadow-sm overflow-hidden">
          <iframe
            title="map"
            className="w-full h-72 sm:h-80 lg:h-96 rounded-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4787753747424!2d-7.620812885095944!3d33.57311068073721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdcb736515db%3A0x1dc60a8b9d11f0ae!2sCasablanca!5e0!3m2!1sen!2sma!4v1620061720927!5m2!1sen!2sma"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}