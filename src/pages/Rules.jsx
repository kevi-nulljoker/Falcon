import React, { useState } from 'react';
import { 
  Shield, Target, Zap, TrendingUp, 
  Download, Filter, RefreshCw, Calendar 
} from 'lucide-react';

const Rules = () => {
  const hardBlockRules = [
    {
      id: 1,
      name: 'Blacklist / Known Fraud',
      description: 'Blocks entities with prior fraud history',
      blockRate: '7.2%',
      fraudEfficacy: '89.4%',
      triggerRate: '0.5%',
      icon: '🚫',
      color: '#ef4444'
    },
    {
      id: 2,
      name: 'Impossible Travel',
      description: 'Flags physically impossible travel patterns',
      blockRate: '6.3%',
      fraudEfficacy: '78.4%',
      triggerRate: '0.9%',
      icon: '✈️',
      color: '#f59e0b'
    },
    {
      id: 3,
      name: 'Velocity Abuse',
      description: 'Catches rapid-fire transaction patterns',
      blockRate: '5.1%',
      fraudEfficacy: '80.1%',
      triggerRate: '0.4%',
      icon: '⚡',
      color: '#8b5cf6'
    },
    // {
    //   id: 4,
    //   name: 'Absolute Max Amount',
    //   description: 'Prevents extreme amount outliers',
    //   blockRate: '6.2%',
    //   fraudEfficacy: '89.5%',
    //   triggerRate: '0.1%',
    //   icon: '💰',
    //   color: '#10b981'
    // }
  ];

  const challengeRules = [
    {
      id: 1,
      name: 'New Device / High Value',
      description: 'Challenges large purchases from new devices',
      triggerRate: '4.8%',
      fraudEfficacy: '58.3%',
      blockRate: '1.5%',
      icon: '🛡️',
      color: '#3b82f6'
    },
    {
      id: 2,
      name: 'Card Testing',
      description: 'Detects small amount testing patterns',
      triggerRate: '1.1%',
      fraudEfficacy: '46.7%',
      blockRate: '0.2%',
      icon: '💳',
      color: '#8b5cf6'
    },
    {
      id: 3,
      name: 'Geo-Anomalies',
      description: 'Flags unusual location patterns',
      triggerRate: '5.2%',
      fraudEfficacy: '64.8%',
      blockRate: '1.0%',
      icon: '🌍',
      color: '#f59e0b'
    },
    {
      id: 4,
      name: 'Statistical Deviation',
      description: 'Catches deviations from user average',
      triggerRate: '6.1%',
      fraudEfficacy: '38.6%',
      blockRate: '0.4%',
      icon: '📊',
      color: '#06b6d4'
    },
    {
      id: 5,
      name: 'Credential Reputation',
      description: 'Flags suspicious login behavior',
      triggerRate: '6.5%',
      fraudEfficacy: '47.6%',
      blockRate: '0.3%',
      icon: '🔐',
      color: '#ef4444'
    }
  ];

  const keyMetrics = [
    { label: 'Most Effective', value: 'Blacklist Rule', subvalue: '89.4% fraud caught', icon: '🏆', color: '#10b981' },
    { label: 'Lowest Trigger', value: 'Credential Reputation', subvalue: '6.5% trigger rate', icon: '📉', color: '#3b82f6' },
    { label: 'Top Exposure', value: 'Geo-Anomalies', subvalue: '44.2% efficiency', icon: '⚠️', color: '#f59e0b' },
    { label: 'Needs Review', value: 'Statistical Deviation', subvalue: '38.6% efficacy', icon: '🔍', color: '#ef4444' }
  ];

  const getEfficacyColor = (percentage) => {
    const perc = parseFloat(percentage);
    if (perc >= 80) return '#10b981';
    if (perc >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      fontFamily: "'Inter', sans-serif",
      // padding: '20px',
      marginTop: '20px',
      width: '100%'
    }}>
      <style>{`

         html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
}
  
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .rule-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          border: 1px solid #eef2f7;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          height: 100%;
        }

        .rule-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          border-color: #c7d2fe;
        }

        .rule-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .rule-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 16px;
        }

        .metric-item {
          background: #f8fafc;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #eef2f7;
        }

        .metric-label {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .metric-value {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
        }

        .metric-sub {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 2px;
        }

        .key-metric-card {
          background: white;
          border-radius: 12px;
          padding: 16px;
          border: 1px solid #eef2f7;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .key-metric-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .two-column-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          margin-top: 24px;
        }

        .rules-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 20px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-badge {
          padding: 4px 12px;
          background: #e0f2fe;
          color: #0369a1;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-left: 12px;
        }

        @media (max-width: 1200px) {
          .two-column-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .rules-grid {
            grid-template-columns: 1fr;
          }
          
          .two-column-grid {
            gap: 20px;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      {/* Page Header */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #eef2f7',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 4px 0'
            }}>
              Rule Performance Overview
            </h1>
            <p style={{
              fontSize: '15px',
              color: '#64748b',
              margin: 0
            }}>
              Real-time fraud detection rules analytics & optimization recommendations
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#f8fafc',
              padding: '8px 16px',
              borderRadius: '25px',
              border: '1px solid #eef2f7'
            }}>
              <Calendar size={16} color="#64748b" />
              <span style={{
                marginLeft: '8px',
                fontSize: '14px',
                color: '#64748b'
              }}>
                Jan 08, 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="two-column-grid">
        {/* Left Column */}
        <div>
          {/* Hard Block Rules */}
          <div style={{ marginBottom: '30px' }}>
            <div className="section-header">
              <h2 className="section-title">
                <Shield size={20} color="#ef4444" />
                HARD BLOCK RULES
                <span className="section-badge">Blocks 7.2% of transactions</span>
              </h2>
              <button style={{
                padding: '8px 16px',
                background: '#f8f9fa',
                border: '1px solid #eef2f7',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#4a5568',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}>
                <Download size={14} />
                Export
              </button>
            </div>

            {/* 2x2 Grid for Hard Block Rules */}
            <div className="rules-grid">
              {hardBlockRules.map((rule) => (
                <div key={rule.id} className="rule-card">
                  <div className="rule-header">
                    <div className="rule-icon" style={{ background: `${rule.color}15`, color: rule.color }}>
                      {rule.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>
                        {rule.name}
                      </div>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        {rule.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="metrics-grid">
                    <div className="metric-item">
                      <div className="metric-label">Block Rate</div>
                      <div className="metric-value" style={{ color: rule.color }}>{rule.blockRate}</div>
                      <div className="metric-sub">{rule.triggerRate} trigger rate</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-label">Fraud Efficacy</div>
                      <div className="metric-value" style={{ color: getEfficacyColor(rule.fraudEfficacy) }}>{rule.fraudEfficacy}</div>
                      <div className="metric-sub">Efficiency score</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Soft Score Rules */}
          <div>
            <div className="section-header">
              <h2 className="section-title">
                <Target size={20} color="#3b82f6" />
                CHALLENGE & SOFT SCORE
                <span className="section-badge">4.8% challenge rate</span>
              </h2>
              <button style={{
                padding: '8px 16px',
                background: '#f8f9fa',
                border: '1px solid #eef2f7',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#4a5568',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}>
                <Filter size={14} />
                Filter
              </button>
            </div>

            {/* 2x2 Grid for Challenge Rules */}
            <div className="rules-grid">
              {challengeRules.map((rule) => (
                <div key={rule.id} className="rule-card">
                  <div className="rule-header">
                    <div className="rule-icon" style={{ background: `${rule.color}15`, color: rule.color }}>
                      {rule.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>
                        {rule.name}
                      </div>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        {rule.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="metrics-grid">
                    <div className="metric-item">
                      <div className="metric-label">Trigger Rate</div>
                      <div className="metric-value" style={{ color: rule.color }}>{rule.triggerRate}</div>
                      <div className="metric-sub">{rule.blockRate} block rate</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-label">Fraud Efficacy</div>
                      <div className="metric-value" style={{ color: getEfficacyColor(rule.fraudEfficacy) }}>{rule.fraudEfficacy}</div>
                      <div className="metric-sub">Efficiency score</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Key Metrics */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '24px', 
            border: '1px solid #eef2f7',
            marginBottom: '24px'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px' 
            }}>
              <Zap size={20} color="#f59e0b" />
              KEY METRICS
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '16px' 
            }}>
              {keyMetrics.map((metric, index) => (
                <div key={index} className="key-metric-card">
                  <div className="key-metric-icon" style={{ background: `${metric.color}15`, color: metric.color }}>
                    {metric.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500', marginBottom: '4px' }}>
                      {metric.label}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '2px' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                      {metric.subvalue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Summary */}
          <div style={{ 
            background: '#004d40', 
            borderRadius: '16px', 
            padding: '24px', 
            color: 'white'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '700', 
              marginBottom: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px' 
            }}>
              <TrendingUp size={20} />
              PERFORMANCE SUMMARY
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>Total Fraud Prevented</span>
                <span style={{ fontSize: '20px', fontWeight: '800' }}>$2.4M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>False Positive Rate</span>
                <span style={{ fontSize: '20px', fontWeight: '800' }}>1.2%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>Avg. Response Time</span>
                <span style={{ fontSize: '20px', fontWeight: '800' }}>47ms</span>
              </div>
            </div>
            
            <button style={{
              width: '100%',
              padding: '12px',
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}>
              <RefreshCw size={16} />
              Run Performance Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;