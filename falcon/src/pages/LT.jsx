import { Bell, Search, Activity, Brain, Users, AlertTriangle, TrendingUp, Download, RefreshCw, ArrowUpRight, ArrowDownRight, Clock, Eye, Filter, MoreVertical, Shield, CheckCircle, XCircle, AlertCircle, Plus, Zap } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const LT = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      transactionId: 'TX784392',
      user: 'Rajesh Kumar',
      amount: 12450,
      currency: 'USD',
      type: 'incoming',
      status: 'completed',
      risk: 'low',
      time: 'Just now',
      merchant: 'Amazon Inc.',
      location: 'New York, US',
      flagged: false,
      new: false
    },
    {
      id: 2,
      transactionId: 'TX908721',
      user: 'Sarah Chen',
      amount: 8500,
      currency: 'USD',
      type: 'outgoing',
      status: 'pending',
      risk: 'high',
      time: '10 sec ago',
      merchant: 'Global Payments',
      location: 'Singapore, SG',
      flagged: true,
      new: false
    },
    {
      id: 3,
      transactionId: 'TX459102',
      user: 'Michael Totok',
      amount: 25000,
      currency: 'USD',
      type: 'incoming',
      status: 'completed',
      risk: 'medium',
      time: '25 sec ago',
      merchant: 'Microsoft Corp',
      location: 'Seattle, US',
      flagged: false,
      new: false
    },
    {
      id: 4,
      transactionId: 'TX673845',
      user: 'Alex Johnson',
      amount: 1200,
      currency: 'USD',
      type: 'outgoing',
      status: 'failed',
      risk: 'high',
      time: '45 sec ago',
      merchant: 'Netflix',
      location: 'London, UK',
      flagged: true,
      new: false
    },
    {
      id: 5,
      transactionId: 'TX912034',
      user: 'Maria Garcia',
      amount: 5600,
      currency: 'USD',
      type: 'incoming',
      status: 'completed',
      risk: 'low',
      time: '1 min ago',
      merchant: 'Apple Store',
      location: 'San Francisco, US',
      flagged: false,
      new: false
    },
    {
      id: 6,
      transactionId: 'TX345671',
      user: 'David Lee',
      amount: 78000,
      currency: 'USD',
      type: 'outgoing',
      status: 'pending',
      risk: 'medium',
      time: '2 min ago',
      merchant: 'Real Estate Corp',
      location: 'Hong Kong, HK',
      flagged: false,
      new: false
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [newTransactionAnim, setNewTransactionAnim] = useState(false);
  const [liveStats, setLiveStats] = useState({
    total: 234,
    flagged: 12,
    completed: 189,
    pending: 33,
    highRisk: 18
  });

  // Generate a new random transaction
  const generateRandomTransaction = () => {
    const users = ['James Wilson', 'Emma Thompson', 'Carlos Silva', 'Lisa Wang', 'Robert Kim', 'Priya Patel'];
    const merchants = ['Amazon', 'Apple', 'Google', 'Microsoft', 'Shopify', 'Uber', 'Airbnb', 'Spotify'];
    const locations = ['New York, US', 'London, UK', 'Tokyo, JP', 'Sydney, AU', 'Berlin, DE', 'Toronto, CA'];
    
    const user = users[Math.floor(Math.random() * users.length)];
    const amount = Math.floor(Math.random() * 50000) + 1000;
    const type = Math.random() > 0.5 ? 'incoming' : 'outgoing';
    const status = ['completed', 'pending', 'failed'][Math.floor(Math.random() * 3)];
    const risk = ['low', 'medium', 'high'][Math.floor(Math.random() * 3)];
    
    return {
      id: Date.now(),
      transactionId: `TX${Math.floor(100000 + Math.random() * 900000)}`,
      user,
      amount,
      currency: 'USD',
      type,
      status,
      risk,
      time: 'Just now',
      merchant: merchants[Math.floor(Math.random() * merchants.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      flagged: risk === 'high' && Math.random() > 0.5,
      new: true // Mark as new for animation
    };
  };

  // Simulate live updates
  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      // Add a new transaction every 8-15 seconds
      if (Math.random() > 0.7) {
        setNewTransactionAnim(true);
        setTimeout(() => {
          setTransactions(prev => [generateRandomTransaction(), ...prev.slice(0, 9)]);
          setNewTransactionAnim(false);
        }, 300);
      }
      
      // Update random transaction times
      setTransactions(prev => {
        const newTransactions = [...prev];
        const randomIndex = Math.floor(Math.random() * newTransactions.length);
        if (newTransactions[randomIndex]) {
          const times = ['Just now', '10 sec ago', '25 sec ago', '45 sec ago', '1 min ago'];
          const randomTime = times[Math.floor(Math.random() * times.length)];
          newTransactions[randomIndex] = {
            ...newTransactions[randomIndex],
            time: randomTime,
            new: false
          };
        }
        return newTransactions;
      });
      
      // Update live stats slightly
      setLiveStats(prev => ({
        ...prev,
        total: prev.total + (Math.random() > 0.5 ? 1 : 0),
        completed: prev.completed + (Math.random() > 0.7 ? 1 : 0),
        pending: prev.pending + (Math.random() > 0.8 ? 1 : 0)
      }));
      
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.status === filter || t.risk === filter);

  const stats = {
    total: transactions.length,
    flagged: transactions.filter(t => t.flagged).length,
    totalAmount: transactions.reduce((sum, t) => sum + t.amount, 0),
    avgAmount: Math.round(transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length)
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={16} className="text-green-500" />;
      case 'pending': return <Clock size={16} className="text-yellow-500" />;
      case 'failed': return <XCircle size={16} className="text-red-500" />;
      default: return <AlertCircle size={16} />;
    }
  };

  const getRiskBadge = (risk) => {
    const styles = {
      low: { bg: '#e8f5e9', text: '#2e7d32', label: 'Low' },
      medium: { bg: '#fff3e0', text: '#f57c00', label: 'Medium' },
      high: { bg: '#ffebee', text: '#d32f2f', label: 'High' }
    };
    const style = styles[risk] || styles.low;
    
    return (
      <span style={{ 
        background: style.bg, 
        color: style.text,
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        {risk === 'high' && <AlertTriangle size={12} />}
        {style.label}
      </span>
    );
  };

  const handleAddTransaction = () => {
    setNewTransactionAnim(true);
    setTimeout(() => {
      setTransactions(prev => [generateRandomTransaction(), ...prev]);
      setNewTransactionAnim(false);
    }, 300);
  };

  return (
    <>
      <style>{`    
      html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
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

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }

        /* Live Transactions Panel Styles */
        .live-transactions-panel {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          margin: 20px 0;
          border: 1px solid #f0f0f0;
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .live-badge {
          background: #d32f2f;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: pulse 2s infinite;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .stat-mini {
          background: #f9f9f9;
          border-radius: 10px;
          padding: 16px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-mini::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #004d40;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .stat-mini:hover::before {
          transform: scaleX(1);
        }

        .stat-mini-value {
          font-size: 20px;
          font-weight: 700;
          color: #004d40;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .stat-mini-label {
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-buttons-small {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .filter-btn-small {
          padding: 6px 16px;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-btn-small:hover {
          border-color: #004d40;
          color: #004d40;
        }

        .filter-btn-small.active {
          background: #004d40;
          color: white;
          border-color: #004d40;
        }

        .transactions-table {
          max-height: 400px;
          overflow-x: hidden;
          overflow-y: auto;
          border-radius: 10px;
          border: 1px solid #f0f0f0;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto;
          gap: 16px;
          padding: 16px;
          background: #f9f9f9;
          font-size: 12px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .transaction-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto;
          gap: 16px;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid #f5f5f5;
          transition: all 0.3s ease;
          animation: slideIn 0.3s ease-out;
          position: relative;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 100px;
          }
        }

        .transaction-row.new-transaction {
          background: linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%);
          border-left: 4px solid #004d40;
          animation: highlightFlash 1.5s ease;
        }

        @keyframes highlightFlash {
          0% { background: #e3f2fd; }
          50% { background: #f9f9f9; }
          100% { background: linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%); }
        }

        .transaction-row:hover {
          background: #fafafa;
          transform: translateX(2px);
        }

        .transaction-row.flagged {
          background: #fff5f5;
          border-left: 3px solid #d32f2f;
        }

        .transaction-id {
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 11px;
          color: #666;
          margin-top: 2px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
        }

        .amount-positive {
          color: #388e3c;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .amount-negative {
          color: #d32f2f;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .action-buttons {
          display: flex;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .transaction-row:hover .action-buttons {
          opacity: 1;
        }

        .icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #f5f5f5;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .icon-btn:hover {
          background: #e0e0e0;
          transform: scale(1.05);
        }

        .refresh-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #666;
        }

        .toggle-switch {
          position: relative;
          width: 40px;
          height: 22px;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 34px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background-color: #004d40;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(18px);
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .new-transaction-indicator {
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          background: #004d40;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          animation: newPulse 2s infinite;
        }

        @keyframes newPulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 77, 64, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 77, 64, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 77, 64, 0); }
        }

        .panel-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #666;
        }

        .add-transaction-btn {
          padding: 10px 20px;
          background: rgba(0, 77, 64, 0.7);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .add-transaction-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .add-transaction-btn:active {
          transform: translateY(0);
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



                






      {/* Live Transactions Panel */}
      <div className="live-transactions-panel">
        {/* Panel Header */}
        <div className="panel-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' ,width:'100%'}}>
            <h2 style={{ margin: 0, fontSize: '30px', color: '#333', fontWeight: '700' }}>Live Transactions</h2>
            <span className="live-badge">
              <Zap size={12} />
              LIVE
            </span>
            <div className="refresh-toggle">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
              <span>Auto-refresh</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="search-container" style={{ padding: '10px 15px', width: '200px' }}>
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="search-input"
                style={{ width: '150px' }}
              />
            </div>
            <button className="add-transaction-btn" onClick={handleAddTransaction} disabled={newTransactionAnim}>
              <Plus size={16} />
              {newTransactionAnim ? 'Adding...' : 'Add Transaction'}
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-mini">
            <div className="stat-mini-value">
              <Activity size={16} />
              {liveStats.total}
            </div>
            <div className="stat-mini-label">Total Tx</div>
          </div>
          <div className="stat-mini">
            <div className="stat-mini-value">
              <AlertTriangle size={16} />
              {liveStats.flagged}
            </div>
            <div className="stat-mini-label">Flagged</div>
          </div>
          <div className="stat-mini">
            <div className="stat-mini-value">
              <CheckCircle size={16} />
              {liveStats.completed}
            </div>
            <div className="stat-mini-label">Completed</div>
          </div>
          <div className="stat-mini">
            <div className="stat-mini-value">
              <Clock size={16} />
              {liveStats.pending}
            </div>
            <div className="stat-mini-label">Pending</div>
          </div>
          <div className="stat-mini">
            <div className="stat-mini-value">
              <Shield size={16} />
              {liveStats.highRisk}
            </div>
            <div className="stat-mini-label">High Risk</div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="filter-buttons-small">
          <button 
            className={`filter-btn-small ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Transactions
          </button>
          <button 
            className={`filter-btn-small ${filter === 'high' ? 'active' : ''}`}
            onClick={() => setFilter('high')}
          >
            <AlertTriangle size={14} />
            High Risk
          </button>
          <button 
            className={`filter-btn-small ${filter === 'flagged' ? 'active' : ''}`}
            onClick={() => setFilter('flagged')}
          >
            <Shield size={14} />
            Flagged
          </button>
          <button 
            className={`filter-btn-small ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            <Clock size={14} />
            Pending
          </button>
        </div>

        {/* Transactions Table */}
        <div className="transactions-table">
          {/* Table Header */}
          <div className="table-header">
            <div>User & Transaction</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Risk Level</div>
            <div>Time</div>
            <div>Actions</div>
          </div>

          {/* Transactions List with real-time animations */}
          {transactions.map((transaction, index) => (
            <div 
              key={transaction.id} 
              className={`transaction-row ${transaction.flagged ? 'flagged' : ''} ${transaction.new ? 'new-transaction' : ''}`}
            >
              {/* {transaction.new && <div className="new-transaction-indicator">NEW</div>} */}
              
              {/* User & Transaction */}
              <div>
                <div className="user-info">
                  <div className="user-avatar">
                    {transaction.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#333' }}>
                      {transaction.user}
                    </div>
                    <div className="transaction-id">
                      {transaction.transactionId}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Amount */}
              <div className={transaction.type === 'incoming' ? 'amount-positive' : 'amount-negative'}>
                {transaction.type === 'incoming' ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}
                ${transaction.amount.toLocaleString()}
              </div>
              
              {/* Status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {getStatusIcon(transaction.status)}
                <span style={{ 
                  textTransform: 'capitalize',
                  color: transaction.status === 'completed' ? '#388e3c' : 
                         transaction.status === 'pending' ? '#f57c00' : '#d32f2f'
                }}>
                  {transaction.status}
                </span>
              </div>
              
              {/* Risk Level */}
              <div>
                {getRiskBadge(transaction.risk)}
              </div>
              
              {/* Time */}
              <div style={{ color: '#666', fontSize: '13px', fontWeight: '500' }}>
                {transaction.time}
              </div>
              
              {/* Actions */}
              <div className="action-buttons">
                <button className="icon-btn" title="View Details">
                  <Eye size={14} />
                </button>
                <button className="icon-btn" title="More Options">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Panel Footer */}
        <div className="panel-footer">
          <div>
            Showing {filteredTransactions.length} transactions • 
            {filter !== 'all' && ` Filtered by ${filter}`} • 
            <span style={{ color: '#004d40', fontWeight: '600', marginLeft: '8px' }}>
              Real-time updates {autoRefresh ? 'ON' : 'OFF'}
            </span>
          </div>
          <button 
            className="filter-btn-small"
            onClick={() => setTransactions([...transactions].sort(() => Math.random() - 0.5))}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>
      </div>
    </>
  );
};

export default LT;