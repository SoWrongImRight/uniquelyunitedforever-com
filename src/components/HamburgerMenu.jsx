



import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/uuf-logo.jpg';

const HamburgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: relative;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 0;
  z-index: 1001;
  border-radius: 50%;
  transition: background 0.2s;
  &:focus {
    outline: 2px solid #b76e79;
    background: #f9f6f7;
  }
`;

const HamburgerBar = styled.span`
  display: block;
  width: 30px;
  height: 3.5px;
  margin: 5px 0;
  background: #b76e79;
  border-radius: 2px;
  transition: 0.3s;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  background: #fff;
  z-index: 1000;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 0.25s, transform 0.25s;
  padding-top: 1.5rem;
  align-items: stretch;
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
`;

const MobileNavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const MobileLogoImg = styled.img`
  max-height: 48px;
  width: auto;
  object-fit: contain;
  display: block;
`;

const MobileNavLink = styled(NavLink)`
  color: #b76e79;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.3rem;
  text-decoration: none;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid #eee;
  background: none;
  text-align: left;
  transition: background 0.18s, color 0.18s;
  width: 100%;
  display: block;
  box-sizing: border-box;
  &:last-child {
    border-bottom: none;
  }
  &:hover, &:focus {
    background: #f9f6f7;
    color: #8a4a56;
    outline: none;
  }
`;

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <HamburgerMenuWrapper>
        <HamburgerButton
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <HamburgerBar style={open ? { transform: 'translateY(8px) rotate(45deg)' } : {}} />
          <HamburgerBar style={open ? { opacity: 0 } : {}} />
          <HamburgerBar style={open ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}} />
        </HamburgerButton>
      </HamburgerMenuWrapper>
      <MobileNav id="mobile-nav-menu" open={open} aria-hidden={!open}>
        {open && (
          <>
            <MobileNavLogo>
              <MobileLogoImg src={logo} alt="Uniquely United Forever logo" />
            </MobileNavLogo>
            <MobileNavLink to="/weddings" onClick={() => setOpen(false)}>Weddings</MobileNavLink>
            <MobileNavLink to="/vow-renewals" onClick={() => setOpen(false)}>Vow-Renewals</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileNavLink>
          </>
        )}
      </MobileNav>
    </>
  );
}

export default HamburgerMenu;
