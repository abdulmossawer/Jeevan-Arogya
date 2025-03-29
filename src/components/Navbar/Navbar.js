import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaHeartbeat, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 1200px) {
    padding: 0.5rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    height: 70px;
  }
`;

const Logo = styled(Link)`
  color: #1a365d;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  
  svg {
    color: #48CAC9;
    font-size: 2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.02);
    
    svg {
      transform: scale(1.1);
    }
  }
  
  span {
    letter-spacing: -0.5px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    svg {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    gap: 0.3rem;
    
    svg {
      font-size: 1.5rem;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  gap: 1rem;

  @media (max-width: 968px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #1a365d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  position: relative;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ isActive }) => (isActive ? '80%' : '0')};
    height: 2px;
    background: #48CAC9;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #48CAC9;
    background: rgba(72, 202, 201, 0.05);
    
    &::before {
      width: 80%;
    }
  }

  @media (max-width: 968px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 70px);
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? '70px' : '-100vh')};
    left: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    z-index: 999;
    overflow-y: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const MobileLink = styled(Link)`
  color: #1a365d;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: ${({ isActive }) => (isActive ? '30%' : '0')};
    height: 2px;
    background: #48CAC9;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #48CAC9;
    background: rgba(72, 202, 201, 0.1);
    transform: translateY(-2px);
    
    &::after {
      width: 30%;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.8rem;
  }
`;

const MenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  margin-right: 0.5rem;
  
  &:hover {
    background: rgba(72, 202, 201, 0.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(72, 202, 201, 0.5);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <Nav>
      <Logo to="/" onClick={closeMenu}>
        <FaHeartbeat />
        <span>Jeevan Arogya</span>
      </Logo>
      
      <NavMenu>
        <NavLink to="/" isActive={location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/about" isActive={location.pathname === "/about"}>
          About
        </NavLink>
        <NavLink to="/team" isActive={location.pathname === "/team"}>
          Our Team
        </NavLink>
        <NavLink to="/contact" isActive={location.pathname === "/contact"}>
          Contact
        </NavLink>
      </NavMenu>

      <MenuIcon 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes color="#1a365d" /> : <FaBars color="#1a365d" />}
      </MenuIcon>

      <MobileMenu isOpen={isOpen}>
        <MobileLink to="/" onClick={closeMenu} isActive={location.pathname === "/"}>
          Home
        </MobileLink>
        <MobileLink to="/about" onClick={closeMenu} isActive={location.pathname === "/about"}>
          About
        </MobileLink>
        <MobileLink to="/team" onClick={closeMenu} isActive={location.pathname === "/team"}>
          Our Team
        </MobileLink>
        <MobileLink to="/contact" onClick={closeMenu} isActive={location.pathname === "/contact"}>
          Contact
        </MobileLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;