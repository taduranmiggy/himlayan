import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import RoleBasedRedirect from './components/common/RoleBasedRedirect';

// Import design system
import './styles/design-system.css';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import EnhancedDashboardPage from './pages/EnhancedDashboardPage';
import MemberDashboardPage from './pages/MemberDashboardPage';
import BurialRecordsPage from './pages/BurialRecordsPage';
import PlotsPage from './pages/PlotsPage';
import MapPage from './pages/MapPage';
import PublicGravePage from './pages/PublicGravePage';
import MemberSearchPage from './pages/MemberSearchPage';
import MemberMapPage from './pages/MemberMapPage';
import MemberServicesPage from './pages/MemberServicesPage';
import MemberContactPage from './pages/MemberContactPage';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <Router>
              <Routes>
            {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/grave/:code" element={<PublicGravePage />} />

          {/* Role-based Dashboard Redirect */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <RoleBasedRedirect />
              </ProtectedRoute>
            }
          />

          {/* Admin/Staff Only Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute roles={['admin', 'staff']}>
                <EnhancedDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/burial-records"
            element={
              <ProtectedRoute roles={['admin', 'staff']}>
                <BurialRecordsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plots"
            element={
              <ProtectedRoute roles={['admin', 'staff']}>
                <PlotsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/map"
            element={
              <ProtectedRoute roles={['admin', 'staff']}>
                <MapPage />
              </ProtectedRoute>
            }
          />

          {/* Member/Visitor Routes */}
          <Route
            path="/member/dashboard"
            element={
              <ProtectedRoute>
                <MemberDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/search"
            element={
              <ProtectedRoute>
                <MemberSearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/map"
            element={
              <ProtectedRoute>
                <MemberMapPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/services"
            element={
              <ProtectedRoute>
                <MemberServicesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member/contact"
            element={
              <ProtectedRoute>
                <MemberContactPage />
              </ProtectedRoute>
            }
          />

          {/* Catch all - redirect to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
