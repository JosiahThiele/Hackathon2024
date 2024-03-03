import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Information() {
  return (
    <div>
      <div className="information-container">
        <div className="information-box">
          <h1>INFORMATION</h1>
          <p>
            Welcome to our solution about poor education impacting millions of children worldwide. Please keep these statistics in mind:
          </p>
          <ul>
            <li>84 million children and youth will be out of school.</li>
            <li>300 million students will lack basic numeracy and literacy skills.</li>
            <li>The pace of completion rates of primary schools is rising, but it is slow and uneven.</li>
          </ul>
          <p>
            In response to this problem, our team has developed a website aimed at fostering education and engagement. Our focus is on providing valuable resources for parents to support their children's learning journey. Here's how our project aims to make a positive impact:
          </p>
          <ul>
            <li><strong >Curated Learning Resources:</strong> Our website features a carefully curated list of math and reading resources, ensuring that parents have access to high-quality educational materials for their children.</li>
            <li><strong>Interactive Learning:</strong> We've incorporated a math tic-tac-toe game to make learning enjoyable and interactive, fostering a love for learning in a fun and engaging way.</li>
          </ul>
          <p>
            We believe that by empowering parents with these resources, we can contribute to overcoming the challenges outlined in the statistics. Our commitment to addressing the issues of out-of-school children, lack of basic skills, and slow progress in primary education is at the core of our project.
          </p>
          <p>
            Thank you for considering our website. We are excited about the opportunity to make a meaningful impact on the lives of learners and their families. We look forward to contributing to the collective effort in addressing the challenges of poor education.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
