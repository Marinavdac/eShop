import axios from 'axios';
export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await axios.get(URL);
    // console.log('response', data)
    return response;
  } catch (error) {
    console.error('It was not possible to fetch categories');
  }
}
export async function listProductsByCategory(categoryId = '$CATEGORY_ID') {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error('It was not possible to fetch categories');
  }
}
export async function searchProductsByName(product) {
  console.log('product', product)
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.error('It was not possible to fetch product');
  }
}


