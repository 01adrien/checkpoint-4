import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Layout({ navLinks, children }) {
  const links = {
    Home: "/",
    Products: "/products",
    Admin: "/admin",
    Order: "/order",
    "Add Product": "/",
    "Product List": "/",
    Disconnect: "/",
  };
  return (
    <>
      <div className="h-16 flex justify-around items-center border-b-2">
        {navLinks.map((l, i) => (
          <Link to={links[l]}>
            <p key={i}>{l}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center">{children}</div>
    </>
  );
}
