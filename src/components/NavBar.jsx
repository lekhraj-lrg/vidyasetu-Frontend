import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["Home", "Notes", "Marketplace", "About", "Contact"];

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section visible = active
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <nav className="w-full shadow-sm bg-white fixed top-0 left-2 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-900 text-white p-2 rounded-full">📖</div>
            <div>
              <h1 className="font-bold text-lg">VidyaSetu</h1>
              <p className="text-xs text-gray-500">Academic Bridge</p>
            </div>
          </div>

          {/* Menu for large screens */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`relative group transition ${
                    activeSection === id
                      ? "text-blue-900 font-semibold"
                      : "text-gray-600 hover:text-blue-900"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-blue-900 transition-all duration-300 ${
                      activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Login & Join */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#login"
              className="text-gray-600 hover:text-blue-900 transition relative group"
            >
              Login
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#join"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block transition ${
                  activeSection === id
                    ? "text-blue-900 font-semibold"
                    : "text-gray-600 hover:text-blue-900"
                }`}
              >
                {item}
              </a>
            );
          })}
          <a
            href="#login"
            className="block text-gray-600 hover:text-blue-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
          <a
            href="#join"
            className="block bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
