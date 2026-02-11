import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  Clock, 
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Info,
  Zap,
  Shield,
  Brain,
  Search
} from 'lucide-react';

const TransactionDetails = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Transaction data
  const transactions = [
    { id: '1', tvnId: 'TXN-06946', timestamp: '18:28:95', tlTimestamp: '16:29:95', amount: '€1,713.11', riskScore: '24% !!', riskPercentage: 24, status: 'Approved' },
    { id: '2', tvnId: 'TXN-11350', timestamp: '18:29:25', tlTimestamp: '18:29:29', amount: '€4,424.69', riskScore: '23% !!', riskPercentage: 23, status: 'Approved' },
    { id: '3', tvnId: 'TXN-01767', timestamp: '18:29:25', tlTimestamp: '18:29:25', amount: '€3,862.18', riskScore: '79% !!', riskPercentage: 79, status: 'Blocked' },
    { id: '4', tvnId: 'TXN-14794', timestamp: '18:28:50', tlTimestamp: '18:29:50', amount: '€9,671.58', riskScore: '37% !!', riskPercentage: 37, status: 'Approved' },
    { id: '5', tvnId: 'TXN-06196', timestamp: '18:28:56', tlTimestamp: '18:28:56', amount: '€3,677.26', riskScore: '25% !!', riskPercentage: 25, status: 'Approved' },
    { id: '6', tvnId: 'TXN-06198', timestamp: '18:28:58', tlTimestamp: '18:28:58', amount: '€3,617.26', riskScore: '85% !!', riskPercentage: 85, status: 'Blocked' },
    { id: '7', tvnId: 'TXN-06186', timestamp: '18:48:58', tlTimestamp: '18:48:58', amount: '€3,177.26', riskScore: '15% !!', riskPercentage: 15, status: 'Approved' },
  ];

  // Risk score data
  const riskScores = [
    { name: 'Average Risk Score', value: 28, change: 'increase', description: 'Increased from last 24h' },
    { name: 'Average Model Score', value: 60, change: 'increase', description: 'Increased from last 24h' },
    { name: 'Average Anomaly Score', value: 32, change: 'increase', description: 'Increased from last 24h' },
    { name: 'Average Semantic Score', value: 7, change: 'stable', description: 'On Discussion' },
  ];

  // Transaction detail data
  const transactionDetails = {
    tvnId: 'TXN-01767',
    status: 'Approved',
    finalRiskScore: 29,
    riskLevel: 'Medium Risk',
    fraudIndicators: 'No Fraud Indicators',
    components: [
      { name: 'Rule Score (w=0.45)', score: 21, weight: 0.45, description: 'Sum of soft-rule points' },
      { name: 'Model Score (w=0.3)', score: 42, weight: 0.3, description: 'ML probability × 100 (AI Stage 1)' },
      { name: 'Anomaly Score (w=0.15)', score: 27, weight: 0.15, description: 'Unsupervised anomaly detector output' },
      { name: 'Semantic Score (w=0.1)', score: 31, weight: 0.1, description: 'Similarity/semantic signal (AI Stage 2)' },
    ],
    timeline: [
      { step: 'Transaction Initiated', time: '18:29:25', status: 'Completed' },
      { step: 'Risk Engine Analysis', time: '42ns', duration: '42ns', status: 'Analyzed' },
      { step: 'Decision: Approved', time: 'Completed', status: 'Success' },
    ]
  };

  const handleTransactionClick = () => {
    setSelectedTransaction(transactionDetails);
  };

  const getRiskColor = (score) => {
    if (score < 20) return '#10b981'; // Low - green
    if (score < 40) return '#f59e0b'; // Medium - yellow
    if (score < 60) return '#ef4444'; // High - red
    return '#dc2626'; // Very High - darker red
  };

  const getStatusColor = (status) => {
    return status === 'Approved' ? '#10b981' : '#ef4444';
  };

  const getStatusIcon = (status) => {
    return status === 'Approved' ? <CheckCircle size={16} /> : <XCircle size={16} />;
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #eef2f7',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      marginTop: '20px',
      marginBottom: '30px',
      position: 'relative'
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
            <BarChart3 size={20} color="#4a6491" />
            Transactions Dashboard
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#64748b'
          }}>
            Real-time transaction monitoring and risk analysis
          </p>
        </div>

        {/* Search Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f8fafc',
          padding: '8px 16px',
          borderRadius: '25px',
          border: '1px solid #eef2f7',
          minWidth: '250px'
        }}>
          <Search size={18} color="#64748b" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#1e293b',
              marginLeft: '10px',
              outline: 'none',
              width: '100%',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div style={{
        display: 'flex',
        gap: '24px',
        marginBottom: '24px'
      }}>
        {/* Left Column - Transactions Table */}
        <div style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Clock size={16} color="#4a6491" />
              Recent Transactions
            </h4>
            <div style={{
              fontSize: '12px',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Clock size={12} />
              <span>Updated: 18:37 08-01-2026</span>
            </div>
          </div>

          {/* Table */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #eef2f7',
            overflow: 'hidden'
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              background: '#2c3e50',
              color: 'white',
              padding: '16px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              <div>Txn ID</div>
              <div>Timestamp</div>
              <div>TL Timestamp</div>
              <div>Amount</div>
              <div>Risk Score</div>
              <div>Status</div>
            </div>

            {/* Table Rows */}
            {transactions.map((txn) => (
              <div
                key={txn.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  padding: '16px',
                  borderBottom: '1px solid #eef2f7',
                  background: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    background: '#f8fafc',
                    transform: 'translateX(4px)'
                  }
                }}
                onClick={handleTransactionClick}
              >
                <div style={{
                  fontWeight: '600',
                  color: '#1e293b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <ChevronRight size={12} color="#4a6491" />
                  {txn.tvnId}
                </div>
                <div style={{ color: '#64748b' }}>{txn.timestamp}</div>
                <div style={{ color: '#64748b' }}>{txn.tlTimestamp}</div>
                <div style={{
                  fontWeight: '600',
                  color: '#1e293b'
                }}>
                  {txn.amount}
                </div>
                <div style={{
                  fontWeight: '700',
                  color: getRiskColor(txn.riskPercentage),
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <AlertTriangle size={12} />
                  {txn.riskScore}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: getStatusColor(txn.status),
                  fontWeight: '600'
                }}>
                  {getStatusIcon(txn.status)}
                  {txn.status}
                </div>
              </div>
            ))}
          </div>

          {/* Table Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
            padding: '12px 16px',
            background: '#f8fafc',
            borderRadius: '10px',
            border: '1px solid #eef2f7'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Total Transactions</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>5</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Approved</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#10b981' }}>3</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Blocked</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#ef4444' }}>2</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Avg. Risk</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#f59e0b' }}>27.6%</div>
            </div>
          </div>
        </div>

        {/* Right Column - Risk Score Summary */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Shield size={18} color="#4a6491" />
              Risk Score Summary
            </h4>
          </div>

          {/* Risk Score Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {riskScores.map((score, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #eef2f7',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {score.name === 'Average Risk Score' && <AlertTriangle size={14} color="#4a6491" />}
                    {score.name === 'Average Model Score' && <Brain size={14} color="#4a6491" />}
                    {score.name === 'Average Anomaly Score' && <Zap size={14} color="#4a6491" />}
                    {score.name === 'Average Semantic Score' && <Info size={14} color="#4a6491" />}
                    {score.name}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: score.change === 'increase' ? '#10b981' : 
                           score.change === 'decrease' ? '#ef4444' : '#64748b',
                    fontSize: '12px'
                  }}>
                    {score.change === 'increase' ? <ArrowUp size={12} /> : 
                     score.change === 'decrease' ? <ArrowDown size={12} /> : null}
                    {score.change !== 'stable' && '24h'}
                  </div>
                </div>

                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: getRiskColor(score.value),
                  marginBottom: '4px'
                }}>
                  {score.value}
                </div>

                <div style={{
                  fontSize: '12px',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {score.change === 'increase' && <TrendingUp size={12} color="#10b981" />}
                  {score.change === 'decrease' && <TrendingUp size={12} color="#ef4444" style={{ transform: 'rotate(180deg)' }} />}
                  {score.description}
                </div>
              </div>
            ))}
          </div>

          </div>
          </div>

      {/* Transaction Details Sidebar */}
      {selectedTransaction && (
        <div style={{
          position: 'fixed',
          top: '0',
          right: '0',
          width: '500px',
          height: '100vh',
          background: 'white',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
          zIndex: 1000,
          overflowY: 'auto',
          animation: 'slideIn 0.3s ease'
        }}>
          {/* Sidebar Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
            color: 'white',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <BarChart3 size={20} />
                Transaction Details
              </h3>
              <p style={{
                fontSize: '14px',
                opacity: 0.9
              }}>
                {selectedTransaction.tvnId}
              </p>
            </div>
            <button
              onClick={() => setSelectedTransaction(null)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                ':hover': {
                  background: 'rgba(255,255,255,0.2)'
                }
              }}
            >
              ×
            </button>
          </div>

          {/* Sidebar Content */}
          <div style={{ padding: '24px' }}>
            {/* Status Card */}
            <div style={{
              background: selectedTransaction.status === 'Approved' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px',
              border: `1px solid ${selectedTransaction.status === 'Approved' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {selectedTransaction.status === 'Approved' ? 
                    <CheckCircle size={24} color="#10b981" /> : 
                    <XCircle size={24} color="#ef4444" />
                  }
                  <div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: selectedTransaction.status === 'Approved' ? '#10b981' : '#ef4444'
                    }}>
                      {selectedTransaction.status}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#64748b'
                    }}>
                      Final Risk Score: {selectedTransaction.finalRiskScore}%
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '16px'
              }}>
                <div style={{
                  background: 'white',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #eef2f7',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: getRiskColor(selectedTransaction.finalRiskScore)
                }}>
                  {selectedTransaction.riskLevel}
                </div>
                <div style={{
                  background: 'white',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #eef2f7',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#10b981'
                }}>
                  {selectedTransaction.fraudIndicators}
                </div>
              </div>
            </div>

            {/* Risk Score Components */}
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Shield size={16} color="#4a6491" />
              Risk Score Components
            </h4>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '24px'
            }}>
              {selectedTransaction.components.map((component, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '10px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1e293b'
                    }}>
                      {component.name}
                    </div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: getRiskColor(component.score)
                    }}>
                      {component.score}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#64748b'
                  }}>
                    {component.description}
                  </div>
                  <div style={{
                    marginTop: '8px',
                    fontSize: '11px',
                    color: '#64748b',
                    background: 'rgba(74, 100, 145, 0.1)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'inline-block'
                  }}>
                    Weight: {component.weight}
                  </div>
                </div>
              ))}
            </div>

            {/* Calculation */}
            <div style={{
              background: 'rgba(74, 100, 145, 0.05)',
              borderRadius: '10px',
              padding: '16px',
              marginBottom: '24px',
              border: '1px solid rgba(74, 100, 145, 0.1)',
              fontSize: '13px',
              color: '#4a6491',
              fontFamily: 'monospace'
            }}>
              final_risk = (0.45×21) + (0.3×42) + (0.15×27) + (0.1×31) = 29
            </div>

            {/* Timeline */}
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Clock size={16} color="#4a6491" />
              Decision Timeline
            </h4>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              paddingLeft: '20px',
              borderLeft: '2px solid #eef2f7'
            }}>
              {selectedTransaction.timeline.map((step, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    paddingBottom: '16px'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: '-25px',
                    top: '0',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: step.status === 'Success' ? '#10b981' : 
                               step.status === 'Analyzed' ? '#4a6491' : '#f59e0b',
                    border: '2px solid white'
                  }} />
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '4px'
                  }}>
                    {step.step}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    color: '#64748b'
                  }}>
                    <Clock size={12} />
                    <span>{step.time}</span>
                    {step.duration && (
                      <span style={{
                        background: 'rgba(74, 100, 145, 0.1)',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        {step.duration}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {selectedTransaction && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedTransaction(null)}
        />
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TransactionDetails;