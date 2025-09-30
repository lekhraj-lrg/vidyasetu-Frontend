import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white text-blue-900 p-2 rounded-full">📖</div>
            <div>
              <h2 className="font-bold text-lg">VidyaSetu</h2>
              <p className="text-sm text-gray-300">Academic Bridge</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Connecting Nepali students with quality academic resources and
            building a stronger educational community.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Browse Notes</a></li>
            <li><a href="#">Upload Materials</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Academic Levels */}
        <div>
          <h3 className="font-semibold mb-4">Academic Levels</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">SEE (Class 10)</a></li>
            <li><a href="#">+2 Science</a></li>
            <li><a href="#">+2 Management</a></li>
            <li><a href="#">+2 Humanities</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-lg" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-lg" />
              <span>+977 9819031673</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-lg" />
              <span>vidyasetu@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 VidyaSetu. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
