import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";
import './CartPage.css';


function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [thankYouMsg, setThankYouMsg] = useState("");
  
  const buyNow = () => {
    if (cart.length === 0) {
      setThankYouMsg("Your cart is empty. Add some products first.");
    } else {
      dispatch(clearCart());
      setThankYouMsg("🎉 Thanks for shopping with us at DaxoMart!");
    }
}



  return (
    <div className="container" style={{marginTop: "100px"}}>
      <h2 className="cart-header animate__animated animate__bounce">Your  Cart</h2>
      
      {thankYouMsg && (
        <div className="alert alert-success text-center fs-5 animate__animated animate__bounce" 
        style={{
            marginTop: "50px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            backgroundColor: " #010a44",
            color: "white",
            border: "2px solid #c3e6cb",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "130px", 
            boxShadow: "0 0 10px 10px green",
          }}
        >
          {thankYouMsg}
        </div>
      )}


      {cart.length === 0 && !thankYouMsg ? (
        <p className="cart-para" style={{marginBottom:"300px", color:"white"}}>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-card mb-3 p-3 ">
              <div className="row">
                <div className="col-md-3 " style={{width:"150px"}}>
                  <img src={item.image} alt={item.title} className="img-fluid" height={100} width={100} />
                </div>
                <div className="col-md-9 text-white ">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <p className="fw-bold">Price: ${item.price}</p>
                  <button
                    className="btn btn-danger "
                    onClick={() => dispatch(removeItem(index))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            className="btn btn-outline-danger mt-3 mb-5"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button >
          <button  className="btn btn-outline-danger mt-3 mb-5 ms-3" onClick={buyNow} style={{marginLeft:"20px"} }>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
