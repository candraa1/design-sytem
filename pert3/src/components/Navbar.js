import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>E-Shop</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
