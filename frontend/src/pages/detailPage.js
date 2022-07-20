import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../lib";
import Layout from "../components/layout";
import StarRate from "../components/starRate";
import Button from "../components/button";
import toast, { Toaster } from "react-hot-toast";

export default function DetailPage({ cart, setCart }) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  function addProduct() {
    const updatedCart = cart.slice();
    for (const item of updatedCart) {
      console.log(`${product.name} === ${item.name}`);
      if (product.name === item.name) {
        item.quantity += 1;
      }
    }
    if (updatedCart !== cart) {
      setCart(updatedCart);
    } else {
      setCart((prevState) => {
        return [...prevState, product];
      });
    }

    toast("Product added to cart !");
  }
  useEffect(() => {
    getOneProduct(id).then(setProduct);
  }, []);
  return (
    <Layout navLinks={["Home", "Products", "Admin", "Order"]}>
      <p className="text-sm mt-5 text-center">- {product.category} -</p>
      <p className="text-2xl mb-4">{product.name}</p>
      <StarRate rate={product.rate || 1} size="text-2xl" />
      <p className="text-2xl py-2">{product.price} ¥</p>
      <img
        className="w-[40vw] h-[40vh]"
        src={product.picture}
        alt={product.name}
      />
      <p className="text-center py-3 w-[40vw] text-xl">{product.description}</p>
      <Button text={"buy"} fn={addProduct} />
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
