import * as React from 'react';
import getCategoriesList from '../components/getCategoriesList';
import './styles/Home.css';

function Home() {
  const categories = getCategoriesList();

  console.log(categories);
  return (
    <div>
<h1> teste</h1>       
      

    </div>
  );
}

export default Home;
