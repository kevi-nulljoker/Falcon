import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { Check, MapPin, Info, AlertTriangle, TrendingUp, Clock, Globe } from 'lucide-react';

// Topology for the world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const FraudByLocation = () => {
  const [selectedSeverity, setSelectedSeverity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [tooltipContent, setTooltipContent] = useState("");

  // Mapping country ISO codes or names to the colors
  const getCountryColor = (name) => {
    const riskLevels = {
      severe: ["China", "India"],
      high: ["Russia", "Brazil", "Indonesia"],
      moderate: ["United States of America", "Canada", "Australia", "Saudi Arabia", "Argentina"],
      low: ["Greenland", "Mexico", "South Africa", "Germany", "France", "United Kingdom", "Italy", "Spain", "Japan"]
    };

    if (riskLevels.severe.includes(name)) return "#ef4444"; // Red
    if (riskLevels.high.includes(name)) return "#f59e0b";   // Orange
    if (riskLevels.moderate.includes(name)) return "#fbbf24"; // Yellow
    return "#22c55e"; // Green (Low)
  };

  const getRiskLevel = (name) => {
    const riskLevels = {
      severe: ["China", "India"],
      high: ["Russia", "Brazil", "Indonesia"],
      moderate: ["United States of America", "Canada", "Australia", "Saudi Arabia", "Argentina"],
      low: ["Greenland", "Mexico", "South Africa", "Germany", "France", "United Kingdom", "Italy", "Spain", "Japan"]
    };

    if (riskLevels.severe.includes(name)) return "Severe";
    if (riskLevels.high.includes(name)) return "High";
    if (riskLevels.moderate.includes(name)) return "Moderate";
    return "Low";
  };

  const severityOptions = [
    { id: 'severe', label: 'Severe', color: '#ef4444', description: 'Immediate action required' },
    { id: 'high', label: 'High', color: '#f59e0b', description: 'High priority investigation' },
    { id: 'moderate', label: 'Moderate', color: '#fbbf24', description: 'Monitor closely' },
    { id: 'low', label: 'Low', color: '#22c55e', description: 'Low risk, routine check' }
  ];

  const insights = [
    { id: 1, title: "Peak Fraud Hours Detected", desc: "Fraud spikes 2AM-4AM (35×)", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)", border: "rgba(239, 68, 68, 0.3)" },
    { id: 2, title: "Geographic Anomaly", desc: "Mumbai fraud rate +12%", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)", border: "rgba(245, 158, 11, 0.3)" },
    { id: 3, title: "High-Value Transaction Alert", desc: "₹25,090+ has 12.82% fraud rate", color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)", border: "rgba(34, 197, 94, 0.3)" },
    { id: 4, title: "Velocity Pattern", desc: "Multiple txns within 5 mins flagged", color: "#4a6491", bg: "rgba(74, 100, 145, 0.1)", border: "rgba(74, 100, 145, 0.3)" },
  ];

  const handleSeveritySelect = (severityId) => {
    setSelectedSeverity(severityId);
    console.log(`Selected severity: ${severityId}`);
  };

  const handleCountryHover = (geo) => {
    if (geo) {
      const name = geo.properties.name;
      const riskLevel = getRiskLevel(name);
      setTooltipContent(`${name}: ${riskLevel} Risk`);
      setSelectedCountry(name);
    }
  };

  return (
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


      {/* Main Content - Two Columns */}
      <div style={{
        display: 'flex',
        gap: '24px',
        marginBottom: '24px'
      }}>

        {/* Left Column - Map (60% width) */}

        <div style={{
          flex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Map Container */}
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
                <div style={{
                  width: '24px',
                  height: '24px',
                  background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={14} color="white" />
                </div>
                Fraud by Location
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#64748b'
              }}>
                Global fraud risk assessment by country
              </p>
            </div>
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '350px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #eef2f7',
            backgroundColor: '#f8fafc'
          }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 120,
                center: [0, 20]
              }}
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              <ZoomableGroup center={[0, 20]} zoom={1}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const countryName = geo.properties.name;
                      const fillColor = getCountryColor(countryName);

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fillColor}
                          stroke="#ffffff"
                          strokeWidth={0.5}
                          style={{
                            default: {
                              outline: 'none',
                              transition: 'all 0.2s ease',
                            },
                            hover: {
                              fill: selectedCountry === countryName ? '#94a3b8' : fillColor,
                              outline: 'none',
                              cursor: 'pointer',
                              strokeWidth: '1.5px',
                              stroke: '#1e293b',
                              filter: 'brightness(1.1)'
                            },
                            pressed: {
                              outline: 'none',
                            },
                          }}
                          onMouseEnter={() => handleCountryHover(geo)}
                          onMouseLeave={() => {
                            setTooltipContent("");
                            setSelectedCountry(null);
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>

            {/* Tooltip */}
            {tooltipContent && (
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: '#1e293b',
                color: 'white',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                pointerEvents: 'none'
              }}>
                {tooltipContent}
              </div>
            )}

            {/* Map Legend */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              gap: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #eef2f7'
            }}>
              {severityOptions.map((option) => (
                <div key={option.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    background: option.color,
                    borderRadius: '2px'
                  }}></div>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Right Column - Risk Insights (40% width) */}
        <div style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
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
              <div style={{
                width: '24px',
                height: '24px',
                background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TrendingUp size={14} color="white" />
              </div>
              Risk Insights
            </h3>
          </div>


          <div style={{
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #eef2f7',
            padding: '20px',
            height: '100%'
          }}>
            {insights.map((item) => (
              <div key={item.id} style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '14px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                border: `1px solid ${item.border}`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
                }
              }}>
                {/* Number Circle */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: `2px solid ${item.color}`,
                  backgroundColor: item.bg,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '13px',
                  flexShrink: 0
                }}>
                  {item.id}
                </div>

                {/* Text content */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    color: '#1e293b',
                    fontWeight: '600',
                    fontSize: '13px',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {item.id === 1 && <AlertTriangle size={12} color={item.color} />}
                    {item.id === 2 && <Globe size={12} color={item.color} />}
                    {item.id === 3 && <TrendingUp size={12} color={item.color} />}
                    {item.id === 4 && <Clock size={12} color={item.color} />}
                    {item.title}
                  </div>
                  <div style={{
                    color: '#64748b',
                    fontSize: '12px',
                    lineHeight: '1.4'
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{
        background: '#f8fafc',
        borderRadius: '10px',
        padding: '20px',
        borderLeft: '4px solid #4a6491',
        marginTop: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '10px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: '#4a6491',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Info size={12} color="white" />
          </div>
          <h4 style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#1e293b'
          }}>
            Map Instructions
          </h4>
        </div>
        <p style={{
          fontSize: '14px',
          color: '#64748b',
          lineHeight: '1.6',
          margin: 0
        }}>
          Hover over countries to view their fraud risk level. Select a risk severity level to apply global monitoring protocols.
          Countries are color-coded based on real-time fraud activity analysis from our global network.
        </p>
      </div>
    </div>
  );
};

export default FraudByLocation;