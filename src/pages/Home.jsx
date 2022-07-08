import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersistentDrawerLeft from '../components/PersistentDrawerLeft';
import getCategoriesList from '../components/getCategoriesList';
import { TextField } from '@mui/material';
import './styles/Home.css';

function Home() {
  const categories = getCategoriesList();

  console.log(categories);
  return (
    <div>
      <Stack direction="column" size="large" spacing={10} />
      <PersistentDrawerLeft categories={categories} />
      <section className="search-bar-section">
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <Button variant="contained">Buscar</Button>
      </section>  
       
      

    </div>
  );
}

export default Home;
