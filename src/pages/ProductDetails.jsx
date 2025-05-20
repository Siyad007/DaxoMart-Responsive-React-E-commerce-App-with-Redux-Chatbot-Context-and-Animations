import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/productDetailsSlice";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { addToCart } = useContext(CartContext);

  const { item: product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h2>{product.title}</h2>
          <div className="product-rating">
            {"⭐".repeat(Math.round(product.rating.rate))}
            <span className="rating-text">
              {product.rating.rate}/5 ({product.rating.count} reviews)
            </span>
          </div>

          <div className="product-price-section">
            <span className="product-price">${product.price}</span>
            <button className="btn-success text-dark save-badge">Save ₹50</button>
            <div className="limited-time-badge">
              <button className="btn-danger">Limited Time deal</button>
            </div>
          </div>

          <div className="product-description">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>

          <div className="product-category">
            <p><strong>Category:</strong> {product.category}</p>
          </div>

          <div className="product-actions">
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
