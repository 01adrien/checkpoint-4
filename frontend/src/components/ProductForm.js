import React, { useEffect, useState } from "react";
import { getOneProduct, updateProduct, createProduct } from "../lib";
import toast, { Toaster } from "react-hot-toast";

export default function ProductForm({ productId, refresh, modify, method }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (method === "PATCH") {
      getOneProduct(productId).then((data) => {
        setProduct({
          name: data.name,
          price: data.price,
          description: data.description,
          category: data.category,
          rate: data.rate,
          picture: data.picture,
        });
      });
    } else if (method === "POST") {
      setProduct({
        name: "",
        price: "",
        description: "",
        category: "",
        rate: "",
        picture: "",
      });
    }
  }, []);

  async function handlePost(e) {
    e.preventDefault();
    if (method === "PATCH") {
      try {
        await updateProduct(productId, product).then(() => {
          refresh();
          modify();
          toast("product updated !");
        });
      } catch (e) {
        console.log(e);
      }
    } else if (method === "POST") {
      try {
        console.log(product);
        await createProduct(product).then(() => {
          refresh();
          modify();
          toast("product created !");
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center product-form-bg">
      <div className="h-[90vh] w-[50vw] bg-[#e8e5e5] flex justify-center rounded-md">
        <form
          className="flex flex-col w-[60%] items-center justify-around"
          onSubmit={handlePost}
        >
          <label>Name</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <label>Price</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <label>description</label>
          <textarea
            rows="15"
            cols="20"
            type="text"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
          <label>Category</label>
          <input
            type="text"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <label>Rate</label>
          <input
            type="number"
            value={product.rate}
            onChange={(e) => setProduct({ ...product, rate: e.target.value })}
          />
          <label>Picture URL</label>
          <input
            type="text"
            value={product.picture}
            onChange={(e) =>
              setProduct({ ...product, picture: e.target.value })
            }
          />
          <button
            type="onSubmit"
            className="bg-[blue] hover:bg-blue-500 text-white font-bold py-2 rounded w-[80px] mt-8 text-center"
          >
            SUBMIT
          </button>
          <p className="text-sm" onClick={() => modify()}>
            quit
          </p>
        </form>
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
    </div>
  );
}
