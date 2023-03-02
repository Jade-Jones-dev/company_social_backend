import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" style={{textDecoration: 'none'}}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active" style={{textDecoration: 'none'}}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active" style={{textDecoration: 'none'}}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
