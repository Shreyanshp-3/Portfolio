import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
// import About from './Components/AboutMe/About';
import AllProjects from './Components/Projects/AllProject'
import Footer from './Components/Footer/Footer'
import AboutMe from './Components/Aboutme/AboutMe';

import './index.css'
const App = () => {
  return (
    
    <>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/work" element={<AllProjects />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/contact" element={<Footer />} />

      </Routes>

    </>
  )
}

export default App
