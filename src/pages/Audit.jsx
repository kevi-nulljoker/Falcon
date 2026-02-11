import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Calendar, 
  SignalHigh, 
  TriangleAlert, 
  Bug, 
  UserPen, 
  TrendingUp, 
  TrendingDown,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';

const Audit = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [timeFilter, setTimeFilter] = useState('Today');

  const categories = ['All', 'AI Decisions', 'Rule Changes', 'Security Events', 'User Actions', 'System Logs'];
  const timeFilters = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days'];

  const activities = [
    {
      id: 1,
      type: 'AI Decision',
      title: 'AI flagged transaction #TX9087 as HIGH RISK',
      description: 'Performed by AI Engine',
      time: '10 min ago',
      icon: '🤖',
      color: '#d32f2f',
      bgColor: '#ffebee'
    },
    {
      id: 2,
      type: 'Rule Change',
      title: 'Sarah Chen updated Rule #158 *High Value Transactions-lower: #15,000',
      description: 'Learn newers, RI',
      time: '33m ago',
      icon: '⚙️',
      color: '#7b1fa2',
      bgColor: '#f3e5f5'
    },
    {
      id: 3,
      type: 'Analyst Decision',
      title: 'Analyst override Decision on Transaction #TX7931 Approved (was Declined)',
      description: 'Sarah Chen',
      time: '1h ago',
      icon: '👤',
      color: '#1565c0',
      bgColor: '#e3f2fd'
    },
    {
      id: 4,
      type: 'Security Event',
      title: 'User Rajesh logged in successfully from IP 105_34.xx.xx : ID Windows / Chrome',
      description: '',
      time: '3h ago',
      icon: '🔒',
      color: '#f57c00',
      bgColor: '#fff3e0'
    },
    {
      id: 5,
      type: 'AI Decision',
      title: 'AI flagged transaction #TX5921 as potentially fraudulent',
      description: '',
      time: '4h ago',
      icon: '🤖',
      color: '#d32f2f',
      bgColor: '#ffebee'
    },
    {
      id: 6,
      type: 'Security Event',
      title: 'Password changed from India (Maharashtra) flagged - Medium risk',
      description: '',
      time: '5h ago',
      icon: '🔒',
      color: '#f57c00',
      bgColor: '#fff3e0'
    }
  ];

  const activityInsights = [
    { label: 'Spike in AI high-risk flags between 10:00 - 12:00', value: 45 },
    { label: 'Analyst overrides increased by 18%', value: 18 },
    { label: 'Most security events originated from new devices', value: 87 }
  ];

  const mostCommonActivities = [
    { activity: 'AI flagged Multiple transactions in t min', count: 244 },
    { activity: 'Login from new device', count: 87 },
    { activity: 'Rule High Value To triggered', count: 85 },
    { activity: 'Password change alerts', count: 100 },
    { activity: 'Geographic anomalies', count: 57 }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      

      {/* Audit Logs Header Card */}
      <div style={styles.auditHeaderCard}>
        <div style={styles.auditHeaderContent}>
          <div>
            <h1 style={styles.auditTitle}>Audit Logs</h1>
            <p style={styles.auditSubtitle}>
              Today, 10,920 actions were logged: 62% AI-driven and 30% human-initiated. 890 were critical actions.
            </p>
          </div>
          
          <div style={styles.dateContainer}>
            <div style={styles.dateDisplay}>
              <Calendar size={16} color="#64748b" />
              <span style={styles.dateText}>Jan 08, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statValue}>
            <SignalHigh size={24} style={{ marginRight: '8px' }} />
            10,920
          </div>
          <div style={styles.statTrendPositive}>
            <TrendingUp size={14} />
            +4.2%
          </div>
          <div style={styles.statLabel}>Total Actions</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statValue}>
            <TriangleAlert size={24} style={{ marginRight: '8px' }} />
            890
          </div>
          <div style={styles.statTrendNegative}>
            <TrendingDown size={14} />
            -2.8%
          </div>
          <div style={styles.statLabel}>Critical Actions</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statValue}>
            <Bug size={24} style={{ marginRight: '8px' }} />
            8.4%
          </div>
          <div style={styles.statTrendPositive}>
            <TrendingUp size={14} />
            +1.2%
          </div>
          <div style={styles.statLabel}>High Risk Activity Rate</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statValue}>
            <UserPen size={24} style={{ marginRight: '8px' }} />
            47
          </div>
          <div style={styles.statTrendPositive}>
            <TrendingUp size={14} />
            +12%
          </div>
          <div style={styles.statLabel}>Analyst Overwrites</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.twoColumnGrid}>
          {/* Left Column - Activities */}
          <div>
            <div style={styles.card}>
              <div style={styles.actionBar}>
                <div style={styles.actionBarLeft}>
                  <h2 style={styles.cardTitle}>Activities</h2>
                  <div style={styles.timeFilterSelect}>
                    <Filter size={14} style={{ marginRight: '8px' }} />
                    <select 
                      value={timeFilter}
                      onChange={(e) => setTimeFilter(e.target.value)}
                      style={styles.select}
                    >
                      {timeFilters.map(filter => (
                        <option key={filter} value={filter}>{filter}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={styles.actionBarRight}>
                  <input 
                    type="text" 
                    placeholder="Search by evaluation, user..." 
                    style={styles.searchBox}
                  />
                  <button style={styles.exportBtn}>
                    <Download size={16} style={{ marginRight: '8px' }} />
                    Export CSV
                  </button>
                  <button style={styles.refreshBtn}>
                    <RefreshCw size={16} style={{ marginRight: '8px' }} />
                    Refresh
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div style={styles.filterButtons}>
                {categories.map(category => (
                  <button
                    key={category}
                    style={{
                      ...styles.filterBtn,
                      ...(selectedCategory === category ? styles.filterBtnActive : {})
                    }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Activities List */}
              <div>
                {activities.map(activity => (
                  <div key={activity.id} style={styles.activityItem}>
                    <div 
                      style={{
                        ...styles.activityIcon,
                        background: activity.bgColor,
                        color: activity.color
                      }}
                    >
                      {activity.icon}
                    </div>
                    <div style={styles.activityContent}>
                      <div 
                        style={{
                          ...styles.activityType,
                          color: activity.color
                        }}
                      >
                        {activity.type}
                      </div>
                      <div style={styles.activityTitle}>
                        {activity.title}
                      </div>
                      {activity.description && (
                        <div style={styles.activityDescription}>
                          {activity.description}
                        </div>
                      )}
                      <div style={styles.activityTime}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Insights */}
          <div>
            {/* Activity Insights */}
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Activity Insights (Last 24h)</h2>
              <div>
                {activityInsights.map((insight, index) => (
                  <div key={index} style={styles.insightItem}>
                    <div style={styles.insightLabel}>{insight.label}</div>
                    <div style={styles.insightValue}>+{insight.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Common Activities */}
            <div style={{ ...styles.card, marginTop: '24px' }}>
              <h2 style={styles.cardTitle}>Most Common Activities</h2>
              <div>
                {mostCommonActivities.map((activity, index) => (
                  <div key={index} style={styles.commonActivity}>
                    <div style={styles.commonActivityText}>
                      {activity.activity}
                    </div>
                    <div style={styles.activityCount}>
                      {activity.count} times
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {


  
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    width: '100%',
    marginTop: '20px',
  },
  
  // Header Styles
  enhancedDashboardHeader: {
    background: 'white',
    borderRadius: '19px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  
  headerMainContent: {
    width: '100%',
  },
  
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    background: '#f5f5f5',
    padding: '10px 15px',
    borderRadius: '25px',
    flex: 1,
    maxWidth: '400px',
  },
  
  searchInput: {
    background: 'transparent',
    border: 'none',
    color: '#333',
    marginLeft: '10px',
    outline: 'none',
    width: '100%',
    fontSize: '14px',
  },
  
  middleSpacer: {
    flex: 1,
  },
  
  notificationIcon: {
    position: 'relative',
    cursor: 'pointer',
    padding: '8px',
  },
  
  notificationBadge: {
    position: 'absolute',
    top: '0',
    right: '0',
    background: '#ff4757',
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  userProfileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: '#f5f5f5',
    padding: '8px 15px',
    borderRadius: '25px',
  },
  
  avatarInitials: {
    width: '36px',
    height: '36px',
    background: 'white',
    color: '#764ba2',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '14px',
  },
  
  userInfoText: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  userName: {
    fontWeight: '600',
    fontSize: '14px',
    color: '#333',
  },
  
  userEmail: {
    fontSize: '12px',
    color: '#666',
    fontFamily: 'monospace',
  },
  
  // Audit Header Card
  auditHeaderCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid #eef2f7',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
    marginBottom: '20px',
  },
  
  auditHeaderContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  auditTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 4px 0',
  },
  
  auditSubtitle: {
    fontSize: '15px',
    color: '#64748b',
    margin: 0,
  },
  
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  
  dateDisplay: {
    display: 'flex',
    alignItems: 'center',
    background: '#f8fafc',
    padding: '8px 16px',
    borderRadius: '25px',
    border: '1px solid #eef2f7',
  },
  
  dateText: {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#64748b',
  },
  
  // Stats Grid
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '32px',
  },
  
  statCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    border: '1px solid #f5f5f5',
  },
  
  statValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#004d40',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  
  statLabel: {
    fontSize: '14px',
    color: '#666',
    marginTop: '8px',
  },
  
  statTrendPositive: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#388e3c',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  
  statTrendNegative: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#d32f2f',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  
  // Main Content
  mainContent: {
    padding: '0',
    width: '100%',
  },
  
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
  },
  
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    border: '1px solid #f0f0f0',
  },
  
  cardTitle: {
    margin: '0 0 20px 0',
    fontSize: '18px',
    color: '#333',
  },
  
  actionBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #f0f0f0',
  },
  
  actionBarLeft: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  
  timeFilterSelect: {
    display: 'flex',
    alignItems: 'center',
    background: '#f1f1f1',
    padding: '6px 12px',
    borderRadius: '8px',
  },
  
  select: {
    padding: '4px 8px',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '14px',
    background: 'transparent',
    color: 'black',
    outline: 'none',
  },
  
  actionBarRight: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  
  searchBox: {
    padding: '10px 16px',
    border: '1px solid #e0e0e0',
    background: '#f1f1f1',
    borderRadius: '8px',
    width: '250px',
    fontSize: '14px',
    outline: 'none',
  },
  
  exportBtn: {
    padding: '10px 20px',
    background: '#004d40',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.2s',
  },
  
  refreshBtn: {
    padding: '10px 20px',
    background: '#f5f5f5',
    color: '#333',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.2s',
  },
  
  filterButtons: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  
  filterBtn: {
    padding: '8px 16px',
    border: '1px solid #e0e0e0',
    background: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.2s',
    outline: 'none',
  },
  
  filterBtnActive: {
    background: '#004d40',
    color: 'white',
    borderColor: '#004d40',
  },
  
  activityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
    borderBottom: '1px solid #f5f5f5',
    transition: 'background 0.2s',
  },
  
  activityIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginRight: '16px',
    flexShrink: 0,
  },
  
  activityContent: {
    flex: 1,
  },
  
  activityType: {
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  
  activityTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: '4px',
    lineHeight: '1.4',
  },
  
  activityDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
  },
  
  activityTime: {
    fontSize: '12px',
    color: '#999',
  },
  
  insightItem: {
    padding: '16px',
    background: '#f9f9f9',
    borderRadius: '12px',
    marginBottom: '12px',
    borderLeft: '4px solid #004d40',
  },
  
  insightLabel: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '4px',
  },
  
  insightValue: {
    fontSize: '12px',
    color: '#004d40',
    fontWeight: '600',
  },
  
  commonActivity: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #f5f5f5',
  },
  
  commonActivityText: {
    fontSize: '14px',
    color: '#333',
    flex: 1,
  },
  
  activityCount: {
    background: '#e0f2f1',
    color: '#004d40',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
  },
  
  // Responsive styles
  '@media (max-width: 1200px)': {
    statsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  
  '@media (max-width: 768px)': {
    container: {
      
    },
    
    twoColumnGrid: {
      gridTemplateColumns: '1fr',
    },
    
    statsGrid: {
      gridTemplateColumns: '1fr',
    },
    
    actionBar: {
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'flex-start',
    },
    
    actionBarRight: {
      width: '100%',
      flexDirection: 'column',
    },
    
    searchBox: {
      width: '100%',
    },
    
    headerActions: {
      flexDirection: 'column',
      gap: '10px',
    },
    
    searchContainer: {
      maxWidth: '100%',
    },
    
    middleSpacer: {
      display: 'none',
    },
  },
};

export default Audit;