import React, { useRef } from "react";
import "./ActionButton.css";

export default function ActionButton() {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = buttonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--opacity", "1");
  };

  const handleMouseLeave = () => {
    const el = buttonRef.current;
    if (!el) return;

    el.style.setProperty("--x", "80%");
    el.style.setProperty("--y", "50%");
    el.style.setProperty("--opacity", "0.6");
  };

  return (
    <div className="huly-left-container">
      <div
        ref={buttonRef}
        className="huly-button-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Ambient outer glow */}
        <div className="button-ambient-glow" />

        <a href="/login" className="huly-action-btn">
          {/* Cursor-following internal glow */}
          <span className="internal-light" />

          <span className="btn-text">SEE IN ACTION</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 9"
            className="btn-arrow"
          >
            <path
              fill="currentColor"
              d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
            />
          </svg>
        </a>
      </div>

      <a href="/dashboard"><button className="btn-secondary2">Learn More</button></a>
    </div>
  );
}
