import React from 'react';
import Button from '../atoms/Button';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <Button label="Add to Cart" onClick={() => onAddToCart(product)} />
    </div>
  );
};

export default ProductCard;
