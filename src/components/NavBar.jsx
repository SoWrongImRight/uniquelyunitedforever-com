


import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/uuf-logo.jpg';
import HamburgerMenu from './HamburgerMenu';

const Nav = styled.nav`
  background: #fff;
  border-bottom: 1px solid #eee;
  height: 140px;
  display: flex;
  align-items: center;
  font-family: 'Playfair Display', serif;
  margin-bottom: 2rem;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 120px;
  width: 100%;
`;


const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const HomeTextLink = styled(Link)`
  font-family: 'Playfair Display', serif !important;
  font-size: 1.35rem;
  font-weight: 800;
  color: #333;
  text-decoration: none;
  margin-right: 2.5rem;
  letter-spacing: 0.5px;
  transition: color 0.2s, box-shadow 0.2s;
  border: none;
  box-shadow: none;
  border-radius: 6px;
  padding: 2px 8px;
  &:hover, &:focus {
    color: #b76e79;
    background: none;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.12);
    outline: none;
  }
  &.active {
    color: #b76e79;
    background: none;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.12);
  }
`;

const Logo = styled.img`
  max-height: 200px;
  max-width: 600px;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  vertical-align: middle;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
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
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 6px;
  border: none;
  box-shadow: none;
  transition: color 0.2s, box-shadow 0.2s;
  &:hover, &:focus {
    color: #b76e79;
    background: none;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.12);
    text-decoration: none;
    outline: none;
  }
  &.active {
    color: #b76e79;
    background: none;
    box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.12);
  }
`;

function NavBar() {
  return (
    <Nav>
      <NavContent>
        <LogoLink to="/" aria-label="Home">
          <Logo src={logo} alt="Uniquely United Forever logo" />
        </LogoLink>
        {/* <HomeTextLink to="/">Uniquely United Forever</HomeTextLink> */}
        <NavLinks>
          <NavItem><StyledNavLink to="/weddings">Weddings</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/vow-renewals">Vow Renewals</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/contact">Contact</StyledNavLink></NavItem>
        </NavLinks>
        <HamburgerMenu />
      </NavContent>
    </Nav>
  );
}

export default NavBar;
