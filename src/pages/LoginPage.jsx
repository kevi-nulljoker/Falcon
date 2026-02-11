import React from 'react';

const LoginPage = () => {
  return (
    <>
      <style>{`
        :root {
          --bg-color: #05050a;
          --card-bg: rgba(13, 13, 18, 0.7);
          --border-white: rgba(255, 255, 255, 0.08);
          --text-gray: #9ca3af;
        }

        * { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }

        body, html {
          width: 100%;
          height: 100%;
          background-color: var(--bg-color);
          overflow: hidden;
        }

        .lp-wrapper {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: white;
          position: relative;
        }

        /* Large Background Glows matching the 25% view */
        .bg-glow-main {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.8;
          pointer-events: none;
        }

        .lp-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          /* Matches the "airy" feel of the zoomed-out screenshots */
          transform: scale(0.95); 
        }

        /* The Card */
        .lp-card {
          width: 440px;
          background-color: var(--card-bg);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid var(--border-white);
          border-radius: 28px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.6);
        }

        /* Dotted Pattern Overlay specifically in the top right */
        .card-pattern {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-image: url('./form-pattern.jpg');
          background-size: cover;
          opacity: 0.4;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .lp-logo {
          width: 32px;
          height: 32px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .lp-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 40px;
          letter-spacing: -0.8px;
          position: relative;
          z-index: 2;
        }

        .form-group { margin-bottom: 24px; position: relative; z-index: 2; }

        .lp-label {
          display: block;
          color: var(--text-gray);
          font-size: 13px;
          margin-bottom: 10px;
          margin-left: 2px;
        }

        .lp-input {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px 16px;
          color: white;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
        
        .lp-input:focus {
          border-color: rgba(255, 255, 255, 0.25);
        }

        /* The Glowing Peach/White Button */
        .lp-btn-login {
          width: 100%;
          padding: 16px;
          border-radius: 100px;
          border: none;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          background: #e5e7eb;
          color: #000;
          position: relative;
          z-index: 2;
          /* Inner and outer peach glow */
          box-shadow: 0 0 20px rgba(255, 120, 80, 0.3), 
                      inset -30px 0 40px rgba(255, 160, 100, 0.5);
          transition: transform 0.1s;
        }

        .lp-btn-login:active { transform: scale(0.98); }

        .lp-divider {
          display: flex;
          align-items: center;
          margin: 32px 0;
          color: #4b5563;
          font-size: 11px;
          letter-spacing: 1px;
          position: relative;
          z-index: 2;
        }
        .line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }

        .social-row { display: flex; gap: 12px; position: relative; z-index: 2; }
        .social-btn {
          flex: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #d1d5db;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .social-btn:hover {
          background: rgba(255,255,255,0.07);
        }

        .lp-footer-text {
          margin-top: 32px;
          color: var(--text-gray);
          font-size: 14px;
        }

        .lp-bottom-nav {
          position: absolute;
          bottom: 40px;
          display: flex;
          gap: 20px;
          font-size: 12px;
          color: #4b5563;
          z-index: 20;
        }
        .lp-bottom-nav a { color: inherit; text-decoration: none; }

        .nav-home {
          position: absolute;
          top: 40px;
          left: 40px;
          color: var(--text-gray);
          text-decoration: none;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 20;
        }
      `}</style>

      <div className="lp-wrapper">
       

        <a href="/" className="nav-home">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Home 
        </a>

        <div className="lp-content">
          <div className="lp-card">
            <div className="card-pattern"></div>
            
            <div className="lp-logo">
              <svg viewBox="0 0 24 24" fill="white">
                {/* Specific Huly 'H' path */}
                <path d="#" />
              </svg>
            </div>

            <h1 className="lp-title">Sign in to Huly</h1>

            <div className="form-group">
              <label className="lp-label">Email</label>
              <input type="email" className="lp-input" placeholder="name@work-email.com" />
            </div>
            <div className="form-group">
              <label className="lp-label">Password</label>
              <input type="email" className="lp-input" placeholder="*********" />
            </div>

            <button className="lp-btn-login">LOG IN</button>

            <div className="lp-divider">
              <div className="line"></div>
              <span style={{margin: '0 15px'}}>OR</span>
              <div className="line"></div>
            </div>

            <div className="social-row">
              <div className="social-btn">
                <img src="https://www.svgrepo.com/show/355037/google.svg" width="16" alt="Google" />
                Sign in with Google
              </div>
              <div className="social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Sign in with GitHub
              </div>
            </div>
          </div>

          <p className="lp-footer-text">
            Don't have an account? <span style={{color: 'white', fontWeight: '600', cursor: 'pointer'}}>Sign up</span>
          </p>
        </div>

        <div className="lp-bottom-nav">
          <a href="#">Terms of Use</a>
          <span style={{opacity: 0.3}}>|</span>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

