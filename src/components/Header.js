import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaUserAlt } from 'react-icons/fa'; // Only import the icons you are using

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
            {/* Logo Section */}
            <div className="logo">
                <img src="/logo512.png" alt="Logo" />
                <span>Family Health Education Portal</span>
            </div>

            {/* Navigation Menu */}
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#resources">Health Resources</a></li>
                    <li><a href="#education">Education Materials</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>

            {/* Actions Section */}
            <div className="actions">
                <input type="text" placeholder="Search..." className="search-bar" />
                <button className="login-btn">
                    <FaUserAlt /> Login
                </button>
            </div>
        </header>
    );
}

export default Header;