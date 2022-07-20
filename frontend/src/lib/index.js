import axios from "axios";

export const myAxios = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export async function getProducts(limit = 10, offset = 0) {
  const res = await myAxios.get(`/products?offset=${offset}&limit=${limit}`);
  return res.data;
}

export async function getFilteredProduct(query) {
  const res = await myAxios.get(`/products?item=${query}`);
  if (res.data) return res.data;
  return [];
}

export async function getOneProduct(id) {
  const res = await myAxios.get(`/products/${id}`);
  return res.data;
}
