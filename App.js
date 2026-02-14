import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StaffScreen from './src/screens/StaffScreen';

export default function App() {
  const [page, setPage] = useState('login');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (uEmail, uRole) => {
    setEmail(uEmail);
    setRole(uRole);
    setPage('dashboard');
  };

  if (page === 'login') return <LoginScreen onLogin={handleLogin} />;
  
  if (page === 'dashboard') {
    if (role === 'coordinator') {
      return <StaffScreen onLogout={() => setPage('login')} onOpenProfile={() => setPage('profile')} />;
    }
    return <DashboardScreen userRole={role} onOpenProfile={() => setPage('profile')} />;
  }

  if (page === 'profile') {
    return <ProfileScreen userEmail={email} userRole={role} onBack={() => setPage('dashboard')} />;
  }
}