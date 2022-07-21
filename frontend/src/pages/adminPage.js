import React, { useEffect, useState } from "react";
import AdminListItem from "../components/adminListItem";
import AdminLoggin from "../components/adminLogginForm";
import Layout from "../components/layout";
import { getProducts } from "../lib";
import Pagination from "../components/pagination";
import ProductForm from "../components/ProductForm";

export default function AdminPage() {
  const [loggin, setLoggin] = useState(true);
  const [products, setProducts] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [itemsCount, setItemsCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modify, setModify] = useState(false);
  const [productId, setProductId] = useState(null);
  const [add, setAdd] = useState(false);
  const itemsPerPage = 10;

  async function getProductsFromApi() {
    await getProducts(itemsPerPage, (currentPage - 1) * itemsPerPage).then(
      (data) => {
        setProducts(data.results);
        setItemsCount(data.count);
      }
    );
  }

  useEffect(() => {
    getProductsFromApi();
  }, [currentPage]);

  function handleSubmit(e) {
    e.preventDefault();
    if (credentials.name === "admin" && credentials.password === "admin") {
      setLoggin(true);
    }
  }
  return (
    <>
      {add ? (
        <ProductForm
          productId={0}
          refresh={getProductsFromApi}
          modify={() => setAdd(false)}
          method={"POST"}
        />
      ) : !loggin ? (
        <AdminLoggin
          fnSubmit={handleSubmit}
          credentials={credentials}
          setCredentials={setCredentials}
        />
      ) : !modify ? (
        <Layout navLinks={["Logout"]}>
          <AdminListItem
            createProduct={() => setAdd(true)}
            products={products}
            refresh={getProductsFromApi}
            modify={() => setModify(true)}
            selectProduct={setProductId}
          />
          <div className="flex justify-center w-full">
            <Pagination
              index={Math.ceil(itemsCount / itemsPerPage)}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </Layout>
      ) : (
        <ProductForm
          productId={productId}
          refresh={getProductsFromApi}
          modify={() => setModify(false)}
          method={"PATCH"}
        />
      )}
    </>
  );
}
