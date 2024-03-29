import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="images/logo.png" alt="Smart Gorilla Games" className="logo-image" />
          <span className="logo-text">Smart Gorilla Games</span>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <img src='images/home-icon.png' alt = 'Home'/>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/games' className='nav-links' onClick={closeMobileMenu}>
                <img src='/images/games-icon.jpg.png' alt='Games' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/websites' className='nav-links' onClick={closeMobileMenu}>
                <img src='/images/websites-icon.png' alt='Websites' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/information' className='nav-links' onClick={closeMobileMenu}>
                <img src='/images/information-icon.png' alt='Information' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
