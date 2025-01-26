import './App.css';
import Timeline from './components/Timeline';

const stepsInfo = [
    {
        label: 'The Beginnings: 2008 - 2019',
        description: 'Learnt how to knit at 7 years old and only stuck to the basic garter stitch for the next 10-11 years of my life. Since I was at school my attention to this hobby wavered every now and then, making it difficult to pick up new things.',
    }, 
    {
        label: 'Knitting during a Pandemic: March 2020',
        description: 'The 2020 lockdown provided a lot of free time for an indoor activity and I had just found an old stash of wool. Figuring this was bought years ago when the obsession with knitting was high, I decided to knit an 180-patched blanket of squares measuring 15cm x 15cm.'
    }, 
    {
        label: 'Starting the Crochet Journey: October 2020',
        description: 'After this endeavor, I picked up crocheting so that I could start making my own clothes(I did not work it out with knitting yet). This was a completely different ball game but since this was during COVID, I had a lot of time to practice and improve.'
    },
    {
        label: `Birth of the Gen Z Grandma: 2021 - Present`,
        description: `Started an Instagram account in 2021 to showcase some of the things I made and to follow other knitters + crocheters for inspiration in new works and methods. This also marks the year I knitted my first sweater EVER!! The activity is irregular when it comes to the 
                        posting, but it's my main digital diary or in technical terms 'source of truth'.`
    },
    {
        label: 'Future',
        description: `One annoying thing about big knitting and crochet projects, is having the energy to finish them. Inspiration hits at the most inconvenient of times so I have a lot of outstanding blankets, sweaters, tops and cardigans to finish. 
                    I feel hopeful that before I turn 25 I'll be able to finish these projects and put more energy into some other hobbies to make me a well rounded individual.`
    }
]

function Yarn() {
    return (
        <div className="Incoming">
            <h2>
                Yarn🧶
            </h2>
            Much like the satisfaction of deploying an important feature you've been working on for weeks, the same levels of dopamine are release when I weave in that last end of a knitted or crocheted project I've worked on for weeks. 
            I've used more math than I'd like to admit to create some of the things I've made over the last few years and more recently, have tried to find many overlaps to find a balance in integrating interests of mine with what I do every day.
            For in depth information on my knitting / crochet journey, please visit my instagram below.
            <br></br><br></br>
            <div className="LinksDisplay">
                <a href="https://www.instagram.com/thegenzgrandma/" id="TheGenZGrandma">@thegenzgrandma</a>
            </div> 
            <Timeline steps={stepsInfo}></Timeline>
          </div>
    );
}

export default Yarn;