import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar.jsx";
import Home from './pages/home.jsx';
import Footer from './components/Footer.jsx';
import NotesPage from './pages/note.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        {/* Notes Route */}
        <Route path="/notes" element={<NotesPage />} />
        {/* Placeholder Routes */}
        <Route path="/marketplace" element={<h1 className="p-10 text-center">Marketplace Coming Soon 🚀</h1>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<h1 className="p-10 text-center">Login Page</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
