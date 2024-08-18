import React from 'react';
import './App.css';
import AllThingsCareer from './components/images/allthingscareer.png';
import AllThingsYarn from './components/images/allthingsyarn.png';
import AllThingsBooks from './components/images/allthingsbooks.png'; 
import AllAboutMe from './components/images/allaboutme.png';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AboutMe from './AboutMe';
import Books from './Books';
import Yarn from './Yarn';
import Career from './Career';

function App() {
  return (
    <BrowserRouter>
      <body className="App">
          <h1>
            It's Me! Vandana
          </h1>
          <div className="Incoming">
            <Link to='/allthingsvandana'><img src={AllAboutMe} alt="aboutme"/></Link>
            <Link to='/career'><img src={AllThingsCareer} alt="allthingscareer"/> </Link>
            <Link to='/yarn'><img src={AllThingsYarn} alt="allthingsyarn"/></Link>
            <Link to='/books'><img src={AllThingsBooks} alt="allthingsbooks" /></Link>
          </div>
          <br/>
          <Routes>
            <Route path="/allthingsvandana" element={<AboutMe />} />
            <Route path="/career" element={<Career />} />
            <Route path="/yarn" element={<Yarn />} />
            <Route path="/books" element={<Books />} />
          </Routes>     
      </body>
    </BrowserRouter>
  );
}

export default App;
