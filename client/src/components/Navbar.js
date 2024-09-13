import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li className='navbar-link'><Link to="/">Home</Link></li>
        <li className='navbar-link'><Link to="/blog">Blog</Link></li>
        <li className='navbar-link'><Link to="/create">Crear blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
