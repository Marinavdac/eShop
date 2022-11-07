import { useEffect, useState } from 'react';
// import getCategoriesList from './getCategoriesList';
// import { listProductsByCategory } from '../../../src/services/api'
import { getCategories } from '../../services/api';
import Flex from '../styles/Flex.styled';


function Categories(props) {
  const [categories, setCategories] = useState([]);
  
  
  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await getCategories();
      const result = response.data;
      setCategories(result)
    }
    fetchFromApi();
  }, []);

  return (
    <Flex>
      {
        categories.map((category, index) => (
          <button
          type="button"
          key={index}
          id={category.id}
          onClick={props.handleClick}
          
    >
      { category.name }
          </button>
        ))
      }
      </Flex>
    );
  }

export default Categories;