import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview'; // Add this import
import LT from './pages/LT';
import Risk from './pages/Risk';
import Rules from './pages/Rules';
import AImodel from './pages/AImodel';
import Audit from './pages/Audit';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} /> {/* Set Overview as default */}
          <Route path="live-transactions" element={<LT />} />
          <Route path="risk-analytics" element={<Risk />} />
          <Route path="rules" element={<Rules />} />
          <Route path="ai-models" element={<AImodel />} />
          <Route path="audit-logs" element={<Audit />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;