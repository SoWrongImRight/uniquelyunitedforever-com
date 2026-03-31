
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/uuf-logo.webp';
import HamburgerMenu from './HamburgerMenu';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(183, 110, 121, 0.1);
  display: flex;
  align-items: center;
  font-family: var(--font-serif);
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  width: 100%;

  @media (min-width: 800px) {
    padding: 1rem 1.75rem;
    min-height: 88px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  padding: 0.25rem 0;
`;

const Logo = styled.img`
  max-width: 120px;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  vertical-align: middle;

  @media (min-width: 800px) {
    max-width: 160px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--font-serif);
  margin-left: auto;

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #3f3739;
  font-weight: 700;
  font-size: 1.3rem;
  font-family: var(--font-serif);
  letter-spacing: 0.01em;
  padding: 0.5rem 0.1rem;
  position: relative;
  transition:
    color 0.22s ease,
    opacity 0.22s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.2rem;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent 0%, var(--color-rose) 18%, var(--color-rose) 82%, transparent 100%);
    opacity: 0;
    transform: scaleX(0.55);
    transition: opacity 0.22s ease, transform 0.22s ease;
  }

  &:hover, &:focus {
    color: var(--color-rose);
    text-decoration: none;
    outline: none;
    opacity: 0.92;
  }

  &:hover::after, &:focus::after {
    opacity: 0.55;
    transform: scaleX(0.8);
  }

  &.active {
    color: var(--color-rose);
  }

  &.active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 3px solid var(--color-rose);
    outline-offset: 3px;
  }
`;

function NavBar() {
  return (
    <header>
      <Nav role="banner">
        <NavContent>
          <LogoLink to="/" aria-label="Home">
            <Logo
              src={logo}
              alt="Uniquely United Forever logo"
              width="200"
              height="80"
              loading="eager"
              fetchPriority="high"
            />
          </LogoLink>
          <NavLinks aria-label="Main navigation">
            <NavItem><StyledNavLink to="/weddings">Weddings</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to="/vow-renewals">Vow Renewals</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to="/contact">Contact</StyledNavLink></NavItem>
          </NavLinks>
          <HamburgerMenu />
        </NavContent>
      </Nav>
    </header>
  );
}

export default NavBar;
