import { Link } from "react-router-dom";
import { useState } from "react";
import CheckOut from "./checkOut.jsx";
import ShipmentDetails from "./ShipmentDetails.jsx";
import countTotalOrder from "../utils/countTotalOrder.js";

/*Import Icons*/
import minusIcon from "../assets/minus.svg";
import plusIcon from "../assets/plusIcon.svg";

function Cart({ cart = [], addToCart, removeFromCart }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function toggleForm() {
    setIsFormVisible(!isFormVisible);
  }
  return (
    <div className="cart-container">
      <div className="cart">
        {/*Check if the cart is empty or not*/}
        {cart.length === 0 ? (
          <div className="empty-cart-container">
            <p className="empty-cart">Your cart is empty</p>
            <Link to="/">
              <button className="back-to-shop">Back to Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            {/*If the cart is not empty we display the order sumary*/}
            <h1>Your Cart ({countTotalOrder(cart).totalQuantity})</h1>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="item-info">
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                  </div>

                  <div className="item-amount">
                    <div className="add-remove">
                      <button
                        className="add-remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <img src={minusIcon} alt="" />
                      </button>
                      <div className="quantity">{item.quantity}</div>
                      <button
                        className="add-remove-btn"
                        onClick={() => addToCart(item)}
                      >
                        <img src={plusIcon} alt="" />
                      </button>
                    </div>

                    <div className="total-price">
                      {(item.price * item.quantity).toFixed(2)}€
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/*Proceed to checkout button*/}
            {cart.length > 0 && (
              <CheckOut
                cart={cart}
                isFormVisible={isFormVisible}
                toggleForm={toggleForm}
              />
            )}
          </>
        )}
      </div>
      {cart.length > 0 && <ShipmentDetails isFormVisible={isFormVisible} />}
    </div>
  );
}

export default Cart;
