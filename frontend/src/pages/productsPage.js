import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getProducts, getFilteredProduct, getProductsByCategory } from "../lib";
import toast, { Toaster } from "react-hot-toast";
import ProductListItem from "../components/productListItem";
import Pagination from "../components/pagination";

export default function ProductsPage({ cart, setCart }) {
  const [productsList, setProductsList] = useState([]);
  const [itemsCount, setItemsCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const itemsPerPage = 7;
  useEffect(() => {
    if (inputValue) {
      getFilteredProduct(
        inputValue,
        itemsPerPage,
        (currentPage - 1) * itemsPerPage
      ).then(setProductsList);
    }
    if (selectedCategory) {
      if (selectedCategory !== "all") {
        getProductsByCategory(
          selectedCategory,
          itemsPerPage,
          (currentPage - 1) * itemsPerPage
        ).then((data) => {
          setProductsList(data.results);
          setItemsCount(data.count);
        });
      } else if (selectedCategory === "all" && !inputValue) {
        getProducts(itemsPerPage, (currentPage - 1) * itemsPerPage).then(
          (data) => {
            setProductsList(data.results);
            setItemsCount(data.count);
          }
        );
      }
    } else {
      getProducts(itemsPerPage, (currentPage - 1) * itemsPerPage).then(
        (data) => {
          setProductsList(data.results);
          setItemsCount(data.count);
        }
      );
    }
  }, [currentPage, inputValue, selectedCategory]);

  const categories = [
    "men s clothing",
    "jewelery",
    "electronics",
    "women s clothing",
    "all",
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
        onChange={(e) => {
          setInputValue(e.target.value);
          setCurrentPage(1);
          setSelectedCategory("all");
        }}
        className="border-[1px] border-[#b6b2b2] rounded-md m-4 h-8"
        placeholder=" anything..."
      />
      <div className="flex h-20 w-[85vw] border-t-[1px] border-[#e8e5e5] overflow-x-auto min-w-[550px] justify-between items-center">
        {categories.map((cat) => (
          <div
            key={cat}
            className={
              selectedCategory === cat
                ? " bg-[#e8e5e5] rounded flex items-center h-[70%]"
                : null
            }
          >
            <button
              key={cat}
              className="px-3"
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          </div>
        ))}
      </div>
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
