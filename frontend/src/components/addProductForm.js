import React from "react";

export default function AddProductForm() {
  const [product, setProduct] = useState({});

  async function handlePost(e) {
    e.preventDefault();
    try {
      await updateProduct(productId, product).then(() => {
        refresh();
        modify();
        toast("product updated !");
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[90vh] w-[60vw] bg-[#e8e5e5] flex justify-center rounded-md">
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
            cols="25"
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
