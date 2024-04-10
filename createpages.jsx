// How to make other pages

1. Make "pages" folder in existing "src" folder

2. make Header and Footer folders with their corresponding jsx files and scss files in pages folder

3. make rfce in both the jsx files and import scss from their stylesheets.

4. Make Section.jsx file in src folder and make the routes of every pages. The Section file looks like the following


import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Header/Home/Home';
import Ourteam from './pages/Header/Team/Ourteam';
import Aboutus from './pages/Header/Aboutus/Aboutus';
import Services from './pages/Header/Services/Services';
import Contact from './pages/Header/Contact/Contact';

function Section() {
    return (
        <div style={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Ourteam />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </div>
    )
}

export default Section
