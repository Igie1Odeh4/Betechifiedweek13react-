import { useState, useEffect } from "react";
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="page-center">
      <div className="product-box">
        <h1>Product Store</h1>

        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;
