import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './header.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        
        <button className="menu-toggle" onClick={toggleMenu}>
            <img src="/toggle.png" alt="Toggle Menu" className="menu-icon" />
        </button>

        <div className="logo-container">
            <Image src="/logo.svg" alt="FurSphere Logo" layout="intrinsic" width={210} height={64} />
        </div>
        <div className="header-right">
            <nav className="nav-desktop">
                <Link href="#home" className="nav-link">Home</Link>
                <Link href="#MBTI" className="nav-link">MBTI</Link>
                <Link href="#Partnership" className="nav-link">Partnership</Link>
                <Link href="#about" className="nav-link">About</Link>
            </nav>
            <button className="header-signup-button">Sign up</button>
        </div>
      </div>
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
            <button className="menu-toggle closeicon" onClick={toggleMenu}>
                <img src="/close.png" alt="Toggle Menu" className="menu-icon" />
            </button>
            <Link href="#home" className="nav-link white" onClick={closeMenu}>Home</Link>
            <Link href="#MBTI" className="nav-link white" onClick={closeMenu}>MBTI</Link>
            <Link href="#Partnership" className="nav-link white" onClick={closeMenu}>Partnership</Link>
            <Link href="#about" className="nav-link white" onClick={closeMenu}>About</Link>
      </nav>
    </header>

  );
};

export default Header;
