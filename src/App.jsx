import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './pages/navbar';

import Solutions from './pages/solutions';
import Footer from './pages/footer';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Mapa from './pages/map';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/map" element={<Mapa/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
