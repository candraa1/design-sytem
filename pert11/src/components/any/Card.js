import React from 'react';
import './Card.css';

const Card = ({ children, style = {}, onClick }) => {
  return (
    <div className="card" style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
