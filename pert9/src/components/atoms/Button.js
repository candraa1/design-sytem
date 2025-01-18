import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', style = {} }) => {
  return (
    <button type={type} onClick={onClick} style={style} className="button">
      {label}
    </button>
  );
};

export default Button;
