// import React from 'react';
// import styled from 'styled-components';
// import ProductCard from '../components/ProductCard';

// const products = [
//   { id: 1, name: 'Laptop', price: 15000000, image: '/assets/laptop.jpg' },
//   { id: 2, name: 'Headphone', price: 500000, image: '/assets/headphone.jpg' },
//   { id: 3, name: 'Smartphone', price: 8000000, image: '/assets/smartphone.jpg' },
// ];

// const HomeContainer = styled.div`
//   padding: 2rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
// `;

// const Home = () => {
//   return (
//     <HomeContainer>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </HomeContainer>
//   );
// };

// export default Home;
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Laptop', price: 15000000, image: '/assets/laptop.jpg' },
  { id: 2, name: 'Headphone', price: 500000, image: '/assets/headphone.jpg' },
  { id: 3, name: 'Smartphone', price: 8000000, image: '/assets/smartphone.jpg' },
];

const HomeContainer = styled.div`
  padding: 2rem 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <h1>Our Products</h1>
        <div className="flex">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
