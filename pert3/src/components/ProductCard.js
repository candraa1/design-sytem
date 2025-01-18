import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    margin: 1rem 0;
  }

  p {
    color: #007bff;
    font-weight: bold;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rp {product.price.toLocaleString()}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </Card>
  );
};

export default ProductCard;
