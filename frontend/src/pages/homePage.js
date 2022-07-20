import React from "react";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <Layout navLinks={["Home", "Products", "Admin", "Order"]}>
      <div className="home-bg w-[100vw] h-[100vh]">hello</div>
    </Layout>
  );
}
