// Product.jsx
import React, { useState, useEffect } from "react";
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=6");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="center-text">Loading products...</p>;
  if (error) return <p className="center-text">Error: {error}</p>;

  return (
    <div className="product-wrapper">
      <div className="product-container">
        <h1 className="product-heading">Product Store</h1>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              {product.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;
