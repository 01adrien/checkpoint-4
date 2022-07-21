import React from "react";
import Layout from "../components/layout";
import ProductOrderItem from "../components/productOrderItem";

export default function OrderPage({ cart, setCart }) {
  function removeProduct(product) {
    setCart(cart.filter((p) => p !== product));
  }

  function quantityPlus(product) {
    const updatedCart = cart.slice();
    updatedCart.filter((p) => p.id === product.id)[0].quantity += 1;
    setCart(updatedCart);
  }

  function quantityMinus(product) {
    if (product.quantity > 1) {
      const updatedCart = cart.slice();
      updatedCart.filter((p) => p.id === product.id)[0].quantity -= 1;
      setCart(updatedCart);
    }
  }

  return (
    <Layout navLinks={["Home", "Products", "Admin", "Order"]}>
      {cart.length > 0 && (
        <div className="text-xl m-10 w-[150px] text-center rounded-md flex items-center justify-center shadow-md h-12">
          <p>
            total {cart.reduce((acc, x) => acc + x.price * x.quantity, 0)} ¥
          </p>
        </div>
      )}
      <div className="w-[70vw]">
        {cart.length > 0 ? (
          cart.map((product, i) => (
            <ProductOrderItem
              plus={() => quantityPlus(product)}
              minus={() => quantityMinus(product)}
              key={i}
              picture={product.picture}
              name={product.name}
              rate={product.rate}
              quantity={product.quantity}
              price={product.price}
              removeProduct={() => removeProduct(product)}
            />
          ))
        ) : (
          <p className="text-center text-2xl mt-10">Nothing here!!</p>
        )}
      </div>
    </Layout>
  );
}
