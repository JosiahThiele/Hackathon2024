import React, { useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState('video-1.mp4');

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  return (
    <div className='hero-container'>
      <video src={`./videos/${selectedVideo}`} autoPlay loop muted={isMuted} />
      <h1>IMMG</h1>
      <p>Incredible Monkey Math Games (idk man)</p>
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
          <option value="video-0.mp4">Basic 1</option>
          <option value="video-1.mp4">Basic 2</option>
          <option value="video-2.mp4">Monkey 1</option>
          <option value="monkeSpin.mp4">Monkey 2 ⭐</option>
          <option value="video-3.mp4">Roblox</option>
          
          
        </select>
        
      </div>
    </div>
  );
}

export default HeroSection;
