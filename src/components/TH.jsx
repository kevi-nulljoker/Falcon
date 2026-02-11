import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const phrases = ["ML-Powered Detection","Detect Fraud Instantly","Minimal False Positives","Rule-Based Precision", "Real-Time Intelligence", "LLM Semantic Analysis"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter Logic
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2200); // Pause at the end
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 85); // Deleting is slightly faster

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <>
      <style>{`
        .type-root {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 120px;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .type-container {
          position: relative;
          display: inline-block;
        }

        .type-text {
          font-size: 3rem; /* 100% scale desktop size */
          font-weight: 700;
          letter-spacing: -0.9px;
          line-height: 40px;
          
        //   /* Huly Brand Gradient */
        //   background: linear-gradient(to right, #ff6b00 0%, #ff9d00 45%, #0088ff 100%);
        //   -webkit-background-clip: text;
        //   background-clip: text;
        //   color: transparent;
          
          white-space: nowrap;
          padding-right: 10px;
        }

        .type-cursor {
          position: absolute;
          right: -5px;
          top: 10%;
          width: 5px;
          height: 80%;
          background-color: #ff6b00;
          border-radius: 2px;
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Responsive Scaling */
        @media (max-width: 1024px) {
          .type-text { font-size: 3.2rem; }
          .type-root { height: 90px; }
        }

        @media (max-width: 640px) {
          .type-text { font-size: 2.2rem; }
          .type-root { height: 60px; }
        }
      `}</style>

      <div className="type-root">
        <div className="type-container">
          <span className="type-text">
            {phrases[index].substring(0, subIndex)}
          </span>
          <span className="type-cursor"></span>
        </div>
      </div>
    </>
  );
};

export default Typewriter;