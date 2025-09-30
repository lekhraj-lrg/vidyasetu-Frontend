import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar.jsx";
import Home from './pages/home.jsx';
import Footer from './components/Footer.jsx';
import NotesPage from './pages/note.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import Loginpage from './authentication/login.jsx';
import SignupPage from './authentication/join.jsx';
import MarketplaceComingSoon from './pages/marketplace.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/marketplace" element={<MarketplaceComingSoon/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;