import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getProducts, getFilteredProduct } from "../lib";
import toast, { Toaster } from "react-hot-toast";
import ProductListItem from "../components/productListItem";
import Pagination from "../components/pagination";
import { Link } from "react-router-dom";

export default function ProductsPage({ cart, setCart }) {
  const [productsList, setProductsList] = useState([]);
  const [itemsCount, setItemsCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const itemsPerPage = 10;
  useEffect(() => {
    console.log(inputValue);
    if (inputValue) {
      getFilteredProduct(inputValue).then(setProductsList);
    } else {
      getProducts(itemsPerPage, (currentPage - 1) * itemsPerPage).then(
        (data) => {
          setProductsList(data.results);
          setItemsCount(data.count);
        }
      );
    }
  }, [currentPage, inputValue]);

  const categories = [
    "men s clothing",
    "jewelery",
    "electronics",
    "women s clothing",
  ];

  function addProduct(product) {
    cart.includes(product)
      ? (cart.filter((p) => p.id === product.id)[0].quantity += 1)
      : setCart((prevState) => {
          return [...prevState, product];
        });
    toast("Product added to cart !");
  }

  return (
    <Layout navLinks={["Home", "Products", "Admin", "Order"]}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-[1px] border-[#b6b2b2] rounded-md m-4 h-8"
      />
      <div className="w-[70vw]">
        {productsList.map((product) => (
          <ProductListItem
            key={product.id}
            picture={product.picture}
            name={product.name}
            rate={product.rate}
            price={product.price}
            addProduct={() => addProduct(product)}
            id={product.id}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-3">
        <Pagination
          index={Math.ceil(itemsCount / itemsPerPage)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <Toaster
        position="top-center"
        containerStyle={{}}
        toastOptions={{
          duration: 1000,
          style: {
            background: "blue",
            color: "white",
          },
        }}
      />
    </Layout>
  );
}
