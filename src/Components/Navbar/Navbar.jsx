import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification from '../../assets/notification.png';
import profile_icon from '../../assets/kk.png';

export const Navbar = () => {
  return (
    <nav className='flex-div'>
      
      {/* Left Section */}
      <div className='nav-left flex-div'>
        <img className='menu-icon' src={menu_icon} alt="Menu" />
        <img className='logo' src={logo} alt="Logo" />
      </div>

      {/* Middle Section */}
      <div className="nav-middle flex-div">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="Search" />
      </div>

      {/* Right Section */}
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More" />
        <img src={notification} alt="Notification" />
        <img src={profile_icon} className='user-icon' alt="Profile" />
      </div>
      
    </nav>
  );
}
