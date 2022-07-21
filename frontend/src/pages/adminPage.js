import React, { useEffect, useState } from "react";
import AdminListItem from "../components/adminListItem";
import AdminLoggin from "../components/adminLogginForm";
import Layout from "../components/layout";
import { getProducts } from "../lib";
import Pagination from "../components/pagination";
import ModifyProductForm from "../components/modifyProductForm";

export default function AdminPage() {
  const [loggin, setLoggin] = useState(true);
  const [products, setProducts] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [itemsCount, setItemsCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshList, setRefreshList] = useState(false);
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
  }, [currentPage, refreshList]);

  function handleSubmit(e) {
    e.preventDefault();
    if (credentials.name === "admin" && credentials.password === "admin") {
      setLoggin(true);
    }
  }
  return (
    <>
      {!loggin ? (
        <AdminLoggin
          fnSubmit={handleSubmit}
          credentials={credentials}
          setCredentials={setCredentials}
        />
      ) : !modifyProduct ? (
        <Layout navLinks={["Logout"]}>
          <AdminListItem
            products={products}
            refreshAfterDelete={getProductsFromApi}
          />
          <div className="flex justify-center w-full">
            <Pagination
              index={Math.ceil(itemsCount / itemsPerPage)}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </Layout>
      : <ModifyProductForm  />)
    </>
  );
}
