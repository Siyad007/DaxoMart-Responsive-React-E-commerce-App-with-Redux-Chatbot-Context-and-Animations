import React from "react";
import "./ProductList.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const toDetails = () => {
    window.location.href = `/ProductDetails/${product.id}`;
  }

  return (
    <div className="card">
      <img onClick={toDetails} src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body" >
        <button className="btn-danger mb-2">Limited Time deal</button>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <small className="text-primary">Category: {product.category}</small>
        </p>
        <button className="btn-success text-dark">Save ₹50</button>
        <p className="card-price card-text fw-bold">${product.price}</p>
        <div className="product-rating">
            {"⭐".repeat(Math.round(product.rating.rate))}
            <span className="rating-text">
              {product.rating.rate}/5 ({product.rating.count} reviews)
            </span>
          </div>


        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
