import React from 'react';
import { Calendar, TrendingUp, AlertTriangle, Users, DollarSign, Shield, Globe, Clock, Zap, Cpu } from 'lucide-react';
import TransactionDetails from '../components/TransactionDetails';
import FraudByLocation from '../components/FraudByLocation';
  const getStatusColor = (status) => {
    return status === 'Active' ? '#10b981' : '#f59e0b';
  };

    const getDriftColor = (status) => {
    switch (status) {
      case 'green': return '#10b981';
      case 'yellow': return '#f59e0b';
      case 'red': return '#ef4444';
      default: return '#64748b';
    }
  };
const Overview = () => {
  const stats = [
    { label: 'Total Transactions', value: '12,847', change: '+12.5%', icon: <DollarSign size={20} />, color: '#004d40' },
    { label: 'Fraud Detected', value: '342', change: '-3.2%', icon: <AlertTriangle size={20} />, color: '#d32f2f' },
    { label: 'Active Rules', value: '140', change: '+2.3%', icon: <Shield size={20} />, color: '#1976d2' },
    { label: 'Active Users', value: '2,458', change: '+8.7%', icon: <Users size={20} />, color: '#388e3c' },
  ];

  const recentActivities = [
    { action: 'AI flagged transaction #TX9087 as HIGH RISK', time: '10 min ago', status: 'high' },
    { action: 'Rule #158 updated by Sarah Chen', time: '33m ago', status: 'medium' },
    { action: 'Analyst override on Transaction #TX7931', time: '1h ago', status: 'low' },
    { action: 'System update completed successfully', time: '2h ago', status: 'low' },
  ];

  const insights = [
    { id: 1, title: "Peak Fraud Hours Detected", desc: "Fraud spikes 2AM-4AM (35×)", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)", border: "rgba(239, 68, 68, 0.3)" },
    { id: 2, title: "Geographic Anomaly", desc: "Mumbai fraud rate +12%", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)", border: "rgba(245, 158, 11, 0.3)" },
    { id: 3, title: "High-Value Transaction Alert", desc: "₹25,090+ has 12.82% fraud rate", color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)", border: "rgba(34, 197, 94, 0.3)" },
    { id: 4, title: "Velocity Pattern", desc: "Multiple txns within 5 mins flagged", color: "#4a6491", bg: "rgba(74, 100, 145, 0.1)", border: "rgba(74, 100, 145, 0.3)" },
  ];
const keyMetrics = [
    { label: 'Most Effective', value: 'Blacklist Rule', subvalue: '89.4% fraud caught', icon: '🏆', color: '#10b981' },
    { label: 'Lowest Trigger', value: 'Credential Reputation', subvalue: '6.5% trigger rate', icon: '📉', color: '#3b82f6' },
    { label: 'Top Exposure', value: 'Geo-Anomalies', subvalue: '44.2% efficiency', icon: '⚠️', color: '#f59e0b' },
    { label: 'Needs Review', value: 'Statistical Deviation', subvalue: '38.6% efficacy', icon: '🔍', color: '#ef4444' }
  ];
 const modelOverview = {
    version: 'Fraud_XGBoost_v4.2',
    challengerVersion: 'Challenger v5.0',
    status: 'Active',
    lastRetrained: '2 days ago',
    inferenceLatency: '45ms',
    dataDrift: 'green',
  };
  return (

    <>
    <style>{`
   html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
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
      `}</style>



    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Title */}
      <div style={{
        background: 'white',
        width: '100%',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #eef2f7',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        marginBottom: '20px',
        marginTop: '20px'     }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px 0' }}>
              Overview
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
              Welcome to FALCON Fraud Detection System
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', padding: '8px 16px', borderRadius: '25px', border: '1px solid #eef2f7' }}>
              <Calendar size={16} color="#64748b" />
              <span style={{ marginLeft: '8px', fontSize: '14px', color: '#64748b' }}>Jan 08, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid #eef2f7',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'auto', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>
                {stat.icon}
              </div>
            
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '4px',marginLeft:'5px' }}>{stat.value}</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: stat.change.startsWith('+') ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <TrendingUp size={14} />
                {stat.change}
              </div></div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>{stat.label}</div>
          </div>
        ))}
      
    </div>
<TransactionDetails   />



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
      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Left Column */}
        <div>




          {/* Recent Activity */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #eef2f7' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={20} color="#004d40" />
              Recent Activity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentActivities.map((activity, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: activity.status === 'high' ? '#ef4444' : activity.status === 'medium' ? '#f59e0b' : '#10b981', marginTop: '6px' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>{activity.action}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>



<div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '16px 24px',
            border: '1px solid #eef2f7',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginTop: '20px',
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



        </div>

        {/* Right Column */}
        <div>
          {/* System Status */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #eef2f7' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={20} color="#004d40" />
              System Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>AI Model Performance</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>96.2%</span>
                </div>
                <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '96.2%', height: '100%', background: '#10b981', borderRadius: '3px' }} />
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>Rule Engine Accuracy</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>97.1%</span>
                </div>
                <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '97.1%', height: '100%', background: '#10b981', borderRadius: '3px' }} />
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>System Uptime</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>99.9%</span>
                </div>
                <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '99.9%', height: '100%', background: '#10b981', borderRadius: '3px' }} />
                </div>
              </div>
            </div>
          
        
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
              gap: '8px',
              marginTop: '30px'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                background: 'linear-gradient(135deg, #2c3e50 0%, #4a6491 100%)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
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
        
        </div>
      </div>
    </div>

    </>
  );
};

export default Overview;