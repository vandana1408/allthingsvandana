import './App.css';
import VerticalLinearStepper from './components/Timeline';

function Career() {
    return (
        <div className="Incoming">
            <h2>
               My Career 
            </h2>
            This timeline of my career was made using the Material UI framework with a couple customisations here and there to fit the colour scheme of this site. It's a work in progress, but that's the whole point of this website! 
            I hope to also include more detail into my experiences but if I'm lucky and work hard, this page will always be an unfinished novel 😊. 
            <br></br><br></br>
            <VerticalLinearStepper></VerticalLinearStepper>
          </div>
    );
}

export default Career;