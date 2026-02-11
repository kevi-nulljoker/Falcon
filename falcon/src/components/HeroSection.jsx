import React, { Suspense } from 'react';
import './HeroSection.css';
import ActionButton from './ActionButton';
import TH from './TH';
import Bg from '../images/form-pattern.jpg'



export default function HeroSection() {
  return (

    <div className="hero-container" >

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">

          <div className="nav-links">
            <a href="#about">About Us</a>
            <a href="#Features">Key Features</a>
            <a href="#Works">How It Works</a>
            <a href="#download">Documentation</a>
          </div>
        </div>
        <div className="nav-right">
          <a href='/login'><button className="btn-secondary">Sign In</button></a>
          <a href='/signup'><button className="btn-primary">Sign Up</button></a>
        </div>
      </nav>

      {/* Hero Content */}
      <header className="hero-header">
        <br />
        <br />
        <br />
        <h1>F.A.L.C.O.N.</h1>
        <p>
          Fraud Analytics & Layered Control Operation Network<br />
        </p>

        <TH />
        <p>Real-time detection combining deterministic rules, structured ML,<br /> and semantic LLM analysis for enterprise-grade fraud prevention.</p>
        <ActionButton />
      </header>


      
  

          {/* Main Mockup Area */}
          <div className="mockup-container">
            <div className="mockup-placeholder">


              <img src="/dashboard-mockup.png" alt="Huly Dashboard" className="mockup-img" />
            </div>
          </div>


        </div>
          );
}