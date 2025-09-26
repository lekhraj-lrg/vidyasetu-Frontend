import React from "react";
import { BookOpen, ShoppingBag, Users } from "lucide-react";

const WhyChoose = () => {
  return (
    <section id="why" className="w-full px-6 sm:px-12 lg:px-20 py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-medium text-blue-900 bg-blue-100 rounded-full">
          ✨ Why Choose VidyaSetu
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4">
          Everything You Need for Academic Success
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          VidyaSetu brings together all the resources Nepali students need in
          one unified platform.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="relative bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
          <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            1000+ Materials
          </span>
          <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-xl mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Study Material Hub</h3>
          <p className="text-gray-600 text-sm mb-4">
            Access thousands of notes, guides, and past papers for SEE and +2
            grades across all subjects.
          </p>
          <a
            href="#"
            className="text-blue-900 font-medium text-sm hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
          <span className="absolute top-4 right-4 text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Save 60%
          </span>
          <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-xl mb-4">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Second-Hand Marketplace</h3>
          <p className="text-gray-600 text-sm mb-4">
            Buy and sell textbooks, lab files, and entrance prep materials at
            affordable prices.
          </p>
          <a
            href="#"
            className="text-green-600 font-medium text-sm hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
          <span className="absolute top-4 right-4 text-xs font-semibold bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
            500+ Students
          </span>
          <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-xl mb-4">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Student Community</h3>
          <p className="text-gray-600 text-sm mb-4">
            Connect with peers, share knowledge, and build lasting academic
            relationships.
          </p>
          <a
            href="#"
            className="text-orange-500 font-medium text-sm hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          How VidyaSetu Works
        </h2>
        <p className="mt-3 text-gray-600">
          Simple steps to access thousands of academic resources
        </p>

        <div className="grid gap-8 sm:grid-cols-3 mt-12">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
            <div className="w-12 h-12 flex items-center justify-center mx-auto bg-blue-900 text-white rounded-full mb-4 text-lg font-bold">
              1
            </div>
            <h3 className="font-semibold">Sign Up</h3>
            <p className="text-gray-600 text-sm mt-2">
              Create your free account in seconds
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
            <div className="w-12 h-12 flex items-center justify-center mx-auto bg-green-600 text-white rounded-full mb-4 text-lg font-bold">
              2
            </div>
            <h3 className="font-semibold">Browse & Search</h3>
            <p className="text-gray-600 text-sm mt-2">
              Find materials by grade, subject, or type
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300">
            <div className="w-12 h-12 flex items-center justify-center mx-auto bg-orange-500 text-white rounded-full mb-4 text-lg font-bold">
              3
            </div>
            <h3 className="font-semibold">Download & Share</h3>
            <p className="text-gray-600 text-sm mt-2">
              Access materials instantly and contribute back
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
