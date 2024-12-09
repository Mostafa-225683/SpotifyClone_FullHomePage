import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ likedSongsCount }) => {
  return (
    <div className="sidebar">
      <div className="navigation-section">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : '')}>
          Search
        </NavLink>
        <NavLink to="/library" className={({ isActive }) => (isActive ? 'active' : '')}>
          Library
        </NavLink>
        <NavLink to="/liked-songs" className={({ isActive }) => (isActive ? 'active' : '')}>
          Liked Songs <span className="liked-count">({likedSongsCount})</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
