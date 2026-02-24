



import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

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
  position: relative;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 140px;
  left: 0;
  width: 100%;
  height: calc(100vh - 140px);
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

const MobileLogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
`;

const MobileLogoImg = styled.img`
  max-height: 120px;
  width: auto;
  object-fit: contain;
  display: block;
`;

const MobileSiteName = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  letter-spacing: 0.5px;
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
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

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

  useEffect(() => {
    if (!open) {
      buttonRef.current?.focus();
      return undefined;
    }

    const rafId = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <HamburgerMenuWrapper>
        <HamburgerButton
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          onClick={() => setOpen((o) => !o)}
          ref={buttonRef}
        >
          <HamburgerBar style={open ? { transform: 'translateY(13.5px) rotate(45deg)' } : {}} />
          <HamburgerBar style={open ? { opacity: 0 } : {}} />
          <HamburgerBar style={open ? { transform: 'translateY(-13.5px) rotate(-45deg)' } : {}} />
        </HamburgerButton>
      </HamburgerMenuWrapper>
      <MobileNav id="mobile-nav-menu" open={open} aria-hidden={!open} aria-label="Mobile">
        {open && (
          <>
{/*             <MobileNavLogo>
              <MobileLogoLink to="/" onClick={() => setOpen(false)} aria-label="Home - Uniquely United Forever">
                <MobileLogoImg src={logo} alt="Uniquely United Forever logo" />
                <MobileSiteName>Uniquely United Forever</MobileSiteName>
              </MobileLogoLink>
            </MobileNavLogo> */}
            <MobileNavLink
              to="/weddings"
              onClick={() => setOpen(false)}
              ref={firstLinkRef}
            >
              Weddings
            </MobileNavLink>
            <MobileNavLink to="/vow-renewals" onClick={() => setOpen(false)}>Vow Renewals</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileNavLink>
          </>
        )}
      </MobileNav>
    </>
  );
}

export default HamburgerMenu;
