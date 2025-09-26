import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="w-full bg-white py-12 mt-24 ">
      {/* Main Hero Section */}
      <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Badge */}
          <span className="inline-block bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
            🎓 For Nepal&apos;s Students
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Academic Resources,{" "}
            <span className="text-green-600">Simplified</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            VidyaSetu connects SEE and +2 students across Nepal with quality
            study materials and affordable textbooks. Share knowledge, save
            money, build community.
          </p>

          {/* Stats */}
          <div className="flex space-x-8 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-900">1000+</p>
              <p className="text-sm text-gray-500">Study Materials</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">500+</p>
              <p className="text-sm text-gray-500">Active Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">50+</p>
              <p className="text-sm text-gray-500">Schools Connected</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-900 text-white rounded-lg shadow hover:opacity-90 transition"
            >
              Explore Resources
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 rounded-lg shadow text-gray-700 hover:bg-gray-100 transition"
            >
              Join Community
            </a>
          </div>
        </div>

        {/* Right Content (Image + Floating Icons) */}
        <div className="relative">
          <img
            src={heroImg}
            alt="Students learning"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          {/* Green book icon (top-right edge) */}  
          <div className="absolute top-0 right-0 bg-green-500 text-white p-3 px-4 py-2 rounded-full shadow-lg translate-x-1/2 -translate-y-1/2">
          📗
            </div>

          {/* Orange SEE badge (bottom-left edge) */}
            <div className="absolute bottom-0 left-0 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg font-medium -translate-x-1/2 translate-y-1/2">
              SEE
            </div>

        </div>
      </div>

      {/* Feature icons (below main hero) */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="bg-green-50 p-6 rounded-xl shadow-sm transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
          <div className="text-2xl mb-3">⬇️</div>
          <h3 className="font-medium text-gray-900">Download</h3>
          <p className="text-sm text-gray-500">Study Materials</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl shadow-sm transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
          <div className="text-2xl mb-3">⬆️</div>
          <h3 className="font-medium text-gray-900">Upload</h3>
          <p className="text-sm text-gray-500">Share Notes</p>
        </div>
        <div className="bg-green-50 p-6 rounded-xl shadow-sm transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
          <div className="text-2xl mb-3">📚</div>
          <h3 className="font-medium text-gray-900">Buy/Sell</h3>
          <p className="text-sm text-gray-500">Books</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
