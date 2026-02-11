import { TrendingUp, AlertTriangle, Bell, Search, Calendar } from 'lucide-react';
import React from 'react';
import FraudByLocation from '../components/FraudByLocation';
import TransactionDetails from '../components/TransactionDetails';

const Risk = () => {
  // 24-hour data with all hours
  const hourlyData = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0') + ':00';
    // Base data with peaks during typical fraud hours
    let fraudCount = 0;
    if (i === 0) fraudCount = 12;  // 00:00
    else if (i === 2) fraudCount = 8;  // 02:00
    else if (i === 4) fraudCount = 5;  // 04:00
    else if (i === 6) fraudCount = 15;  // 06:00
    else if (i === 8) fraudCount = 35;  // 08:00
    else if (i === 10) fraudCount = 68;  // 10:00
    else if (i === 12) fraudCount = 112;  // 12:00
    else if (i === 14) fraudCount = 89;  // 14:00
    else if (i === 16) fraudCount = 75;  // 16:00
    else if (i === 18) fraudCount = 52;  // 18:00
    else if (i === 20) fraudCount = 28;  // 20:00
    else if (i === 22) fraudCount = 18;  // 22:00
    else if (i === 1) fraudCount = 10;  // 01:00
    else if (i === 3) fraudCount = 6;  // 03:00
    else if (i === 5) fraudCount = 8;  // 05:00
    else if (i === 7) fraudCount = 22;  // 07:00
    else if (i === 9) fraudCount = 48;  // 09:00
    else if (i === 11) fraudCount = 92;  // 11:00
    else if (i === 13) fraudCount = 104;  // 13:00
    else if (i === 15) fraudCount = 82;  // 15:00
    else if (i === 17) fraudCount = 64;  // 17:00
    else if (i === 19) fraudCount = 40;  // 19:00
    else if (i === 21) fraudCount = 22;  // 21:00
    else if (i === 23) fraudCount = 15;  // 23:00
    
    return { hour, fraudCount };
  });

  // Find max value for scaling
  const maxFraud = Math.max(...hourlyData.map(item => item.fraudCount));

  const getBarHeight = (value) => {
    return (value / maxFraud) * 120; // 120 is the max height from your image
  };

  const getBarColor = (value) => {
    if (value > 80) return '#ef4444'; // High fraud
    if (value > 40) return '#f59e0b'; // Medium fraud
    return '#10b981'; // Low fraud
  };

  const getHourLabel = (hour) => {
    // Show abbreviated format for 24-hour display
    const hourNum = parseInt(hour.split(':')[0]);
    return hourNum === 0 ? '12a' : 
           hourNum === 12 ? '12p' :
           hourNum > 12 ? `${hourNum - 12}p` : `${hourNum}a`;
  };

  const shouldShowLabel = (index) => {
    // Show labels for every 2nd hour to avoid clutter
    return index % 2 === 0;
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
      fontFamily: "'Inter', sans-serif",
      // padding: '0 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .enhanced-dashboard-header {
          background: white;
          color: black;
          padding: 20px 15px;
          border-radius: 19px;
        }

        .title-section h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }

        .title-section p {
          margin: 5px 0 0 0;
          opacity: 0.9;
          font-size: 15px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .search-container {
          display: flex;
          align-items: center;
          background: #f5f5f5;
          padding: 15px 15px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }

        .search-input {
          background: transparent;
          border: none;
          color: white;
          margin-left: 10px;
          outline: none;
          width: 250px;
        }

        .search-input::placeholder {
          color: Black;
        }

        .notification-icon {
          position: relative;
          cursor: pointer;
          padding: 8px;
          align-items: right;
          justify-content: right;
        }

        .notification-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #ff4757;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-profile-section {
          display: flex;
          align-items: right;
          justify-content: right;
          gap: 12px;
          background: #f5f5f5;
          padding: 8px 15px;
          border-radius: 25px;
          backdrop-filter: blur(15px);
          width: 100%;
        }

        .avatar-initials {
          width: 36px;
          height: 36px;
          background: white;
          color: #764ba2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .user-info-text {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          font-size: 14px;
        }

        .user-email {
          font-size: 12px;
          opacity: 0.8;
          font-family: monospace;
        }

        .middle-spacer {
          flex: 1;
        }


        /* Custom scrollbar for the chart */
        .chart-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .chart-scroll-container::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .chart-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #004d40 0%, #2e7d32 100%);
          border-radius: 10px;
        }

        .chart-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #00332b 0%, #1b5e20 100%);
        }


        ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #004d40 0%, #2e7d32 100%);
  border-radius: 10px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #00332b 0%, #1b5e20 100%);
}

      `}</style>

      
<div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #eef2f7',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        marginTop: '20px',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 4px 0'
            }}>
              Risk Analytics
            </h1>
            <p style={{
              fontSize: '15px',
              color: '#64748b',
              margin: 0
            }}>
          Advanced Techniques for Proactive Risk Management
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






<FraudByLocation/>


<TransactionDetails/>













      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #eef2f7',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        marginTop: '20px',
        marginBottom: '30px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <TrendingUp size={20} color="#004d40" />
              24-Hour Fraud Detection
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#64748b'
            }}>
              Real-time fraud patterns throughout the day (00:00 to 23:00)
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#10b981',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Low</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#f59e0b',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Medium</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#ef4444',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>High</span>
            </div>
          </div>
        </div>

        {/* Chart Container with Scroll */}
       <div style={{
            position: 'relative',
            height: '200px',
            marginBottom: '20px',
            width: '100%',
            overflow: 'visible'
          }}>
            {/* Y-axis Labels */}
            <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              height: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingRight: '15px',
              textAlign: 'right',
              width: '50px',
              background: 'white',
              zIndex: 2
            }}>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '700' }}>120</span>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>90</span>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>60</span>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>30</span>
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '700' }}>0</span>
            </div>

            {/* Grid Lines */}
            <div style={{
              position: 'absolute',
              left: '60px',
              right: '0',
              top: '0',
              height: '150px',
              borderLeft: '2px solid #cbd5e1',
              borderBottom: '2px solid #cbd5e1'
            }}>
              {/* Horizontal grid lines */}
              {[0, 30, 60, 90, 120].map((value, index) => {
                const topPosition = 100 - (value / 120 * 100);
                return (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      top: `${topPosition}%`,
                      borderTop: '1px solid #e2e8f0'
                    }}
                  />
                );
              })}
            </div>

            {/* Bars Container - Compact and Responsive */}
            <div style={{
              position: 'absolute',
              left: '60px',
              right: '0',
              top: '0',
              height: '150px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
            }}>
              {hourlyData.map((item, index) => {
                const height = getBarHeight(item.fraudCount);
                const color = getBarColor(item.fraudCount);
                
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: 'calc(100% / 24 - 2px)', // Evenly distribute 24 bars
                      height: '100%',
                      justifyContent: 'flex-end',
                      position: 'relative'
                    }}
                  >
                    {/* Bar */}
                    <div
                      style={{
                        width: '70%',
                        maxWidth: '24px',
                        height: `${height}px`,
                        background: color,
                        borderRadius: '4px 4px 0 0',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        minWidth: '14px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                      }}
                    >
                      {/* Tooltip on hover */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-50px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#1e293b',
                          color: 'white',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                          opacity: 0,
                          transition: 'opacity 0.2s ease',
                          pointerEvents: 'none',
                          zIndex: 20,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          textAlign: 'center'
                        }}
                        className="bar-tooltip"
                      >
                        <div style={{ marginBottom: '2px' }}>{item.hour}</div>
                        <div style={{ fontSize: '14px', fontWeight: '800' }}>{item.fraudCount} cases</div>
                      </div>
                      
                      {/* Value label on bar (only for high values) */}
                      {item.fraudCount > 50 && (
                        <div style={{
                          position: 'absolute',
                          top: '-20px',
                          left: '0',
                          right: '0',
                          textAlign: 'center',
                          fontSize: '10px',
                          fontWeight: '700',
                          color: color,
                          opacity: 0.9
                        }}>
                          {item.fraudCount}
                        </div>
                      )}
                    </div>
                    
                    {/* Hour Label - Compact and readable */}
                    <div
                      style={{
                        marginTop: '8px',
                        fontSize: '11px',
                        color: '#475569',
                        fontWeight: '600',
                        textAlign: 'center',
                        width: '100%',
                        padding: '2px 0',
                        transform: 'rotate(-45deg)',
                        transformOrigin: 'top left',
                        whiteSpace: 'nowrap',
                        position: 'absolute',
                        bottom: '-35px',
                        left: '50%',
                        marginLeft: '-20px'
                      }}
                    >
                      {getHourLabel(item.hour)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        {/* Time Period Indicators */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#64748b'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '2px'
            }}></div>
            <span>00:00 - 08:00 (Low Activity)</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#64748b'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: '2px'
            }}></div>
            <span>08:00 - 16:00 (Business Hours)</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#64748b'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: '#fee2e2',
              border: '1px solid #ef4444',
              borderRadius: '2px'
            }}></div>
            <span>16:00 - 20:00 (Peak Fraud)</span>
          </div>
        </div>

        {/* Peak Hours Indicator */}
        <div style={{
          background: '#fef2f2',
          border: '1px solid #fee2e2',
          borderRadius: '10px',
          padding: '16px',
          marginTop: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px',
            flexWrap: 'wrap'
          }}>
            <AlertTriangle size={18} color="#ef4444" />
            <span style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#991b1b'
            }}>
              Critical Alert: Peak Fraud Period 10:00 - 14:00 (112 cases peak)
            </span>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#64748b',
            margin: 0,
            lineHeight: '1.5'
          }}>
            Fraud activity spikes 3.5x during business hours with highest concentration between 10:00-14:00. 
            Consider increasing monitoring intensity and deploying additional verification steps during these hours.
          </p>
          
          {/* Summary Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px',
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid #fee2e2'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Total Daily Cases</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>1,284</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Avg. per Hour</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>53.5</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Peak Hour</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#ef4444' }}>12:00 (112)</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Lowest Hour</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#10b981' }}>04:00 (5)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risk;