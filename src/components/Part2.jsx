import React from "react";
import "./Part2.css";
import {
  BrainCircuit,
  FingerprintPattern,
  Gauge,
  Paperclip,
  Scale,
  Zap,
} from "lucide-react";

import PAGE from "../images/PIPELINE.png";

export default function Part2() {
  const features = [
    {
      title: "Real-Time Rule Engine",
      desc: "Sub-millisecond rule evaluation with hot-reload capability. Catch known patterns instantly.",
      icon: <Zap color="#0088FF" size={40} />,
    },
    {
      title: "Dual-Stage AI",
      desc: "Structured ML + LLM encoder for comprehensive analysis of both tabular and semantic features.",
      icon: <BrainCircuit color="#0088FF" size={40} />,
    },
    {
      title: "Gray-Zone Intelligence",
      desc: "Sophisticated handling of uncertain transactions with dynamic scoring and adaptive thresholds.",
      icon: <Scale color="#0088FF" size={40} />,
    },
    {
      title: "Explainability & Audit",
      desc: "Full decision lineage for every transaction. Regulatory-ready audit logs and model governance.",
      icon: <Paperclip color="#0088FF" size={40} />,
    },
    {
      title: "Dynamic Friction",
      desc: "Risk-proportionate authentication challenges. Minimal friction for good users, maximum for threats.",
      icon: <FingerprintPattern color="#0088FF" size={40} />,
    },
    {
      title: "Low Latency, High Precision",
      desc: "P99 latency under 50ms with 99.7% accuracy. Enterprise-grade reliability at scale.",
      icon: <Gauge color="#0088FF" size={40} />,
    },
  ];

  return (
    <section className="github-section">
      <div className="container">
        {/* Header */}
        <header className="gh-header">
          <h2>
            Everything in sync.
            <br />
            Always.
          </h2>
          <p>
            Seamlessly connect detection, decisioning, and compliance across your
            entire fraud pipeline.
          </p>
        </header>

        {/* Mockup Area */}
        <div className="gh-mockup-area">
          <div className="mockup-frame">
            <div className="placeholder-ui">
              <img
                src={PAGE}
                alt="Fraud Detection Pipeline"
                className="mockup-image"
              />
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="feature-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
