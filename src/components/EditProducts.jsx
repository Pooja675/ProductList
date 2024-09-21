import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProducts = () => {
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState(null);
  console.log(product);

  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem("products")) || [];
    const productToEdit = localProducts.find((p) => p.id === parseInt(id));
    //setProduct(productToEdit);

    if (productToEdit) {
      // Populate state with the product details excluding the title
      setProduct({
        description: productToEdit.description,
        category: productToEdit.category,
        price: productToEdit.price,
        rating: productToEdit.rating,
        stock: productToEdit.stock,
        brand: productToEdit.brand,
      });
    } else {
      alert("Product not found");
    }
  }, [id]);

  const handleEditProduct = async () => {
    const localProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = localProducts.map((p) =>
      p.id === product.id ? product : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    alert("Product updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>
      {product && (
        <>
          <input
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            disabled
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.rating}
              onChange={(e) =>
                setProduct({ ...product, rating: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={product.brand}
              onChange={(e) =>
                setProduct({ ...product, brand: e.target.value })
              }
            />
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={handleEditProduct}
          >
            Update Product
          </button>
        </>
      )}
    </div>
  );
};

export default EditProducts;
