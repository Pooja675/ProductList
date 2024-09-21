
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Local Storage when the component mounts
  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(localProducts);
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Product List</h1>

      {products.length > 0 ? (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center bg-gray-100 p-4 rounded">
              <div>
                <h3 className="font-bold">{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
              </div>
              <Link to={`/edit-product/${product.id}`}>
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700">
                  Edit
                </button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found. Please add some products first.</p>
      )}
    </div>
  );
};

export default ProductList;
