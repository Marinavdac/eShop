// import './Categories.css';
// import { useEffect } from 'react';
import getCategoriesList from './getCategoriesList';

function Categories() {
  const categories = getCategoriesList();
 

  console.log('categories', categories);

  return (
    <div className="categories-container">
            { categories.map((category) => (
          <button
            type="button"
            data-testid="category"
            key={ category.id }
            id={ category.id }
            // onClick={ listProductsByCategory }
          >
            { category.name }
          </button>
        ))}
      </div>
    );
  }

export default Categories;

