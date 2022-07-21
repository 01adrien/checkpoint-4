import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "blue" : "black",
  });
  return (
    <div>
      <div className="h-16 flex justify-around items-center bg-[#e8e5e5]">
        {navLinks.map((l, i) => (
          <NavLink style={getActiveLinkStyle} key={i} to={links[l]}>
            <p key={i}>{l}</p>
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center">{children}</div>
        <div className="h-8 w-[100%] bg-[#e8e5e5] text-center">🙊</div>
      </div>
    </div>
  );
}
