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
    title: 'Website 1',
    image: '/images/img-1.jpg',
    description: 'Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.',
    link: 'https://www.website1.com',
  },{
    title: 'Website 1',
    image: '/images/img-1.jpg',
    description: 'Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.',
    link: 'https://www.website1.com',
  },
  // Add more website objects as needed
];
const readingWebsiteData = [
  {
    title: 'Website 1',
    image: '/images/img-1.jpg',
    description: 'Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.Description for Website 1.',
    link: 'https://www.website1.com',
  }
];

export default function Websites() {
  return (
    <div>
      <div className="websites-container">
        <div className="square">
          <h1 className="websites-header">Other Good Websites</h1>
          <p className="websites-text">
            Your bunch of text goes here. Your bunch of text goes here.
            Your bunch of text goes here. Your bunch of text goes here.
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
