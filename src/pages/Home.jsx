import React, { useState } from 'react';

import NavBar from '../components/common/NavBar';
import Categories from '../components/common/Categories.';
import { listProductsByCategory, searchProductsByName } from '../services/api'
import Flex from '../components/styles/Flex.styled';


function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  
  const handleClick = async (event) => {
    const {
      data: { results },
    } = await listProductsByCategory(event.target.id);
    setProducts(results);
  };

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  
  const handleSearchBtn = async (search) => {
    const {
      data: { results },
    } = await searchProductsByName(search);
    
   setProducts(results);
  }

  console.log('products', products);
  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        handleSearchBtn={handleSearchBtn}
        search={search}
      />
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
              <p>{`R$ ${(product.price).toFixed(2)}`}</p>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Home;
