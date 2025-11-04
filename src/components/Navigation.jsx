import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Welcome' },
    { path: '/home', label: 'Home' },
    { path: '/presentation', label: 'Presentation' },
    { path: '/tutorial', label: 'Tutorial' },
    { path: '/code-explanation', label: 'Code Explanation' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">MCP - Group M</span>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
