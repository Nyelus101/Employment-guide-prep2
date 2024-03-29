import React from 'react';
//import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';
// import './Button1.css';
// import './Button.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>First Bank's</h1>
      <p>ADVENTURE AWAITS</p>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <button
          className='btn--outline btn--medium'
          // className='btn--outline'
          // buttonSize='btn--large'
        >
          GET STARTED
        </button>
        <button
          className='btn--primary btn--medium'
          // buttonStyle='btn--primary'
          // buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;