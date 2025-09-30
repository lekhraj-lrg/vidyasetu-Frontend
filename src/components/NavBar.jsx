import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use Link for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home"); // track active link

  const linkClasses = (name) =>
    `relative hover:text-blue-900 after:block after:h-[2px] after:bg-blue-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left
     ${active === name ? "text-blue-900 after:scale-x-100" : ""}`;

  return (
    <nav className="w-full shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-900 text-white p-2 rounded-full">📖</div>
            <div>
              <h1 className="text-lg font-bold">VidyaSetu</h1>
              <p className="text-xs text-gray-500">Academic Bridge</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/" onClick={() => setActive("Home")} className={linkClasses("Home")}>
              Home
            </Link>
            <Link to="/notes" onClick={() => setActive("Notes")} className={linkClasses("Notes")}>
              Notes
            </Link>
            <Link to="/marketplace" onClick={() => setActive("Marketplace")} className={linkClasses("Marketplace")}>
              Marketplace
            </Link>
            <Link to="/about" onClick={() => setActive("About")} className={linkClasses("About")}>
              About
            </Link>
            <Link to="/contact" onClick={() => setActive("Contact")} className={linkClasses("Contact")}>
              Contact
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="hover:text-blue-900">Login</Link>
            <Link to="/signup">
    <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
      Join Now
    </button>
  </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => { setActive("Home"); setIsOpen(false); }}
            className={active === "Home" ? "text-blue-900 font-semibold" : "hover:text-blue-900"}>
            Home
          </Link>
          <Link to="/notes" onClick={() => { setActive("Notes"); setIsOpen(false); }}
            className={active === "Notes" ? "text-blue-900 font-semibold" : "hover:text-blue-900"}>
            Notes
          </Link>
          <Link to="/marketplace" onClick={() => { setActive("Marketplace"); setIsOpen(false); }}
            className={active === "Marketplace" ? "text-blue-900 font-semibold" : "hover:text-blue-900"}>
            Marketplace
          </Link>
          <Link to="/about" onClick={() => { setActive("About"); setIsOpen(false); }}
            className={active === "About" ? "text-blue-900 font-semibold" : "hover:text-blue-900"}>
            About
          </Link>
          <Link to="/contact" onClick={() => { setActive("Contact"); setIsOpen(false); }}
            className={active === "Contact" ? "text-blue-900 font-semibold" : "hover:text-blue-900"}>
            Contact
          </Link>
          <Link to="/login" className="hover:text-blue-900">Login</Link>
          <Link to="/signup">
            <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
             Join Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
