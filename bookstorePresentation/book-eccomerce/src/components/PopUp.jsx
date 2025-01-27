import { useNavigate } from "react-router-dom";

function Popup({ product, setShowPopup }) {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    setShowPopup(false);
  };

  const handleGoToCart = () => {
    setShowPopup(false);
    navigate("/cart");
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Added to Cart</h2>
        <p>
          <strong>{product.title}</strong> has been added to your cart.
        </p>
        <div className="popup-buttons">
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleGoToCart}>Go to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
