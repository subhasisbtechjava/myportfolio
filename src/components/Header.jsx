import React, { useState } from 'react';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  const toggleHeader = () => {
    setMobileNavOpen(!mobileNavOpen);
    const header = document.getElementById('header');
    if (header) {
      header.classList.toggle('header-show');
    }
  };

  const handleLinkClick = () => {
    if (mobileNavOpen) {
      toggleHeader();
    }
  };

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i 
        className={`header-toggle d-xl-none bi ${mobileNavOpen ? 'bi-x' : 'bi-list'}`} 
        onClick={toggleHeader}
        style={{ cursor: 'pointer' }}
      ></i>

      <div className="profile-img">
        <img src="/assets/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle" />
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Alex Smith</h1>
      </a>

      <div className="social-links text-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active" onClick={handleLinkClick}><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume" onClick={handleLinkClick}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#services" onClick={handleLinkClick}><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}>
              <i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> 
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul className={dropdownOpen ? 'dropdown-active' : ''}>
              <li><a href="#" onClick={handleLinkClick}>Dropdown 1</a></li>
              <li className={`dropdown ${deepDropdownOpen ? 'active' : ''}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setDeepDropdownOpen(!deepDropdownOpen); }}>
                  <span>Deep Dropdown</span> 
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className={deepDropdownOpen ? 'dropdown-active' : ''}>
                  <li><a href="#" onClick={handleLinkClick}>Deep Dropdown 1</a></li>
                  <li><a href="#" onClick={handleLinkClick}>Deep Dropdown 2</a></li>
                  <li><a href="#" onClick={handleLinkClick}>Deep Dropdown 3</a></li>
                  <li><a href="#" onClick={handleLinkClick}>Deep Dropdown 4</a></li>
                  <li><a href="#" onClick={handleLinkClick}>Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#" onClick={handleLinkClick}>Dropdown 2</a></li>
              <li><a href="#" onClick={handleLinkClick}>Dropdown 3</a></li>
              <li><a href="#" onClick={handleLinkClick}>Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact" onClick={handleLinkClick}><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

