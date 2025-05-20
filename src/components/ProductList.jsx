import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import { fetchProducts } from "../redux/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div
      className={`container ${
        location.pathname === "/products" ? "add-margin-top" : ""
      }`}
    >
      <div className="row mt-3">
        <div className="col-md-12 text-center mb-4">
          <h2 className="prod-header animate__animated animate__bounce">
            <span className="header-star">☆</span> Explore our Premium
          </h2>
          <p className="prod-para">
            Discover our exclusive range of products, handpicked just for you!
          </p>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="pdCard col-md-4 mb-4 d-flex justify-content-center"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
