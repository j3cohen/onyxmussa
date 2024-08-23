import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
