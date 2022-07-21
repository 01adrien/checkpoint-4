import React from "react";
import { deleteProduct } from "../lib";
import toast, { Toaster } from "react-hot-toast";

export default function AdminListItem({
  products,
  modifyProduct,
  refreshAfterDelete,
}) {
  const tableBorder = "border-collapse border border-slate-400 text-center";
  const styleBtnBlue =
    "bg-[blue] hover:bg-blue-500 text-white font-bold py-2 rounded w-[80px] mt-8 text-center";
  const styleBtnRed =
    "bg-[red] hover:bg-red-800 font-bold text-white py-2 rounded w-[80px] mt-8 text-center";
  const tableHead = ["picture", "name", "price", "category", "rate", "action"];
  return (
    <div>
      <table className={tableBorder}>
        <thead className={tableBorder}>
          <tr>
            {tableHead.map((head) => (
              <td className={tableBorder} key={head}>
                {head}
              </td>
            ))}
          </tr>
        </thead>

        {products?.map((product) => (
          <tbody className={tableBorder + "h16"} key={product.id}>
            <tr>
              <td className={tableBorder}>
                <img
                  className="w-20 h-24"
                  src={product.picture}
                  alt="product"
                />
              </td>
              <td className="w-[40vw]">{product.name}</td>
              <td className={tableBorder}>{product.price}</td>
              <td className={tableBorder}>{product.category}</td>
              <td className={tableBorder}>{product.rate}</td>
              <td className="flex items-center">
                <button
                  className={styleBtnBlue}
                  onClick={() => modifyProduct(true)}
                >
                  modify
                </button>
                <button
                  className={styleBtnRed}
                  onClick={async () => {
                    await deleteProduct(product.id).then(() => {
                      refreshAfterDelete();
                      toast("product deleted !");
                    });
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
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