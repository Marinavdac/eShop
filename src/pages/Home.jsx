import React, { useState } from 'react';

import NavBar from '../components/common/NavBar';
import Categories from '../components/common/Categories.';
import { listProductsByCategory } from '../services/api';
import FlexContainer from '../components/styles/FlexContainer.styled';
// import { listProductsByCategory } from '../services/api';
// import getProductsBtn from '../components/common/getCategoriesBtn';

function Home() {
  const [products, setProducts] = useState([]);

  const handleClick = async (event) => {
    const {
      data: { results },
    } = await listProductsByCategory(event.target.id);
    setProducts(results);
  };

  console.log(products);
  return (
    <>
      <NavBar />
      <Categories handleClick={handleClick} />
      <FlexContainer>
        {products?.map((product, index) => (
          <div key={index}>
            <h4>{product.title}</h4>
            <img src={product.thumbnail} />
          </div>
        ))}
      </FlexContainer>
    </>
  );
}

export default Home;
