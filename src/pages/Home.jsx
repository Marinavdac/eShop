import React from 'react';
import PersistentDrawerLeft from '../components/PersistentDrawerLeft';
import getCategoriesList from '../components/getCategoriesList';

function Home() {
  
  const categories = getCategoriesList();

  console.log(categories)
  return (
    <div>
      <h1>Home</h1>
      
      <PersistentDrawerLeft categories={categories}/>
    </div>
  )
  
}

export default Home;