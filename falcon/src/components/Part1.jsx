import React from "react";
import "./Part1.css";

import pipelineImage from "../images/pipline.png";
import DE from "../images/engine.png";
import time from "../images/time.png";
import cg from "../images/company-grade.png";

export default function Part1() {
  const cards = [
    {
      id: 1,
      title: "Real-Time Ingestion",
      desc: "High-throughput data ingestion,built for scale.",
      gridClass: "short",
      image: pipelineImage,
    },
    {
      id: 2,
      title: "Detection Engine",
      desc: "Advanced rules and machine learning working in unison.",
      gridClass: "long",
      image: DE,
    },
    {
      id: 3,
      title: "Enterprise Control & Compliance",
      desc: "Enterprise-grade security, auditability, and compliance by design.",
      gridClass: "long",
      image: cg,
    },
    {
      id: 4,
      title: "Low-Latency Decisioning",
      desc: "Instant risk decisions delivered in milliseconds.",
      gridClass: "short",
      image: time,
    },
  ];

  return (
    <section className="app-wrapper">
      <div className="content-shell">
        <header className="header">
          <h1>Unrivaled Performance</h1>
          <p>
            F.A.L.C.O.N. — An enterprise-grade detection pipeline engineered for
            accuracy, low latency, and scalable, compliant fraud prevention.
          </p>
        </header>

        <div className="grid-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.gridClass}`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="card-overlay" />

              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
