import React from 'react';
import { NavLink } from 'react-router-dom';
import { Links } from '../../constants';

const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      <NavLink to="/" className="logo">
        <h4>Pillow</h4>
      </NavLink>

      {/* Navigation Links - Fixed className */}
      <div className='nav-links-container'> {/* Changed class name */}
        {Links.map((link) => (
          <NavLink 
            to={link.to} 
            key={link.id}
            className={({ isActive }) => 
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* CTA Button */}
      <button>Sign Up</button>
    </nav>
  );
};

export default Navbar;