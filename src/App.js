import React from 'react';
import './App.css';
import AllThingsCareer from './components/images/allthingscareer.png';
import AllThingsYarn from './components/images/allthingsyarn.png';
import AllThingsBooks from './components/images/allthingsbooks.png'; 


function App() {
  return (
    <body className="App">
        <h1>
          It's Me! Vandana
        </h1>
        <div className="Incoming">
          <p>

              Woohooo! Got the react app deployed :) 
              <br />
              <br />
              Hi! I'm Vandana. I'm early into my career in technology and am using this space to document my journey as it goes. I chose to make a react app for this purpose because I also want to develop my frontend skills a bit more and use this site to talk about all things ✨ Me ✨. 
              <br /> 
              <br />
              I studied a Bachelor of Bioinformatics Engineering in my undergrad (think biology had a child with computer/data science). Aside from academics I involved myself in the UNSW Bioinformatics Society to learn more about the area and forge connections with others studying my degree.
              Currently, I'm completing a graduate program, with my first rotation in the HR Technology function, that supports 48 900 employees. I help build and maintain the platforms used by the HR Team, primarily focused on applications in Workday. <br/>
              <br /> My main hobbies include knitting/crocheting and reading, simply because every new garment made or book read has the same levels of satisfaction as deploying a new release to PROD. I got into knitting and crocheting heavily during the first COVID lockdown and enjoy reading for the stories.     
          </p>
        </div>
        <br />
        <div className="Incoming">
            <img src={AllThingsCareer} /> 
            <img src={AllThingsYarn} /> 
            <img src={AllThingsBooks} /> 
        </div>
        
    </body>
  );
}

export default App;
