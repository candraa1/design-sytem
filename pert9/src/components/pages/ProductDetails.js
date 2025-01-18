import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  padding: 2rem;
  text-align: center;

  img {
    max-width: 300px;
    margin: 1rem auto;
  }

  h1 {
    margin: 1rem 0;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Product = () => {
  const { id } = useParams();
  const product = {
    id,
    name: 'Laptop',
    price: 15000000,
    image: '/assets/laptop.jpg',
    description: 'Laptop high-end dengan performa tinggi.',
  };

  return (
    <ProductContainer>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>Rp {product.price.toLocaleString()}</h3>
      <button>Add to Cart</button>
    </ProductContainer>
  );
};

export default Product;
