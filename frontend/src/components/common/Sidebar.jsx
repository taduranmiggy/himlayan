import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/himlayan.png" alt="Himlayan" className="sidebar-logo-img" />
        <h2>Himlayan</h2>
        <p>Cemetery Management</p>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="sidebar-menu-icon">📊</span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/burial-records" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="sidebar-menu-icon">📋</span> Burial Records
          </NavLink>
        </li>
        <li>
          <NavLink to="/plots" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="sidebar-menu-icon">🗺️</span> Plots
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="sidebar-menu-icon">📍</span> Cemetery Map
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-user">
        <div className="sidebar-user-avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <div className="sidebar-user-info">
          <span className="sidebar-user-name">{user?.name}</span>
          <span className="sidebar-user-role">{user?.role}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
