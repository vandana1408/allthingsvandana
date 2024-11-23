import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import aboutmepng from './components/images/aboutme.png';
import careergif from './components/images/career.gif';
import yarnpng from './components/images/yarn.png';
import AboutMe from './AboutMe';
import Yarn from './Yarn';
import Career from './Career';

function App() {  
  return (
    <BrowserRouter>
      <body className='App'>
          <div className='Incoming'>
            <Link to="/allthingsvandana"><img src={aboutmepng} alt="about me" /></Link>
            <Link to='/career'><img src={careergif} alt="career" /></Link> 
            <Link to='/yarn'><img src={yarnpng} alt="yarn" /></Link> 
          </div>
          <br/>
          <Routes>
            <Route path="/allthingsvandana" element={<AboutMe />} />
            <Route path="/career" element={<Career />} />
            <Route path="/yarn" element={<Yarn />} />
          </Routes>     
      </body>
    </BrowserRouter>
  );
}

export default App;
