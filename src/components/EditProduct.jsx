import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams(); // Get product ID from the URL
  console.log(id)
  //const navigate = useNavigate(); // For navigation after update
  const [product, setProduct] = useState({
    description: '',
    category: '',
    price: '',
    rating: '',
    stock: '',
    brand: '',
  });

  // Fetch the product from Local Storage when the component loads
  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem('products')) || [];
    console.log(localProducts);
    const productToEdit = localProducts.find((p) => p.id === id);
    console.log(productToEdit);
    
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      alert("Product not found");
    }
  }, [id]);

  // Handle the update process
//   const handleEditProduct = async () => {
//     const response = await fetch(`https://dummyjson.com/products/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         description: product.description,
//         category: product.category,
//         price: product.price,
//         rating: product.rating,
//         stock: product.stock,
//         brand: product.brand,
//       }),
//     });

//     const updatedProduct = await response.json();

//     // Update the product in local storage as well
//     const localProducts = JSON.parse(localStorage.getItem('products')) || [];
//     const updatedLocalProducts = localProducts.map((p) =>
//       p.id === parseInt(id) ? updatedProduct : p
//     );
//     localStorage.setItem('products', JSON.stringify(updatedLocalProducts));

//     alert('Product updated successfully!');
//     // navigate('/products'); // Redirect to the product list page after editing
//   };

const handleEditProduct = async () => {
    const localProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = localProducts.map((p) =>
      p.id === product.id ? product : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    alert("Product updated successfully!");

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


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={product.rating}
          onChange={(e) => setProduct({ ...product, rating: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Brand</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
        />
      </div>

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleEditProduct}
      >
        Update Product
      </button>
    </div>
  );
};

export default EditProduct;
