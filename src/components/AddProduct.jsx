import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    stock: "",
    brand: "",
  });

  const handleAddProduct = async () => {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const newProduct = await response.json();

    // Generate a unique ID for the product
    const productId = Date.now().toString();
    newProduct.id = productId;

    const localProducts = JSON.parse(localStorage.getItem("products")) || [];
    localProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(localProducts));
    alert("Product added successfully!");

    // Clear the input fields by resetting the state
    setProduct({
      title: "",
      description: "",
      category: "",
      price: "",
      rating: "",
      stock: "",
      brand: "",
    });
  };

  // const handleAddProduct = () => {
  //   // Generate a unique ID for the new product
  //   const productId = Date.now().toString();
  
  //   // Add the unique ID to the new product
  //   const newProduct = {
  //     ...product,
  //     id: productId,
  //   };
  
  //   // Retrieve the current list of products from Local Storage (or initialize to an empty array)
  //   const localProducts = JSON.parse(localStorage.getItem("products")) || [];
  
  //   // Add the new product to the list
  //   localProducts.push(newProduct);
  
  //   // Save the updated product list back to Local Storage
  //   localStorage.setItem("products", JSON.stringify(localProducts));
  
  //   // Notify the user that the product was added
  //   alert("Product added successfully!");
  
  //   // Clear the input fields by resetting the state
  //   setProduct({
  //     title: "",
  //     description: "",
  //     category: "",
  //     price: "",
  //     rating: "",
  //     stock: "",
  //     brand: "",
  //   });
  // };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Description"
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
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Rating"
          value={product.rating}
          onChange={(e) => setProduct({ ...product, rating: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Stock"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Brand</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Brand"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
        />
      </div>

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
