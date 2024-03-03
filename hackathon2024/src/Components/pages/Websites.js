// Websites.js
import React from 'react';
import '../../App.css';
import Footer from '../Footer'


//INSERT WEBSITES IN HERE *************
const mathWebsiteData = [
  {//Use this first Entry as an example. If you want to add an image, place it in the images folder which is in the public folder.
    title: 'Khan Academy',
    image: '/images/Khan.png',
    description: 'Has great free lessons that can help anyone with math!',
    link: 'https://www.khanacademy.org/',
  },
  {
    title: 'IXL',
    image: '/images/ixl.png',
    description: 'Gives students problems giving them harder questions with each right solution.',
    link: 'https://www.ixl.com',
  },{
    title: 'Math Games',
    image: '/images/Mathgames.jpeg',
    description: 'Math Games offers online games and printable worksheets to make learning math fun. Kids from pre-K to 8th grade can practice math skills recommended by the Common Core State Standards in exciting game formats. Never associated learning algebra with rescuing animals or destroying zombies? Time to think again!',
    link: 'https://www.mathgames.com/',
  },{
    title: 'CoolMathGames',
    image: '/images/Coolmathgames.png',
    description: 'This is the brain-training site, for everyone, where logic & thinking meet fun & games. They have thousands of strategy, logic, trivia and numbers games for everyone to explore. All of the games have been carefully selected to be both fun to play and mentally stimulating.',
    link: 'https://www.coolmathgames.com/',
  },
  // Add more website objects as needed
];
const readingWebsiteData = [
  {
    title: 'Starfall',
    image: '/images/Starfall.png',
    description: 'Starfall activities are research-based and align with state learning objectives for English language arts and mathematics. Its emphasis on phonemic awareness, systematic sequential phonics, and common sight words in conjunction with audiovisual interactivity is especially effective for teaching emergent readers, children of all ages with special needs or learning difficulties, as well as ELL (ESL) students. It is widely used in schools and homeschools.',
    link: 'https://www.starfall.com/h/ltr-classic/',
  },{
    title: 'Reading Eggs',
    image: '/images/Readingeggs.png',
    description: 'Reading Eggs makes learning to read interesting and engaging for kids, with great online reading games and activities. And it really works! Children love the games, songs, golden eggs and other rewards which, along with feeling proud of their reading, really motivate children to keep exploring and learning.',
    link: 'https://readingeggs.com/',
  },{
    title: 'Nitro Type',
    image: '/images/NitroType.png',
    description: 'Nitro Type is a worldwide real-time typing competition. It helps students improve their typing speed by competing with their friends and other people around the world. Nitro Type allows students to earn new cars, track their scores, join and create teams.',
    link: 'https://www.nitrotype.com/race',
  },{
    title: 'IXL',
    image: '/images/ixl.png',
    description: 'Gives students reading questions. They are given harder questions with each right solution.',
    link: 'https://www.ixl.com',
  },{
    title: 'Duolingo',
    image: '/images/Duolingo.jpeg',
    description: 'Duolingo is the most popular language-learning platform and the most downloaded education app in the world, with more than 500 million users. The companys mission is to make education free, fun, and available to all.',
    link: 'https://www.duolingo.com/',
  },
];

export default function Websites() {
  return (
    <div>
      <div className="websites-container">
        <div className="square">
          <h1 className="websites-header">Other Good Websites</h1>
          <p className="websites-text">
          
          </p>
          <div className="inner-squares">
            <div className="inner-square red">
              <h2>Math Websites</h2>
              <div className="website-list" style={{maxHeight:'400px',overflowY: 'auto' }}>
                <ul>
                {mathWebsiteData.map((website, index) => (
                    <li key={index}>
                      <div className="website-box">
                        <a href={website.link} target="_blank" rel="noopener noreferrer">
                          <img src={website.image} alt={website.title} />
                          <div>
                            <a href={website.link} target="_blank" rel="noopener noreferrer">
                              <h3>{website.title}</h3>
                            </a>
                            <p>{website.description}</p>
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="inner-square yellow" >
              <h2>Reading Websites</h2>
              <div className="website-list" style={{maxHeight:'400px',overflowY: 'auto' }}>
                <ul>
                {readingWebsiteData.map((website, index) => (
                    <li key={index}>
                      <div className="website-box">
                        <a href={website.link} target="_blank" rel="noopener noreferrer">
                          <img src={website.image} alt={website.title} />
                          <div>
                            <a href={website.link} target="_blank" rel="noopener noreferrer">
                              <h3>{website.title}</h3>
                            </a>
                            <p>{website.description}</p>
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
