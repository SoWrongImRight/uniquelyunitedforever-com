
import { useEffect, useRef, useState } from 'react';
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

  &:focus-visible {
    outline: 3px solid var(--color-rose);
    outline-offset: 3px;
    background: #f9f6f7;
  }
`;

const HamburgerBar = styled.span`
  display: block;
  width: 30px;
  height: 3.5px;
  margin: 5px 0;
  background: var(--color-rose);
  border-radius: 2px;
  transition: 0.3s;
  position: relative;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${({ $topOffset }) => `${$topOffset}px`};
  left: 0;
  width: 100%;
  height: ${({ $topOffset }) => `calc(100vh - ${$topOffset}px)`};
  background: #fff;
  z-index: 1000;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 0.25s, transform 0.25s;
  padding-top: 1rem;
  align-items: stretch;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
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
  max-width: 120px;
  width: 100%;
  object-fit: contain;
  display: block;
`;

const MobileSiteName = styled.span`
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  letter-spacing: 0.5px;
`;

const MobileNavLink = styled(NavLink)`
  color: var(--color-rose);
  font-family: var(--font-serif);
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
    color: var(--color-rose-dark);
    outline: none;
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem 0.5rem;
`;

const CloseButton = styled.button`
  min-width: 44px;
  min-height: 44px;
  padding: 0.5rem 0.85rem;
  font-weight: 700;
`;

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(80);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);

  useEffect(() => {
    function updateTopOffset() {
      const headerHeight = buttonRef.current?.closest('header')?.offsetHeight ?? 80;
      setTopOffset(headerHeight);
    }

    updateTopOffset();
    window.addEventListener('resize', updateTopOffset);

    return () => {
      window.removeEventListener('resize', updateTopOffset);
    };
  }, []);

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
      if (event.key === 'Tab') {
        const first = firstLinkRef.current;
        const last = lastLinkRef.current;

        if (!first || !last || !navRef.current?.contains(document.activeElement)) {
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

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
      <MobileNav
        id="mobile-nav-menu"
        ref={navRef}
        $open={open}
        $topOffset={topOffset}
        aria-hidden={open ? undefined : 'true'}
        aria-label="Mobile navigation"
      >
        {open && (
          <>
            <MobileNavLogo>
              <MobileLogoLink
                to="/"
                onClick={() => setOpen(false)}
                aria-label="Home - Uniquely United Forever"
                ref={firstLinkRef}
              >
                <MobileLogoImg src={logo} alt="Uniquely United Forever logo" />
                <MobileSiteName>Uniquely United Forever</MobileSiteName>
              </MobileLogoLink>
            </MobileNavLogo>
            <MobileNavHeader>
              <CloseButton type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                ✕ Close
              </CloseButton>
            </MobileNavHeader>
            <MobileNavLink
              to="/weddings"
              onClick={() => setOpen(false)}
            >
              Weddings
            </MobileNavLink>
            <MobileNavLink to="/vow-renewals" onClick={() => setOpen(false)}>Vow Renewals</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setOpen(false)} ref={lastLinkRef}>
              Contact
            </MobileNavLink>
          </>
        )}
      </MobileNav>
    </>
  );
}

export default HamburgerMenu;
