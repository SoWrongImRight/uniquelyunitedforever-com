
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/uuf-logo.jpg';
import HamburgerMenu from './HamburgerMenu';

const Nav = styled.nav`
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  font-family: var(--font-serif);
  margin-bottom: 2rem;
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
    padding: 0 1.5rem;
    min-height: 80px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
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
  color: #333;
  font-weight: 600;
  font-size: 1.5rem;
  font-family: var(--font-serif);
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 6px;
  border: none;
  box-shadow: none;
  transition: color 0.2s, box-shadow 0.2s;

  &:hover, &:focus {
    color: var(--color-rose);
    background: none;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.12);
    text-decoration: none;
    outline: none;
  }

  &.active {
    color: var(--color-rose);
    background: none;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.12);
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
