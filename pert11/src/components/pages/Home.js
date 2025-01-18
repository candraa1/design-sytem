import React from 'react';
import Button from '../any/Button';
import Card from '../any/Card';
import Input from '../any/Input';
import Typography from '../any/Typography';
import './Home.css';

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
    <div className="home">
      <Typography variant="h1" style={{ marginBottom: '20px', textAlign: 'center' }}>
        Welcome to E-Commerce
      </Typography>
      <Input placeholder="Search for products..." style={{ marginBottom: '20px', maxWidth: '400px' }} />
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} style={{ textAlign: 'center' }}>
            <img src={product.image} alt={product.name} className="product-image" />
            <Typography variant="h3">{product.name}</Typography>
            <Typography variant="p">Price: ${product.price}</Typography>
            <Button label="Add to Cart" onClick={() => handleAddToCart(product)} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
