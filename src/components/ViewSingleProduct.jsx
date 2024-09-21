import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Use useParams to get ID from URL

const ViewSingleProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store the product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state if product not found

  // Fetch product details from the API using the product ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data); // Set product data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Failed to fetch product details', error);
        setError(true); // Set error if there's an issue
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error || !product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-gray-800 font-semibold mb-2">Price: ${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>

      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default ViewSingleProduct;
