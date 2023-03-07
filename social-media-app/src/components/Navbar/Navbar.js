import React ,{useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
	// const isAdmin = !!localStorage.getItem('isAdmin')

	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
    const isConnected = !!localStorage.getItem("token");
    setIsConnected(isConnected)
    console.log('hello')
  });
	return (
		<nav>
			<ul>
				<li>
					<NavLink  to='/'  style={{textDecoration: "none", color: "white"}}>
						Home
					</NavLink>
				</li>
				{!isConnected ? (
					<React.Fragment>
						<li>
							<NavLink to='/signup'  style={{textDecoration: "none", color: "white"}}>
								Sign Up
							</NavLink>
						</li>
						<li>
							<NavLink to='/login'style={{textDecoration: "none", color: "white"}}>
								Login
							</NavLink>
						</li>
					</React.Fragment>
				) : (
					<li>
						<NavLink to='/dashboard'  style={{textDecoration: "none", color: "white"}}>
							Dashboard
						</NavLink>
					</li>
				)}
      a{isConnected && 123 }b
			</ul>
		</nav>
	);
};

export default NavBar;
