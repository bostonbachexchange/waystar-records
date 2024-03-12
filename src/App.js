// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import News from './pages/News';
import Releases from './pages/Releases';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/waystar-records/">Home</Link>
            </li>
            <li>
              <Link to="/waystar-records/artists">Artists</Link>
            </li>
            <li>
              <Link to="/waystar-records/about">About Us</Link>
            </li>
            <li>
              <Link to="/waystar-records/services">Services</Link>
            </li>
            <li>
              <Link to="/waystar-records/events">Events</Link>
            </li>
            <li>
              <Link to="/waystar-records/news">News</Link>
            </li>
            <li>
              <Link to="/waystar-records/releases">Releases</Link>
            </li>
            <li>
              <Link to="/waystar-records/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/waystar-records/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/waystar-records/" element={<Home />} />
          <Route path="/waystar-records/artists" element={<Artists />} />
          <Route path="/waystar-records/about" element={<About />} />
          <Route path="/waystar-records/services" element={<Services />} />
          <Route path="/waystar-records/events" element={<Events />} />
          <Route path="/waystar-records/news" element={<News />} />
          <Route path="/waystar-records/releases" element={<Releases />} />
          <Route path="/waystar-records/testimonials" element={<Testimonials />} />
          <Route path="/waystar-records/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
