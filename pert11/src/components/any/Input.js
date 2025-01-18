import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange, style = {} }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      className="input"
    />
  );
};

export default Input;
