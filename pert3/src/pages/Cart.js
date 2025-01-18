import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
`;

const Cart = () => {
  return (
    <CartContainer>
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
    </CartContainer>
  );
};

export default Cart;
