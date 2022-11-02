import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
function getCategoriesList() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await getCategories();
      const categories = response.data;
      setCategories(categories)
    }
    fetchFromApi();
  }, []);
  
  return categories;
  
}

export default getCategoriesList;