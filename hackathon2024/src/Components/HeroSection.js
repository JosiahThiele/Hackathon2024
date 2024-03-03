import React, { useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState('math-background.mp4');

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  return (
    <div className='hero-container'>
      <video src={`./videos/${selectedVideo}`} autoPlay loop muted={isMuted} />
      <div className='hero-box'>
        <h1>SGG</h1>
        <p>Smart Gorilla Games</p>
        <div className="hero-btns">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            link='/information'
          >
            Information
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={toggleMute}
          >
            <i className={isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'} />
          </Button>
          <select id="videoSelect" onChange={handleVideoChange} value={selectedVideo}>
            <option value="math-background.mp4">Math Background</option>
            <option value="reading.mp4">Reading Background</option>
            <option value="monkeSpin.mp4">Spinning Monkeys 3D</option>
            <option value="spinMonke.mp4">Spinning Monkeys</option>
          </select>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
