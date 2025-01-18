import React from 'react';

const Heading = ({ level = 1, children, style = {} }) => {
  const Tag = `h${level}`;
  return <Tag style={style}>{children}</Tag>;
};

export default Heading;
