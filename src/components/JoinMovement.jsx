import React, { useState, useEffect } from 'react';
import './JoinMovement.css';
import ActionButton from './ActionButton';

const JoinMovement = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate rotations for the clock hands
  const seconds = time.getSeconds() * 6; // 360/60
  const minutes = time.getMinutes() * 6;
  const hours = (time.getHours() % 12) * 30 + (time.getMinutes() / 2);

  return (
    <section className="join-section">
      <div className="join-container">
        
        {/* Left Side: The Clock */}
        <div className="clock-wrapper">
          {/* Background glowing light streaks */}
          <div className="streak streak-orange"></div>
          <div className="streak streak-blue"></div>
          
          <div className="analog-clock">
            {/* Clock Face Details */}
            <div className="clock-face">
              <div className="huly-logo-bg">H</div>
              <div className="hand hour-hand" style={{ transform: `rotate(${hours}deg)` }}></div>
              <div className="hand minute-hand" style={{ transform: `rotate(${minutes}deg)` }}></div>
              <div className="hand second-hand" style={{ transform: `rotate(${seconds}deg)` }}></div>
              <div className="center-dot"></div>
              
              {/* Glowing internal ring */}
              <div className="inner-glow-ring"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="join-content">
          <h1>Ready to deploy?</h1>
          <p>
            Experience enterprise-grade fraud detection with <br/>real-time intelligence and transparent decision-making.
          </p>
          <ActionButton/>
          
        </div>
      </div>

      
    </section>
  );
};

export default JoinMovement;