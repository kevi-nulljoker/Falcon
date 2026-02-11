import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  BrainCircuit, ChartColumn, Cog, FileText, LogOut, 
  Radio, PanelsTopLeft, ChevronsRight, ChevronsLeft, 
  Bug, Bell, Search, Calendar, MessageSquare
} from 'lucide-react';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dashboardNavItems = [
    { path: '/dashboard', label: 'Overview', icon: PanelsTopLeft },
    { path: '/dashboard/live-transactions', label: 'Live Transactions', icon: Radio },
    { path: '/dashboard/risk-analytics', label: 'Risk Analytics', icon: ChartColumn },
    { path: '/dashboard/rules', label: 'Rules', icon: Cog },
    { path: '/dashboard/ai-models', label: 'AI Models', icon: BrainCircuit },
    { path: '/dashboard/audit-logs', label: 'Audit Logs', icon: FileText },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Add your logout logic here
  };

  return (
    <>
      <style>{`
        :root {
          --bg-gray: #f4f7f6;
          --sidebar-white: #ffffff;
          --accent-green: #004d40;
          --hover-green: #00695c;
          --light-green: #e0f2f1;
          --text-main: #1a1a1a;
          --text-muted: #757575;
          --border-color: #e0e0e0;
          --sidebar-width: ${isCollapsed ? '85px' : '260px'};
          --transition-speed: 0.4s;
          --transition-curve: cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: var(--bg-gray); font-family: 'Inter', -apple-system, sans-serif; overflow: hidden; }

        .dashboard-layout {
          display: grid;
          grid-template-columns: var(--sidebar-width) 1fr;
          height: 100vh;
          transition: grid-template-columns var(--transition-speed) var(--transition-curve);
        }

        .sidebar {
          background: var(--sidebar-white);
          border-right: 1px solid var(--border-color);
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          margin: 12px;
          transition: all var(--transition-speed) var(--transition-curve);
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .sidebar.collapsed { padding: 24px 12px; }

        .logo-box {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 20px;
          margin-bottom: 40px;
          height: 32px;
          color: var(--accent-green);
        }
        .logo-circle {
          width: 32px; height: 32px;
          background: var(--accent-green);
          border-radius: 10px;
          transition: transform var(--transition-speed) var(--transition-curve);
        }
        .sidebar.collapsed .logo-circle { transform: rotate(90deg); }

        .nav-section { margin-bottom: 32px; }
        .section-label { 
          font-size: 11px; text-transform: uppercase; color: var(--text-muted); 
          letter-spacing: 1.5px; margin-bottom: 12px; padding-left: 10px;
          transition: opacity 0.3s ease;
        }
        .sidebar.collapsed .section-label { opacity: 0; }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 10px;
          text-decoration: none;
          color: var(--text-muted);
          border-radius: 12px;
          margin-bottom: 6px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.25s ease;
          position: relative;
          border: none;
          background: none;
          cursor: pointer;
        }
        .nav-link:hover { background: var(--light-green); color: var(--accent-green); transform: translateX(4px); }
        .sidebar.collapsed .nav-link:hover { transform: translateX(0) scale(1.1); }
        .nav-link.active { background: var(--light-green); color: var(--accent-green); font-weight: 600; }
        .nav-link.active::before {
          content: ""; position: absolute; left: -2px; height: 20px; width: 4px;
          background: var(--accent-green); border-radius: 0 4px 4px 0;
        }
        .sidebar.collapsed .nav-link { justify-content: center; padding: 12px 0; }

        .collapse-btn-bottom {
          display: flex; align-items: center; gap: 12px; padding: 12px 10px; width: 100%;
          background: transparent; border: 1px solid transparent; color: var(--text-muted);
          font-family: inherit; font-size: 14px; font-weight: 500; cursor: pointer;
          border-radius: 12px; margin-top: 12px; transition: all 0.3s var(--transition-curve);
        }
        .collapse-btn-bottom:hover { background: #f0f0f0; color: var(--text-main); border-color: var(--border-color); }
        .sidebar.collapsed .collapse-btn-bottom { justify-content: center; }

        .link-text, .logo-text {
          opacity: 1; display: inline-block;
          transition: opacity 0.2s ease, transform 0.3s var(--transition-curve);
        }
        .sidebar.collapsed .link-text,
        .sidebar.collapsed .logo-text {
          opacity: 0; transform: translateX(-10px); pointer-events: none; position: absolute;
        }

        .nav-link svg, .collapse-btn-bottom svg { min-width: 20px; transition: transform 0.3s ease; }
        .logout-button { width: 100%; text-align: left; background: none; border: none; cursor: pointer; font-family: inherit; }
        
        /* Header Styles */
        .dashboard-header {
          background: white;
          border-radius: 19px;
          padding: 20px 24px;
          margin: 12px 12px 0 0;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .search-container {
          display: flex;
          align-items: center;
          background: #f5f5f5;
          padding: 12px 15px;
          border-radius: 25px;
          flex: 1;
          max-width: 400px;
        }
        
        .search-input {
          background: transparent;
          border: none;
          color: #333;
          margin-left: 10px;
          outline: none;
          width: 100%;
          font-size: 14px;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-left: auto;
        }
        
        .notification-icon {
          position: relative;
          cursor: pointer;
          padding: 8px;
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
          align-items: center;
          gap: 12px;
          background: #f5f5f5;
          padding: 8px 15px;
          border-radius: 25px;
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
          color: #333;
        }
        
        .user-email {
          font-size: 12px;
          color: #666;
          font-family: monospace;
        }
        
        .main-content {
          padding: 0 12px 12px 0;
          height: calc(100vh - 80px);
          overflow-y: auto;
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

      <div className="dashboard-layout">
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
          <div className="logo-box">
            <div className="logo-circle"></div>
            <span className="logo-text">FALCON</span>
          </div>
          
          <div className="nav-section">
            <p className="section-label">Dashboard</p>
            {dashboardNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/dashboard'}
              >
                <item.icon size={20} />
                <span className="link-text">{item.label}</span>
              </NavLink>
            ))}
          </div>
          
          <div className="nav-section" style={{ marginTop: 'auto' }}>
            <p className="section-label">General</p>
            <a href='/'>
              <button onClick={handleLogout} className="nav-link logout-button">
                <LogOut size={20} />
                <span className="link-text">Logout</span>
              </button>
            </a>
            <button 
              className="collapse-btn-bottom" 
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              <span className="link-text">Collapse</span>
            </button>
          </div>
        </aside>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Header moved here */}
          <div className="dashboard-header">
            <div className="search-container">
              <Search size={18} color="#666" />
              <input 
                type="text" 
                placeholder="Search projects, tasks..." 
                className="search-input"
              />
            </div>
            
            <div className="header-right">
              <div className="notification-icon">
                <Bell size={22} color="#333" />
                <span className="notification-badge">3</span>
              </div>
              
              <div className="user-profile-section">
                <div className="avatar-initials">TM</div>
                <div className="user-info-text">
                  <span className="user-name">Totok Michael</span>
                  <span className="user-email">tmichael20@mall.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <main className="main-content">
            <Outlet/>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;