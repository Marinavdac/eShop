import React, { useState } from 'react';

import NavBar from '../components/common/NavBar';
import Categories from '../components/common/Categories.';
import { listProductsByCategory } from '../services/api';
import Flex from '../components/styles/Flex.styled';
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
      <Flex>
        <Categories handleClick={handleClick} />
        <Flex wrap={'wrap'}>
          {products?.map((product, index) => (
            <Flex
              direction={'column'}
              width={'12rem'}
              background={'white'}
              padding={'1.5rem'}
              key={index}
            >
              <p>{product.title}</p>
              <img src={product.thumbnail} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Home;
