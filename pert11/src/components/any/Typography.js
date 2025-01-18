import React from 'react';

const Typography = ({ children, variant = 'p', style = {} }) => {
  const Tag = variant; // variant bisa "h1", "h2", "p", dll.
  return <Tag style={style}>{children}</Tag>;
};

export default Typography;
