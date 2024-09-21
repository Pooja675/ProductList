import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Product List</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              <p className="hidden">{product.id}</p>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-800 font-semibold mb-4">${product.price}</p>

              <Link to={`/view-product/${product.id}`}> {/* Link to view product */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ViewProducts;
