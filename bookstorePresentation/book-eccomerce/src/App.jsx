import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

/*Import Components*/
import Header from "./components/header";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Popup from "./components/PopUp";
import axios from "axios";

/*Import Styles*/
import "./styles/app.css";
import "./styles/header.css";
import "./styles/ProductList.css";
import "./styles/ProductCard.css";
import "./styles/Cart.css";
import "./styles/PopUp.css";
import "./styles/checkOut.css";
import "./styles/ShipmentDetails.css";
import "./styles/ProductDetails.css";
import "./styles/Contact.css";
import "./styles/About.css";

function App() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [lastAddedProduct, setlastAddedProduct] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  //add item to cart
  const addToCart = (book) => {
    setCart((prevCart) => {
      if (!prevCart) prevCart = [];

      const excistingProduct = prevCart.find((item) => item.id === book.id);
      if (excistingProduct) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      setlastAddedProduct(book);
      setShowPopUp(true);
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  //remove item from cart
  const removeFromCart = (bookId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          return item.id === bookId
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  //fetch book data from the database
  useEffect(() => {
    axios
      .get("http://13.60.9.200:5000/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route
          path="/shop"
          element={<Shop books={books} addToCart={addToCart} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails books={books} addToCart={addToCart} />}
        />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
      {showPopUp && (
        <Popup product={lastAddedProduct} setShowPopup={setShowPopUp} />
      )}
      <div className="footer">
        &copy; 2025 All copyrights reserved by Libraria Group Inc.
      </div>
    </Router>
  );
}

export default App;
