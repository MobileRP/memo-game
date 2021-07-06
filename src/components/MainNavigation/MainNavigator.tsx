import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './style.scss';
export const routes = [
  { path: '/', name: 'HOME' },
  { path: '/game', name: 'GAME' },
  { path: '/scores', name: 'SCORES' },
];
export const MainNavigator: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={'header'}>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        {routes.map(({ path, name }) => (
          <li key={name}>
            <NavLink
              key={name}
              to={path}
              exact
              className={`nav-link ${pathname === path ? 'nav-link-active' : ''}`}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
