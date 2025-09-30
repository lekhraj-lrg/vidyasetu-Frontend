import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBook, FaMedal, FaGlobe } from "react-icons/fa";
import lekhrajImg from "../assets/lekhraj.png"
import dipeshImg from "../assets/dipesh.png"

// Stats Section Data
const stats = [
  { id: 1, icon: <FaUsers size={28} />, value: "10,000+", label: "Active Students" },
  { id: 2, icon: <FaBook size={28} />, value: "5,000+", label: "Study Materials" },
  { id: 3, icon: <FaMedal size={28} />, value: "95%", label: "Success Rate" },
  { id: 4, icon: <FaGlobe size={28} />, value: "25+", label: "Cities Covered" },
];

// Core Values Data
const coreValues = [
  { title: "Knowledge Sharing", desc: "Education accessible to all students regardless of background." },
  { title: "Community First", desc: "Strong connections between students, seniors, and juniors." },
  { title: "Quality Focus", desc: "Ensuring academic standards with high-quality verified content." },
  { title: "Student Welfare", desc: "Reducing financial burden & promoting sustainable practices." },
];

export default function AboutPage() {
  const missionRef = useRef(null);

  const handleScroll = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-teal-600 text-white text-center py-20 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Bridging Educational Gaps in Nepal
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          VidyaSetu is Nepal's first academic resource sharing platform, connecting students across the country to share knowledge, resources, and opportunities.
        </p>
        <button
          onClick={handleScroll}
          className="mt-6 px-6 py-2 bg-white text-green-700 rounded-full shadow-md hover:scale-105 transition"
        >
          Learn About VidyaSetu
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto py-16 px-6">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
            <div className="text-green-600 flex justify-center">{item.icon}</div>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
            <p className="text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Mission */}
      <section ref={missionRef} className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          To democratize education in Nepal by creating a centralized platform where students can freely access, share, and exchange academic resources.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto py-12 px-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">The Problem We Solve</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Scattered academic resources across platforms</li>
            <li>High cost of textbooks & study materials</li>
            <li>Lack of organized, verified educational content</li>
            <li>Limited interaction between students</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-600">
            <li>Centralized repository of verified academic materials</li>
            <li>Marketplace for affordable second-hand books</li>
            <li>Community moderation for quality assurance</li>
            <li>Collaboration & mentorship opportunities</li>
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-lg">{value.title}</h3>
              <p className="text-gray-600 mt-2">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-gray-600 mb-10">
          Passionate students working to transform education in Nepal
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lekhraj Ghimire */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src={lekhrajImg} // place image in public folder
              alt="Lekhraj Ghimire"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <h3 className="mt-4 font-semibold text-lg">Lekhraj Ghimire</h3>
            <p className="text-gray-500">Passionate Student</p>
            <p className="text-gray-600 mt-3 text-sm">
              Enthusiastic learner focused on building impactful educational
              platforms and community-driven projects.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-green-600 text-white px-3 py-1 text-xs rounded-full">
                Education Tech
              </span>
              <span className="bg-green-600 text-white px-3 py-1 text-xs rounded-full">
                Student Advocacy
              </span>
            </div>
            <a
              href="#" // replace with real portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Portfolio
            </a>
          </div>

          {/* Dipesh Rijal */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <img
              src={dipeshImg} // place image in public folder
              alt="Dipesh Rijal"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <h3 className="mt-4 font-semibold text-lg">Dipesh Rijal</h3>
            <p className="text-gray-500">Passionate Student</p>
            <p className="text-gray-600 mt-3 text-sm">
              Dedicated student passionate about learning, collaboration, and
              creating accessible educational solutions for all.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-green-600 text-white px-3 py-1 text-xs rounded-full">
                Community Building
              </span>
              <span className="bg-green-600 text-white px-3 py-1 text-xs rounded-full">
                Collaboration
              </span>
            </div>
            <a
              href="#" // replace with real portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Portfolio 
            </a>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl text-blue-900 font-bold">₹2.5M+</h3>
            <p>Saved by students on textbooks</p>
          </div>
          <div>
            <h3 className="text-2xl text-green-600 font-bold">15,000+</h3>
            <p>Resources shared by community</p>
          </div>
          <div>
            <h3 className="text-2xl text-orange-700 font-bold">95%</h3>
            <p>Student satisfaction rate</p>
          </div>
        </div>
        <p className="mt-6 italic max-w-3xl mx-auto">
          "VidyaSetu has made quality education accessible to students from all backgrounds. It’s a movement towards educational equality in Nepal."
        </p>
      </section>
    </div>
  );
}
