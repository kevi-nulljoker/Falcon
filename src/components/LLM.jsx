// LLM.jsx
import React, { useState } from 'react';
import { 
  Brain, 
  AlertTriangle, 
  Zap, 
  Search, 
  FileText, 
  Link, 
  Cpu,
  Clock,
  Shield,
  BarChart,
  TrendingUp,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  XCircle,
  Sparkles,
  Database,
  Layers,
  GitBranch
} from 'lucide-react';

const LLM = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPattern, setSelectedPattern] = useState(null);

  // LLM Configuration
  const llmConfig = {
    model: 'FraudBERT-v2.1',
    version: 'Encoder Layer 8',
    tokensProcessed: '4.2M/day',
    latency: '120ms avg',
    accuracy: '94.7%',
    trainingData: '12M labeled transactions',
    lastUpdated: '3 days ago'
  };

  // Semantic Pattern Examples
  const semanticPatterns = [
    {
      id: 1,
      name: 'Quick Loan Scam',
      confidence: 0.92,
      description: 'Merchant descriptions and payment notes show high similarity to known loan scam patterns',
      keywords: ['urgent loan', 'instant cash', 'emergency funding', 'no credit check'],
      similarityScore: 0.82,
      riskLevel: 'high',
      examples: [
        'URGENT: Instant loan approval needed',
        'Emergency cash transfer - quick processing',
        'Loan disbursement - immediate action required'
      ]
    },
    {
      id: 2,
      name: 'Merchant Mismatch',
      confidence: 0.87,
      description: 'Transaction description doesn\'t match merchant category code',
      keywords: ['electronics store', 'grocery purchase', 'service fee mismatch'],
      similarityScore: 0.76,
      riskLevel: 'medium',
      examples: [
        'Electronics purchase at grocery merchant',
        'Service fee for retail transaction',
        'Food delivery from electronics vendor'
      ]
    },
    {
      id: 3,
      name: 'Hidden Fee Pattern',
      confidence: 0.79,
      description: 'Language patterns indicating hidden charges or fee obfuscation',
      keywords: ['processing fee', 'service charge', 'admin fee', 'convenience fee'],
      similarityScore: 0.68,
      riskLevel: 'medium',
      examples: [
        'Additional processing fee required',
        'Service charge for transaction',
        'Admin fee for payment processing'
      ]
    },
    {
      id: 4,
      name: 'Time Pressure Language',
      confidence: 0.85,
      description: 'Language indicating urgency or time-limited offers',
      keywords: ['limited time', 'act now', 'today only', 'expiring soon'],
      similarityScore: 0.71,
      riskLevel: 'medium',
      examples: [
        'Offer expires in 24 hours',
        'Limited time only - act fast',
        'Today\'s special pricing ending soon'
      ]
    }
  ];

  // LLM Processing Pipeline
  const processingStages = [
    {
      stage: 1,
      name: 'Text Extraction',
      description: 'Extract merchant description, payment notes, and transaction metadata',
      latency: '5ms',
      output: 'Raw text tokens',
      icon: <FileText size={16} />
    },
    {
      stage: 2,
      name: 'Embedding Generation',
      description: 'Convert text to 768-dimensional semantic embeddings',
      latency: '35ms',
      output: 'BERT embeddings',
      icon: <Layers size={16} />
    },
    {
      stage: 3,
      name: 'Pattern Matching',
      description: 'Compare against 15,000+ known fraud patterns',
      latency: '45ms',
      output: 'Similarity scores',
      icon: <Search size={16} />
    },
    {
      stage: 4,
      name: 'Context Fusion',
      description: 'Combine with transaction metadata and user history',
      latency: '25ms',
      output: 'Contextual risk score',
      icon: <GitBranch size={16} />
    },
    {
      stage: 5,
      name: 'Score Generation',
      description: 'Calculate final semantic risk score (0-100)',
      latency: '10ms',
      output: 'Semantic score',
      icon: <BarChart size={16} />
    }
  ];

  // Real-time Example
  const realTimeExample = {
    transactionId: 'TXN-01767',
    merchantDescription: 'URGENT LOAN DISBURSEMENT - INSTANT APPROVAL',
    paymentNote: 'Emergency cash needed for medical bills - quick processing required',
    semanticScore: 75,
    riskFactors: [
      'High similarity to loan scam patterns (0.82)',
      'Time pressure language detected',
      'Merchant category mismatch (Financial service from retail merchant)',
      'Unusual payment note structure'
    ],
    confidence: 0.87
  };

  // How LLM fits in ensemble
  const ensembleWeights = [
    { model: 'Rule Engine', weight: 0.45, color: '#10b981' },
    { model: 'GBDT Model', weight: 0.30, color: '#3b82f6' },
    { model: 'Anomaly Detection', weight: 0.15, color: '#f59e0b' },
    { model: 'LLM Semantic', weight: 0.10, color: '#8b5cf6' }
  ];

  const handlePatternSelect = (pattern) => {
    setSelectedPattern(pattern);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #eef2f7',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        borderBottom: '1px solid #eef2f7',
        paddingBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Brain size={22} color="white" />
          </div>
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 4px 0'
            }}>
              LLM Semantic Encoder
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#64748b',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>Version: {llmConfig.version}</span>
              <span style={{ color: '#10b981', fontWeight: '600' }}>
                <Sparkles size={12} style={{ marginRight: '4px' }} />
                Active
              </span>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          background: '#f8fafc',
          borderRadius: '8px',
          padding: '4px'
        }}>
          {['overview', 'patterns', 'pipeline', 'integration'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                background: activeTab === tab ? 'white' : 'transparent',
                color: activeTab === tab ? '#8b5cf6' : '#64748b',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                boxShadow: activeTab === tab ? '0 2px 4px rgba(139, 92, 246, 0.1)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Left Column */}
        <div style={{ flex: 2 }}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Zap size={18} color="#8b5cf6" />
                  How LLM Creates Semantic Scores
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                      <Database size={14} style={{ marginRight: '6px' }} />
                      Training Data
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>
                      {llmConfig.trainingData}
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                      <Clock size={14} style={{ marginRight: '6px' }} />
                      Processing Speed
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>
                      {llmConfig.latency}
                    </div>
                  </div>
                </div>

                <div style={{
                  fontSize: '14px',
                  color: '#475569',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  The LLM encoder analyzes text data from transactions (merchant descriptions, payment notes) 
                  to detect semantic patterns associated with fraudulent behavior. It converts text into 
                  vector embeddings and compares them against known fraud patterns in our database.
                </div>

                {/* Formula */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '16px',
                  border: '1px solid #eef2f7',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '12px'
                  }}>
                    Semantic Score Formula
                  </div>
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '6px',
                    padding: '12px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    color: '#4a6491',
                    textAlign: 'center'
                  }}>
                    semantic_score = max(0, 100 × Σ(similarityᵢ × confidenceᵢ))
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#64748b',
                    marginTop: '8px',
                    textAlign: 'center'
                  }}>
                    Where similarityᵢ is pattern match (0-1) and confidenceᵢ is model confidence (0-1)
                  </div>
                </div>

                {/* Real-time Example */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '16px',
                  border: '1px solid #eef2f7'
                }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <MessageSquare size={16} color="#8b5cf6" />
                    Live Analysis Example
                  </div>
                  
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '6px',
                    padding: '12px',
                    marginBottom: '12px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                      Transaction: {realTimeExample.transactionId}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>
                      "{realTimeExample.merchantDescription}"
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      Semantic Score:
                    </div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '800',
                      color: realTimeExample.semanticScore > 70 ? '#ef4444' : 
                            realTimeExample.semanticScore > 50 ? '#f59e0b' : '#10b981'
                    }}>
                      {realTimeExample.semanticScore}
                    </div>
                  </div>

                  <div style={{
                    width: '100%',
                    height: '6px',
                    background: '#e2e8f0',
                    borderRadius: '3px',
                    marginBottom: '12px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${realTimeExample.semanticScore}%`,
                      height: '100%',
                      background: realTimeExample.semanticScore > 70 ? '#ef4444' : 
                                realTimeExample.semanticScore > 50 ? '#f59e0b' : '#10b981',
                      borderRadius: '3px'
                    }} />
                  </div>

                  <div style={{
                    fontSize: '12px',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span>Pattern Confidence: {(realTimeExample.confidence * 100).toFixed(1)}%</span>
                    <span>High Risk Match</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Patterns Tab */}
          {activeTab === 'patterns' && (
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Search size={18} color="#8b5cf6" />
                Semantic Fraud Patterns
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '20px'
              }}>
                {semanticPatterns.map((pattern) => (
                  <div
                    key={pattern.id}
                    onClick={() => handlePatternSelect(pattern)}
                    style={{
                      background: selectedPattern?.id === pattern.id ? '#f8fafc' : 'white',
                      borderRadius: '8px',
                      padding: '16px',
                      border: `1px solid ${
                        selectedPattern?.id === pattern.id ? '#8b5cf6' : '#eef2f7'
                      }`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          color: '#1e293b',
                          marginBottom: '4px'
                        }}>
                          {pattern.name}
                        </div>
                        <div style={{
                          fontSize: '11px',
                          color: '#64748b'
                        }}>
                          {(pattern.confidence * 100).toFixed(0)}% confidence
                        </div>
                      </div>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '800',
                        color: pattern.riskLevel === 'high' ? '#ef4444' : '#f59e0b'
                      }}>
                        {pattern.similarityScore.toFixed(2)}
                      </div>
                    </div>

                    <div style={{
                      fontSize: '12px',
                      color: '#475569',
                      marginBottom: '12px',
                      lineHeight: '1.5'
                    }}>
                      {pattern.description}
                    </div>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '4px',
                      marginBottom: '12px'
                    }}>
                      {pattern.keywords.slice(0, 3).map((keyword, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            color: '#8b5cf6',
                            fontSize: '10px',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontWeight: '500'
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: pattern.riskLevel === 'high' ? '#ef4444' : '#f59e0b',
                        fontWeight: '600'
                      }}>
                        {pattern.riskLevel.toUpperCase()} RISK
                      </div>
                      <ChevronRight size={14} color="#94a3b8" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Pattern Detail */}
              {selectedPattern && (
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid #eef2f7'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1e293b',
                      margin: 0
                    }}>
                      {selectedPattern.name} Pattern
                    </h4>
                    <div style={{
                      fontSize: '12px',
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '10px',
                      fontWeight: '600'
                    }}>
                      Active in production
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                        Similarity Score
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: '800', color: '#8b5cf6' }}>
                        {selectedPattern.similarityScore.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                        Model Confidence
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>
                        {(selectedPattern.confidence * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '8px'
                    }}>
                      Example Matches:
                    </div>
                    <div style={{
                      background: 'white',
                      borderRadius: '8px',
                      padding: '12px',
                      border: '1px solid #eef2f7'
                    }}>
                      {selectedPattern.examples.map((example, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '8px',
                            borderBottom: idx < selectedPattern.examples.length - 1 ? '1px solid #f1f5f9' : 'none',
                            fontSize: '13px',
                            color: '#475569',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px'
                          }}
                        >
                          <AlertTriangle size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                          "{example}"
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '12px',
                    color: '#64748b',
                    fontStyle: 'italic'
                  }}>
                    This pattern is updated every 24 hours with new transaction data
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pipeline Tab */}
          {activeTab === 'pipeline' && (
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <GitBranch size={18} color="#8b5cf6" />
                LLM Processing Pipeline
              </h3>

              <div style={{
                position: 'relative',
                marginBottom: '24px'
              }}>
                {/* Connection Lines */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd)',
                  zIndex: 1,
                  opacity: 0.3
                }} />

                {/* Stages */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {processingStages.map((stage, index) => (
                    <div
                      key={stage.stage}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '18%'
                      }}
                    >
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'white',
                        border: '2px solid #8b5cf6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.15)'
                      }}>
                        <div style={{ color: '#8b5cf6' }}>
                          {stage.icon}
                        </div>
                      </div>
                      
                      <div style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '4px',
                        textAlign: 'center'
                      }}>
                        {stage.name}
                      </div>
                      
                      <div style={{
                        fontSize: '10px',
                        color: '#64748b',
                        textAlign: 'center',
                        marginBottom: '8px'
                      }}>
                        {stage.latency}
                      </div>
                      
                      <div style={{
                        fontSize: '11px',
                        color: '#8b5cf6',
                        background: 'rgba(139, 92, 246, 0.1)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        textAlign: 'center'
                      }}>
                        {stage.output}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Details */}
              <div style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #eef2f7'
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '16px'
                }}>
                  Total Processing Time: 120ms
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {processingStages.map((stage) => (
                    <div
                      key={stage.stage}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px',
                        background: 'white',
                        borderRadius: '8px',
                        border: '1px solid #eef2f7'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(139, 92, 246, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#8b5cf6'
                        }}>
                          {stage.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>
                            Stage {stage.stage}: {stage.name}
                          </div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>
                            {stage.description}
                          </div>
                        </div>
                      </div>
                      
                      <div style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#8b5cf6',
                        background: 'rgba(139, 92, 246, 0.1)',
                        padding: '4px 10px',
                        borderRadius: '4px'
                      }}>
                        {stage.latency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Integration Tab */}
          {activeTab === 'integration' && (
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Link size={18} color="#8b5cf6" />
                Ensemble Integration
              </h3>

              <div style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}>
                <div style={{
                  fontSize: '14px',
                  color: '#475569',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  The LLM encoder contributes 10% weight to the final fraud score, focusing exclusively on 
                  semantic analysis of text data. It complements rule-based and statistical models by 
                  catching sophisticated fraud patterns that evade traditional detection methods.
                </div>

                {/* Weight Visualization */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>
                      Model Weight Distribution
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      Total: 100%
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    height: '24px',
                    background: '#eef2f7',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '12px'
                  }}>
                    {ensembleWeights.map((model, index) => (
                      <div
                        key={model.model}
                        style={{
                          width: `${model.weight * 100}%`,
                          background: model.color,
                          borderRight: index < ensembleWeights.length - 1 ? '2px solid white' : 'none'
                        }}
                        title={`${model.model}: ${(model.weight * 100).toFixed(1)}%`}
                      />
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#64748b'
                  }}>
                    {ensembleWeights.map((model) => (
                      <div key={model.model} style={{ textAlign: 'center' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          justifyContent: 'center',
                          marginBottom: '4px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: model.color
                          }} />
                          <span>{model.model}</span>
                        </div>
                        <div style={{ fontWeight: '700', color: model.color }}>
                          {(model.weight * 100).toFixed(1)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Formula */}
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '16px',
                  border: '1px solid #eef2f7'
                }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '12px'
                  }}>
                    Ensemble Formula
                  </div>
                  
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    color: '#4a6491',
                    background: '#f8fafc',
                    padding: '12px',
                    borderRadius: '6px',
                    textAlign: 'center',
                    marginBottom: '12px'
                  }}>
                    final = (0.45×rule) + (0.30×model) + (0.15×anomaly) + (0.10×semantic)
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    <div style={{
                      padding: '12px',
                      background: 'rgba(16, 185, 129, 0.05)',
                      borderRadius: '6px',
                      border: '1px solid rgba(16, 185, 129, 0.1)'
                    }}>
                      <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>
                        LLM Contribution
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#8b5cf6' }}>
                        0.10 × semantic_score
                      </div>
                    </div>
                    
                    <div style={{
                      padding: '12px',
                      background: 'rgba(139, 92, 246, 0.05)',
                      borderRadius: '6px',
                      border: '1px solid rgba(139, 92, 246, 0.1)'
                    }}>
                      <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>
                        Example Calculation
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#8b5cf6' }}>
                        0.10 × 75 = 7.5
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '12px'
                }}>
                  LLM Advantages
                </h4>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px'
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#10b981',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle size={14} />
                      Catches Sophisticated Fraud
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      Detects semantic patterns that traditional models miss
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#10b981',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle size={14} />
                      Adaptive Learning
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      Updates patterns daily with new transaction data
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#10b981',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle size={14} />
                      Low False Positives
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      Maintains 96.6% detection efficiency
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #eef2f7'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#10b981',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle size={14} />
                      Real-time Processing
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      120ms average latency for full analysis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Stats */}
        <div style={{ flex: 1 }}>
          <div style={{
            background: '#f8fafc',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid #eef2f7'
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <BarChart size={16} color="#8b5cf6" />
              Performance Metrics
            </h3>

            {/* Key Metrics */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #eef2f7'
              }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  Accuracy Rate
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#10b981' }}>
                  {llmConfig.accuracy}
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #eef2f7'
              }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  Daily Transactions
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>
                  {llmConfig.tokensProcessed}
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: '1px solid #eef2f7'
              }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  Pattern Library
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>
                  15,000+
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0'
              }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  Last Updated
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>
                  {llmConfig.lastUpdated}
                </div>
              </div>
            </div>

            {/* Risk Distribution */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '12px'
              }}>
                Risk Score Distribution
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'Low (0-30)', percentage: 45, color: '#10b981' },
                  { label: 'Medium (31-70)', percentage: 35, color: '#f59e0b' },
                  { label: 'High (71-100)', percentage: 20, color: '#ef4444' }
                ].map((item, index) => (
                  <div key={index}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '4px'
                    }}>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        {item.label}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        fontWeight: '700', 
                        color: item.color 
                      }}>
                        {item.percentage}%
                      </div>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#e2e8f0',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${item.percentage}%`,
                        height: '100%',
                        background: item.color,
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '12px'
              }}>
                System Status
              </div>
              
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '12px',
                border: '1px solid #eef2f7'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    animation: 'pulse 2s infinite'
                  }} />
                  <div style={{ fontSize: '12px', color: '#1e293b', fontWeight: '600' }}>
                    Active & Processing
                  </div>
                </div>
                
                <div style={{
                  fontSize: '11px',
                  color: '#64748b',
                  lineHeight: '1.5'
                }}>
                  The LLM encoder is actively analyzing transaction text data in real-time, 
                  contributing to the ensemble fraud detection system with semantic pattern matching.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLM;