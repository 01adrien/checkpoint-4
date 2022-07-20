import React, { useEffect } from "react";
import Layout from "../components/layout";
import { useLocation } from "react-router-dom";

export default function AdminPage() {
  return (
    <Layout navLinks={["Add Product", "Product List", "Disconnect"]}>
      <div className="text-center text-2xl">AdminPage</div>
    </Layout>
  );
}
