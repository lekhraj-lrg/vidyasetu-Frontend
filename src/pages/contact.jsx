import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-blue-700 text-center py-16 text-white">
        <h1 className="text-4xl font-bold"> Contact Us</h1>
        <p className="mt-3 max-w-xl mx-auto">
          Have questions, suggestions, or need help? We're here to assist you on
          your academic journey.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="What is this about?"
              required
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <textarea
              placeholder="Tell us more about your inquiry..."
              rows="4"
              required
              className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          {/* Email */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex items-start gap-3">
            <Mail className="text-blue-700" />
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:vidyaset.suppoer@gmail.com"
                className="text-blue-700 hover:underline"
              >
                vidyaset.suppoer@gmail.com
              </a>
              <p className="text-sm text-gray-500">Send us an email anytime</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex items-start gap-3">
            <Phone className="text-blue-700" />
            <div>
              <p className="font-medium">Phone</p>
              <a
                href="tel:+9779819031673"
                className="text-blue-700 hover:underline"
              >
                +977-9819031673
              </a>
              <p className="text-sm text-gray-500">
                Call us during business hours
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex items-start gap-3">
            <MapPin className="text-blue-700" />
            <div>
              <p className="font-medium">Address</p>
              <p>Itahari, Nepal</p>
              <p className="text-sm text-gray-500">Visit our office</p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex items-start gap-3">
            <Clock className="text-blue-700" />
            <div>
              <p className="font-medium">Hours</p>
              <p>10 AM - 5 PM</p>
              <p className="text-sm text-gray-500">Sunday to Friday</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-center text-2xl font-bold mb-6">
          ❓ Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Quick answers to common questions. Can’t find what you’re looking for?
          Contact us!
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "How do I upload study materials?",
              a: "Create an account, go to the upload section, select your files, add details, and submit for review.",
            },
            {
              q: "Is VidyaSetu free to use?",
              a: "Yes! Browsing and downloading materials is completely free. The marketplace allows direct transactions between users.",
            },
            {
              q: "How do I report inappropriate content?",
              a: "Use the report button on any material or contact us directly. We review all reports within 24 hours.",
            },
            {
              q: "Can I sell my textbooks on VidyaSetu?",
              a: "Absolutely! Use our marketplace feature to list your academic resources for sale to other students.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="font-medium">{item.q}</p>
              <p className="text-gray-600 text-sm mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="bg-gray-100 py-12 text-center">
        <h2 className="text-xl font-bold">Still Have Questions?</h2>
        <p className="text-gray-600 mt-2">
          Our support team is always ready to help you. Don’t hesitate to reach
          out!
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="mailto:vidyaset.suppoer@gmail.com"
            className="px-5 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
          >
            📧 Email Support
          </a>
          <a
            href="tel:+9779819031673"
            className="px-5 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>

      {/* Popup Animation */}
      {showPopup && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Message Sent Successfully!
        </div>
      )}
    </div>
  );
};

export default ContactPage;
