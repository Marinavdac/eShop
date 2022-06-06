import axios from 'axios';
export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}