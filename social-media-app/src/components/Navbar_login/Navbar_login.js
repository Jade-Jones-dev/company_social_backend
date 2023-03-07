import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar_login.css'

const Navbar_login = () => {
  return (
    <nav>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active" style={{textDecoration: 'none', color:'white'}}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active" style={{textDecoration: 'none', color: 'white'}}>
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeClassName="active" style={{textDecoration: 'none', color: 'white'}}>
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);
}

export default Navbar_login