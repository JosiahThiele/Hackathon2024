import React, { useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className='hero-container'>
      <video src="./videos/video-2.mp4" autoPlay loop muted={isMuted} />
      <h1>IMMG</h1>
      <p>Incredible Monkey Math Games (idk man)</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/information'
        >
          Get Info
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={toggleMute}
        >
          <i className={isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
