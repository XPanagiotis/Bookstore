import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.svg";

import countTotalOrder from "../utils/countTotalOrder";
function Header({ cart }) {
  return (
    <header>
      <div className="logo">Libraria</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Online Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="cart-icon">
                <img src={CartIcon} alt="" />
                {cart.length > 0 && (
                  <div className="items-count">
                    {countTotalOrder(cart).totalQuantity}
                  </div>
                )}
              </div>
            </Link>
            {cart.length > 0 && (
              <div className="items-cost">
                {countTotalOrder(cart).totalPrice.toFixed(2)}€
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
