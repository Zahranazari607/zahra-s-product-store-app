import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  
  return response.data.map((p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    category: p.category,
    image: p.image,
    description: p.description,
    rating: { 
      rate: p.rating?.rate || 0, 
      count: p.rating?.count || 0 
    },
  }));
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  const p = response.data;

  return {
    id: p.id,
    title: p.title,
    price: p.price,
    category: p.category,
    image: p.image,
    description: p.description,
    rating: { 
      rate: p.rating?.rate || 0, 
      count: p.rating?.count || 0 
    },
  };
};