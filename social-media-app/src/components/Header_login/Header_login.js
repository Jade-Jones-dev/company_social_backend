import React from 'react'
import Navbar_login from "../Navbar_login/Navbar_login";
import './Header_login.css'
import logo from './icon-left-font-monochrome-white.png'

const Header = () => {
  return (
    <div className='header_wrapper'>
        <img src={logo} alt='company logo'/>
        <Navbar_login/>
    </div>
  )
}

export default Header