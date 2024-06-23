import React from 'react';
import './App.css';
import PrettyCard from './components/PrettyCard';
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
            <div className='TopSection' >
              Woohooo! Got the react app deployed :) 
              <br />
              <br />
              Hi! I'm Vandana. I'm early into my career in technology and am using this space to document my journey as it goes. I chose to make a react app for this purpose because I also want to develop my frontend skills a bit more and use this site to talk about all things ✨ Me ✨. 
            </div>
            <div className='PrettyCards'>
              <PrettyCard image={AllThingsCareer}>
                I studied a Bachelor of Bioinformatics Engineering in my undergrad (think biology had a child with computer/data science). Aside from academics I involved myself in the UNSW Bioinformatics Society to learn more about the area and forge connections with others studying my degree. <br/><br/>
                Currently, I'm completing a graduate program, with my first rotation in the HR Technology function, that supports 48 900 employees. 
              </PrettyCard>
              <PrettyCard image={AllThingsYarn}>
                Outside of work, one of my favourite hobbies is knitting and crocheting. I learnt knitting when I was 7 years old but only really started making clothes during the COVID-19 lockdowns. Since then I've made sweaters, dresses, skirts and plenty of patchwork blankets. <br/><br/>
                Most recently, I have been crocheting a hexagonally patched blanket for my mum so that she's warm while she does her cross-stitch.
              </PrettyCard>
              <PrettyCard image={AllThingsBooks}>
                Reading wasn't always my thing. The first books I properly remember reading was the <i>Rainbow Magic Series</i> or <i>Harry Potter</i> in later primary years. But once again, COVID lockdowns gave me a lot of free time to read as well. <br/><br/>
                The most recent book I've read is <i>Trust</i> by Hernan Diaz, set during early 1900s about Wall Streets hidden secrets.
              </PrettyCard>
            </div>
          </p>

        </div>
        
    </body>
  );
}

export default App;
