import axios from "axios";

export const myAxios = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export async function getProducts(limit = 10, offset = 0) {
  const res = await myAxios.get(`/products?offset=${offset}&limit=${limit}`);
  return res.data;
}

export async function getFilteredProduct(query, limit = 10, offset = 0) {
  try {
    const res = await myAxios.get(
      `/products?item=${query}&offset=${offset}&limit=${limit}`
    );
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function getOneProduct(id) {
  const res = await myAxios.get(`/products/${id}`);
  return res.data;
}

export async function getProductsByCategory(category, limit = 10, offset = 0) {
  const res = await myAxios.get(
    `/products-category?category=${category}&offset=${offset}&limit=${limit}`
  );
  return res.data;
}

export async function deleteProduct(productId) {
  return await myAxios.delete(`/products/${productId}`);
}
