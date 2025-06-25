import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'
import { useAuth } from "../context/authContex";
const Navabar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
    const [istoggle,setIsToggle]=useState(false)
    const togglemenuitem=()=>{
        setIsToggle(!istoggle)
    }
    const closeMobileMenu = () => {
    setIsToggle(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-logo">
          <span className="logo-ion">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/book-sharing-2245209-1891215.png"
              alt=""
              width={"80px"}
            />
          </span>
          <span className="logo-text">BookSharing</span>
        </Link>
        {/* mobile button */}
        <div className={`menu-icon ${istoggle ? 'active' : 'x'}`} onClick={togglemenuitem}>
          <span className={`bar${istoggle?'open1':''}`}></span>
          <span className={`bar${istoggle?'open2':''}`}></span>
          <span className={`bar${istoggle?'open3':''}`}></span>
        </div>
        {/* navigation links */}
       
        <ul className={`nav-menu${istoggle?'active':''}`}>
         <>
          <li className="nav-item">
            <Link to={'/profile'} className="nav-link">Profile</Link>
          </li>
           <li className="nav-item">
            <button className="nav-link logout-btn">logout</button>
          </li>
         </>
         <>
          <li className="nav-item">
            <Link to={'/register'} className="nav-link">Register</Link>
          </li>
           <li className="nav-item">
            <Link to={'/login'} className="nav-link">Login</Link>
          </li>
         </>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navabar;
