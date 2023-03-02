import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
