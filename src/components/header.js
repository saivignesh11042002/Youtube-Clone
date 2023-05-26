import React from 'react';
import './Header.css'; // Import CSS file for styling
import { FaBars, FaYoutube, FaSearch, FaMicrophone, FaVideo, FaBell, FaUserCircle } from 'react-icons/fa'; // Import icons
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <header className="youtube-header" >
            <div className="left-section">
                <FaBars className="menu-icon" /> {/* Hamburger menu icon */}
                <div className="youtube-logo">
                    <FaYoutube className="youtube-icon" /> {/* YouTube logo */}
                    <span className="youtube-text">Youtube</span> {/* YouTube text */}
                </div>
            </div>
            <div className="middle-section">
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <FaSearch className="search-icon" /> {/* Search icon */}
                </div>
                <FaMicrophone className="voice-icon" /> {/* Voice recorder icon */}
            </div>
            <div className="right-section">
                <FaVideo className="video-icon" /> {/* Video icon */}
                <FaBell className="bell-icon" /> {/* Notification bell icon */}
                <FaUserCircle className="account-icon" /> {/* Account logo */}
            </div>
        </header>
    );
};

export default Header;


