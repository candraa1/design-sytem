import React from 'react';
import ProductList from '../organisms/ProductList';
import DefaultTemplate from '../templates/DefaultTemplate';

const products = [
  { id: 1, name: 'Laptop', price: 1500, image: '/assets/laptop.jpg' },
  { id: 2, name: 'Headphone', price: 200, image: '/assets/headphone.jpg' },
  { id: 3, name: 'Smartphone', price: 800, image: '/assets/smartphone.jpg' },
];

const Home = () => {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart`);
  };

  return (
    <DefaultTemplate>
      <h1>Welcome to E-Commerce</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </DefaultTemplate>
  );
};

export default Home;
