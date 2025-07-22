import React from "react";

export default function Footer() {
  const formRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("Email:", email);
    console.log("Message:", message);
    formRef.current.reset();
  };

  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Additional Section or Image/Info */}
        <div className="flex items-center justify-center">
          <p className="text-gray-500 text-center">
            Feel free to reach out to us anytime. We're happy to hear from you!
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black text-white text-center py-4 w-full">
        <p className="text-sm text-white/80">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
