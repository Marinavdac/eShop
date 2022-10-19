import * as React from 'react';
import getCategoriesList from '../components/getCategoriesList';
import NavBar from '../components/common/NavBar';


function Home() {
  const categories = getCategoriesList();

  console.log(categories);
  return (
    <>
      <NavBar />
    <h1> teste</h1>       
      

    </>
  );
}

export default Home;
