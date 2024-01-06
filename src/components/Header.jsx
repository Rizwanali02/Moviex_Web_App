import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export const Header = () => {
  return (
    <nav className="navBarStyle flex-wrap">
      <div className="navBar">
        <Link to={`/`} className="navbar-brand">
          <img src="image/movix-logo.svg" alt="Logo" className='logo-img' />
        </Link>
        <Search />
      </div>
    </nav>
  );
};
