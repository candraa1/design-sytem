import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', variant = 'primary', style = {}, disabled = false }) => {
  const className = `button button-${variant} ${disabled ? 'button-disabled' : ''}`;
  return (
    <button type={type} onClick={onClick} style={style} className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
