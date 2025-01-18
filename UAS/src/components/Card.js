import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #007BFF;
`;

const CardContent = styled.p`
  color: #555;
`;

const Card = ({ title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);

export default Card;
