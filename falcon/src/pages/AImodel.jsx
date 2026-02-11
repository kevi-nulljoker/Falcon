import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Clock,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  XCircle,
  Zap,
  Shield,
  Brain,
  Activity,
  Target,
  Cpu,
  Filter,
  Users,
  Calendar,
  Download,
  Settings,
  HelpCircle,
  LogOut,
  MessageSquare,
  Smartphone,
  Mail,
  Globe,
  Watch,
  Search,
  Bell
} from 'lucide-react';
import LLM from '../components/LLM';

const AIModel = () => {
  const [selectedModel, setSelectedModel] = useState('Ensemble');
  const [transactionId, setTransactionId] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  // Model Performance Data
  const modelMetrics = [
    { model: 'GBDT', precision: 94.2, recall: 89.5, auc: 0.982, color: '#10b981' },
    { model: 'Rule Engine', precision: 97.1, recall: 62.3, auc: 0.873, color: '#3b82f6' },
    { model: 'LLM Encoder', precision: 91.8, recall: 84.2, auc: 0.912, color: '#8b5cf6' },
    { model: 'Ensemble', precision: 96.2, recall: 92.1, auc: 0.991, color: '#ef4444' },
  ];

  // Model Overview
  const modelOverview = {
    version: 'Fraud_XGBoost_v4.2',
    challengerVersion: 'Challenger v5.0',
    status: 'Active',
    lastRetrained: '2 days ago',
    inferenceLatency: '45ms',
    dataDrift: 'green',
  };

  // Top Risk Factors
  const riskFactors = [
    { factor: 'Impossible Travel', percentage: 92, trend: '↑ New Trend', icon: <Globe size={16} /> },
    { factor: 'Device Velocity', percentage: 75, trend: '→ Stable', icon: <Activity size={16} /> },
    { factor: 'New Device ID', percentage: 42, trend: '↓ Dropping', icon: <Smartphone size={16} /> },
    { factor: 'Disposable Email', percentage: 18, trend: '', icon: <Mail size={16} /> },
    { factor: '3AM - 5AM Activity', percentage: 65, trend: '', icon: <Watch size={16} /> },
  ];

  // False Positive Metrics
  const falsePositiveMetrics = [
    { model: 'GBDT', falsePositiveRate: 2.1, detectionEfficiency: 97.9 },
    { model: 'Rule Engine', falsePositiveRate: 1.8, detectionEfficiency: 98.2 },
    { model: 'LLM Encoder', falsePositiveRate: 3.4, detectionEfficiency: 96.6 },
    { model: 'Ensemble', falsePositiveRate: 1.2, detectionEfficiency: 98.8 },
  ];

  // Explainability Data
  const shapValues = [
    { feature: 'New Device', value: '+30', color: '#ef4444' },
    { feature: 'High Amount', value: '+25', color: '#f59e0b' },
    { feature: 'Unusual Location', value: '+20', color: '#8b5cf6' },
    { feature: 'Past Fraud History', value: '+10', color: '#3b82f6' },
    { feature: 'Time of Day', value: '-10', color: '#10b981' },
  ];

  // Team Collaboration
  const teamMembers = [
    { name: 'Alexandra Deff', task: 'Working on Offtwin Project Repository' },
    { name: 'Edwin Adenike', task: 'Working on Integrate User Authorization System' },
    { name: 'Isaac Quwaternikrun', task: 'Working on Develop Search and Filter Functionality' },
    { name: 'David Ostrodi', task: 'Working on Responsive Layout for Homepage' },
  ];

  // Pipeline Engine Stages (for hover state management)
  const pipelineStages = [
    { name: 'Overall', color: '#4a6491', hovered: false },
    { name: 'Rule Engine', color: '#10b981', hovered: false },
    { name: 'AI Stage 1', color: '#3b82f6', hovered: false },
    { name: 'LLM Encoder', color: '#8b5cf6', hovered: false }
  ];

  const [pipelineHoverStates, setPipelineHoverStates] = useState(pipelineStages.map(stage => false));

  // Helper Functions
  const getDriftColor = (status) => {
    switch (status) {
      case 'green': return '#10b981';
      case 'yellow': return '#f59e0b';
      case 'red': return '#ef4444';
      default: return '#64748b';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? '#10b981' : '#f59e0b';
  };

  const getTrendColor = (trend) => {
    if (trend.includes('↑')) return '#10b981';
    if (trend.includes('↓')) return '#ef4444';
    if (trend.includes('→')) return '#f59e0b';
    return '#64748b';
  };

  const handleExplainTransaction = () => {
    if (transactionId.trim()) {
      setShowExplanation(true);
    }
  };

  const handlePipelineHover = (index, isHovering) => {
    const newHoverStates = [...pipelineHoverStates];
    newHoverStates[index] = isHovering;
    setPipelineHoverStates(newHoverStates);
  };


    const PipelineIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L12 14L16 10" stroke="#4a6491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke="#4a6491" strokeWidth="2"/>
    </svg>
  );

  const CompactAIPipeline = () => {
    const pipelineData = [
      { stage: 'Rule Engine', count: '880', blockRate: '2%', color: '#10b981' },
      { stage: 'AI Stage 1', count: '881', blockRate: '7%', color: '#3b82f6' },
      { stage: 'LLM Encoder', count: '184', blockRate: '5%', color: '#8b5cf6' },
      { stage: 'Final Review', count: '23,450', blockRate: '6%', color: '#f59e0b' }
    ];

    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #eef2f7',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <PipelineIcon />
            </div>
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#1e293b',
                margin: 0
              }}>
                AI Pipeline Flow
              </h3>
              <div style={{
                fontSize: '11px',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Clock size={9} />
                <span>Last 24h</span>
              </div>
            </div>
          </div>
          
          <div style={{
            fontSize: '10px',
            fontWeight: '600',
            color: '#10b981',
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '3px 8px',
            borderRadius: '10px',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            Active
          </div>
        </div>

        {/* Flow Visualization */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '8px',
          padding: '12px',
          border: '1px solid #eef2f7',
          marginBottom: '12px'
        }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '8px'
          }}>
            Transaction Flow
          </div>
          
          {/* Progress Bar */}
          <div style={{
            display: 'flex',
            height: '6px',
            background: '#eef2f7',
            borderRadius: '3px',
            overflow: 'hidden',
            marginBottom: '8px'
          }}>
            <div style={{ flex: 1, background: '#10b981' }} />
            <div style={{ flex: 1, background: '#3b82f6' }} />
            <div style={{ flex: 1, background: '#8b5cf6' }} />
            <div style={{ flex: 1, background: '#f59e0b' }} />
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '10px',
            color: '#64748b'
          }}>
            <span>Rule</span>
            <span>AI Stage 1</span>
            <span>LLM</span>
            <span>Final</span>
          </div>
        </div>

        {/* Pipeline Stages */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {pipelineData.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                background: '#f8fafc',
                borderRadius: '8px',
                border: '1px solid #eef2f7',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '6px',
                  background: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '10px',
                  flexShrink: 0
                }}>
                  {index + 1}
                </div>
                
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b' }}>
                    {item.stage}
                  </div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>
                    Processed: {item.count}
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: item.blockRate === '2%' ? '#ef4444' : 
                         item.blockRate === '7%' ? '#f59e0b' : '#10b981'
                }}>
                  {item.blockRate}
                </div>
                <div style={{ fontSize: '10px', color: '#64748b' }}>
                  Block Rate
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{
          marginTop: '12px',
          paddingTop: '10px',
          borderTop: '1px solid #f1f5f9',
          fontSize: '11px',
          color: '#64748b',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Total</div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b' }}>23,450</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Avg Latency</div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#10b981' }}>45ms</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Success Rate</div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#10b981' }}>99.2%</div>
          </div>
        </div>
      </div>
    );
  };



  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Inter', sans-serif"
      
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
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
  width: 100
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

      `}</style>

    

      {/* Dashboard Header */}
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
              AI Model Dashboard
            </h1>
            <p style={{
              fontSize: '15px',
              color: '#64748b',
              margin: 0
            }}>
              Plan, prioritize, and accomplish your tasks with ease.
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
                Jan 11, 2026
              </span>
            </div>
            
            <div style={{
              position: 'relative',
              cursor: 'pointer'
            }}>
              <MessageSquare size={22} color="#333" />
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ff4757',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div style={{
        display: 'flex',
        gap: '24px'
      }}>
        {/* Left Column */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Model Overview & Health - Single Bar */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '16px 24px',
            border: '1px solid #eef2f7',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '180px'
            }}>
              <Cpu size={20} color="#4a6491" />
              <div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>
                  Model Health
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  Real-time monitoring
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ 
              width: '1px', 
              height: '40px', 
              background: '#eef2f7' 
            }} />

            {/* Model Version */}
            <div style={{ minWidth: '160px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                Model Version
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                {modelOverview.version}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                vs {modelOverview.challengerVersion}
              </div>
            </div>

            {/* Status */}
            <div style={{ minWidth: '120px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                Status
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: getStatusColor(modelOverview.status),
                  animation: modelOverview.status === 'Active' ? 'pulse 2s infinite' : 'none'
                }} />
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: getStatusColor(modelOverview.status)
                }}>
                  {modelOverview.status}
                </div>
              </div>
            </div>

            {/* Last Retrained */}
            <div style={{ minWidth: '120px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                Last Retrained
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                {modelOverview.lastRetrained}
              </div>
            </div>

            {/* Inference Latency */}
            <div style={{ minWidth: '120px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                Inference Latency
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                {modelOverview.inferenceLatency}
              </div>
            </div>

            {/* Data Drift Status */}
            <div style={{ minWidth: '140px' }}>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                Data Drift Status
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: getDriftColor(modelOverview.dataDrift),
                  boxShadow: `0 0 0 3px ${getDriftColor(modelOverview.dataDrift)}20`
                }} />
                <span style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#1e293b',
                  textTransform: 'capitalize'
                }}>
                  {modelOverview.dataDrift}
                </span>
              </div>
            </div>
          </div>

          {/* Model Performance Metrics */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid #eef2f7',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Target size={20} color="#4a6491" />
              MODEL PERFORMANCE METRICS
            </h3>

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
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                background: '#2c3e50',
                color: 'white',
                padding: '16px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                <div>Model</div>
                <div>Precision</div>
                <div>Recall</div>
                <div>AUC</div>
              </div>

              {/* Table Rows */}
              {modelMetrics.map((model, index) => (
                <div
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    padding: '16px',
                    borderBottom: '1px solid #eef2f7',
                    background: selectedModel === model.model ? `${model.color}10` : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setSelectedModel(model.model)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${model.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = selectedModel === model.model ? `${model.color}10` : 'white';
                  }}
                >
                  <div style={{
                    fontWeight: '600',
                    color: model.color,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: model.color
                    }} />
                    {model.model}
                  </div>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>{model.precision}%</div>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>{model.recall}%</div>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>{model.auc}</div>
                </div>
              ))}
            </div>

            {/* False Positive Detection Efficiency */}
            <div style={{ marginTop: '24px' }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Filter size={20} color="#4a6491" />
                False Positive Detection Efficiency
              </h4>
              
              <div style={{
                background: '#f8fafc',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #eef2f7'
              }}>
                {falsePositiveMetrics.map((metric, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: index < falsePositiveMetrics.length - 1 ? '1px solid #eef2f7' : 'none'
                    }}
                  >
                    <div style={{ fontSize: '14px', color: '#1e293b', fontWeight: '600' }}>
                      {metric.model}
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>False Positive</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: '#ef4444' }}>
                          {metric.falsePositiveRate}%
                        </div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Detection Efficiency</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>
                          {metric.detectionEfficiency}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
<LLM/>



          
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Top Risk Factors - Balanced Compact */}
<div style={{
  background: 'white',
  borderRadius: '12px',
  padding: '14px',
  border: '1px solid #eef2f7',
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
}}>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width: '28px',
        height: '28px',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <AlertTriangle size={14} color="white" />
      </div>
      <div>
        <h3 style={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#1e293b',
          margin: 0
        }}>
          Top Risk Factors
        </h3>
        <div style={{
          fontSize: '11px',
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Clock size={9} />
          <span>Last 24h</span>
        </div>
      </div>
    </div>
    
    <div style={{
      fontSize: '10px',
      fontWeight: '600',
      color: '#10b981',
      background: 'rgba(16, 185, 129, 0.1)',
      padding: '3px 8px',
      borderRadius: '10px',
      border: '1px solid rgba(16, 185, 129, 0.2)'
    }}>
      Live
    </div>
  </div>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
    {riskFactors.map((factor, index) => (
      <div
        key={index}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          background: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #eef2f7',
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f1f5f9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#f8fafc';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: index < 3 ? 
              ['#ffd700', '#c0c0c0', '#cd7f32'][index] : 
              '#f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: index < 3 ? 'white' : '#64748b',
            fontWeight: '700',
            fontSize: '11px',
            flexShrink: 0
          }}>
            {index + 1}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            <div style={{
              color: '#4a6491',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0
            }}>
              {factor.icon}
            </div>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#1e293b',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {factor.factor}
            </span>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          flexShrink: 0 
        }}>
          <div style={{ 
            textAlign: 'right',
            minWidth: '35px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: factor.percentage > 70 ? '#ef4444' : 
                    factor.percentage > 40 ? '#f59e0b' : '#10b981'
            }}>
              {factor.percentage}%
            </div>
          </div>
          
          {/* Mini Progress Bar */}
          <div style={{
            width: '60px',
            height: '4px',
            background: '#e2e8f0',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${factor.percentage}%`,
              height: '100%',
              background: factor.percentage > 70 ? '#ef4444' : 
                        factor.percentage > 40 ? '#f59e0b' : '#10b981',
              borderRadius: '2px'
            }} />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Summary Footer */}
  <div style={{
    marginTop: '12px',
    paddingTop: '10px',
    borderTop: '1px solid #f1f5f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '10px',
    color: '#64748b'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
        <span>Low</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} />
        <span>Medium</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
        <span>High</span>
      </div>
    </div>
    
    <div style={{ fontSize: '10px', color: '#94a3b8' }}>
      {riskFactors.length} factors
    </div>
  </div>
</div>

         {/* Explainability (SHAP Values) - Clean & Correct */}
<div style={{
  background: 'white',
  borderRadius: '12px',
  padding: '16px',
  border: '1px solid #eef2f7',
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
}}>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Brain size={18} color="#4a6491" />
      <h3 style={{
        fontSize: '16px',
        fontWeight: '700',
        color: '#1e293b',
        margin: 0
      }}>
        Explainability (SHAP)
      </h3>
    </div>
    
    <div style={{
      fontSize: '11px',
      fontWeight: '600',
      color: '#4a6491',
      background: 'rgba(74, 100, 145, 0.1)',
      padding: '4px 10px',
      borderRadius: '10px',
      border: '1px solid rgba(74, 100, 145, 0.2)'
    }}>
      Real-time
    </div>
  </div>

  {/* Input Section */}
  <div style={{
    display: 'flex',
    gap: '10px',
    marginBottom: '12px'
  }}>
    <input
      type="text"
      placeholder="Enter TransactionID (e.g., TXN-01767)"
      value={transactionId}
      onChange={(e) => setTransactionId(e.target.value)}
      style={{
        flex: 1,
        padding: '10px 12px',
        borderRadius: '8px',
        border: '1px solid #eef2f7',
        background: '#f8fafc',
        fontSize: '13px',
        outline: 'none',
        color: '#1e293b'
      }}
    />
    <button
      onClick={handleExplainTransaction}
      style={{
        padding: '10px 16px',
        background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '13px',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}
    >
      Explain
    </button>
  </div>

  {/* Small Action Buttons */}
  <div style={{
    display: 'flex',
    gap: '8px',
    marginBottom: '16px'
  }}>
    <button
      onClick={() => {
        setTransactionId('TXN-01767');
        setShowExplanation(true);
      }}
      style={{
        padding: '6px 12px',
        background: 'rgba(74, 100, 145, 0.1)',
        color: '#4a6491',
        border: '1px solid rgba(74, 100, 145, 0.2)',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        flex: 1
      }}
    >
      Try Sample
    </button>
    
    <button
      onClick={() => {
        setTransactionId('');
        setShowExplanation(false);
      }}
      style={{
        padding: '6px 12px',
        background: 'rgba(239, 68, 68, 0.1)',
        color: '#ef4444',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        flex: 1
      }}
    >
      Clear
    </button>
  </div>

  {/* Show explanation or default state */}
  {showExplanation && transactionId ? (
    <div style={{
      background: '#f8fafc',
      borderRadius: '10px',
      padding: '16px',
      border: '1px solid #eef2f7'
    }}>
      {/* Transaction Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '2px'
          }}>
            {transactionId}
          </div>
          <div style={{
            fontSize: '11px',
            color: '#64748b'
          }}>
            Risk Analysis
          </div>
        </div>
        
        <div style={{
          fontSize: '20px',
          fontWeight: '800',
          color: '#ef4444'
        }}>
          86.4/100
          <div style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#ef4444',
            background: 'rgba(239, 68, 68, 0.1)',
            padding: '2px 6px',
            borderRadius: '4px',
            marginTop: '4px',
            textAlign: 'center'
          }}>
            High Risk
          </div>
        </div>
      </div>

      {/* Formula */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid #eef2f7',
        marginBottom: '16px'
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '10px'
        }}>
          Risk Score Calculation
        </div>
        
        <div style={{
          fontSize: '11px',
          color: '#4a6491',
          marginBottom: '12px',
          fontFamily: 'monospace',
          textAlign: 'center',
          background: 'rgba(74, 100, 145, 0.05)',
          padding: '8px',
          borderRadius: '6px'
        }}>
          final = (0.45×rule) + (0.3×model) + (0.15×anomaly) + (0.1×semantic)
        </div>
        
        {/* Score Breakdown - Corrected Math */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <div style={{
            padding: '8px',
            background: 'rgba(16, 185, 129, 0.05)',
            borderRadius: '6px',
            border: '1px solid rgba(16, 185, 129, 0.1)'
          }}>
            <div style={{ fontSize: '10px', color: '#64748b' }}>Rule Score</div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#10b981' }}>88 × 0.45 = 39.6</div>
          </div>
          
          <div style={{
            padding: '8px',
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '6px',
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}>
            <div style={{ fontSize: '10px', color: '#64748b' }}>Model Score</div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6' }}>85 × 0.30 = 25.5</div>
          </div>
          
          <div style={{
            padding: '8px',
            background: 'rgba(245, 158, 11, 0.05)',
            borderRadius: '6px',
            border: '1px solid rgba(245, 158, 11, 0.1)'
          }}>
            <div style={{ fontSize: '10px', color: '#64748b' }}>Anomaly Score</div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#f59e0b' }}>92 × 0.15 = 13.8</div>
          </div>
          
          <div style={{
            padding: '8px',
            background: 'rgba(139, 92, 246, 0.05)',
            borderRadius: '6px',
            border: '1px solid rgba(139, 92, 246, 0.1)'
          }}>
            <div style={{ fontSize: '10px', color: '#64748b' }}>Semantic Score</div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#8b5cf6' }}>75 × 0.10 = 7.5</div>
          </div>
        </div>
        
        {/* Final Calculation - CORRECTED: 39.6 + 25.5 + 13.8 + 7.5 = 86.4 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '10px',
          borderTop: '1px solid #eef2f7',
          fontSize: '13px'
        }}>
          <div style={{ fontWeight: '700', color: '#1e293b' }}>Final:</div>
          <div style={{ fontWeight: '800', color: '#ef4444' }}>
            86.4
          </div>
        </div>
      </div>

      {/* SHAP Values */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid #eef2f7'
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '12px'
        }}>
          AI Model Feature Impact
        </div>
        
        {shapValues.map((shap, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: index < shapValues.length - 1 ? '1px solid #f1f5f9' : 'none'
          }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b' }}>
              {shap.feature}
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: '700',
              color: shap.color
            }}>
              {shap.value}
            </div>
          </div>
        ))}
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '12px',
          paddingTop: '10px',
          borderTop: '1px solid #f1f5f9',
          fontSize: '11px',
          color: '#64748b'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
              <span>Increases Risk</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              <span>Decreases Risk</span>
            </div>
          </div>
          
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#4a6491' }}>
            Base: 20 + ΣSHAP = 85
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div style={{
      background: '#f8fafc',
      borderRadius: '10px',
      padding: '20px',
      border: '1px solid #eef2f7',
      textAlign: 'center'
    }}>
      <Brain size={32} color="#94a3b8" style={{ marginBottom: '12px', opacity: 0.7 }} />
      <div style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '6px'
      }}>
        Transaction Analysis
      </div>
      <div style={{
        fontSize: '12px',
        color: '#64748b',
        marginBottom: '16px'
      }}>
        Enter a Transaction ID to analyze risk scoring
      </div>
      <div style={{
        fontSize: '11px',
        color: '#94a3b8',
        background: 'rgba(148, 163, 184, 0.1)',
        padding: '8px',
        borderRadius: '6px',
        fontFamily: 'monospace'
      }}>
        final = (0.45×rule) + (0.3×model) + (0.15×anomaly) + (0.1×semantic)
      </div>
    </div>
  )}
</div>



<CompactAIPipeline/>
          </div>
          </div>
    </div>
  );
};

export default AIModel;