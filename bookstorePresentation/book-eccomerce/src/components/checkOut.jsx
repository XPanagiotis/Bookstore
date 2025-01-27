import countTotalOrder from "../utils/countTotalOrder";

function CheckOut({ cart, toggleForm, isFormVisible }) {
  let prudactsCost = Number(countTotalOrder(cart).totalPrice.toFixed(2));
  let transportationCosts = 3;

  return (
    <>
      <div className="check-out">
        <h2>Order Summary</h2>
        <div className="product-value">
          <p>Prudact's Value</p>
          <span>{countTotalOrder(cart).totalPrice.toFixed(2)}€</span>
        </div>

        <div className="transportation-costs">
          <p>Transportation Costs</p>
          <span>{transportationCosts.toFixed(2)}€</span>
        </div>

        <div className="total">
          <p>Total</p>
          <span>{(prudactsCost + transportationCosts).toFixed(2)}€</span>
        </div>

        <button onClick={() => toggleForm()} className="check-out-btn">
          {isFormVisible ? "Hide Delivery Details" : "Edit Delivery Details"}
        </button>
      </div>
    </>
  );
}

export default CheckOut;
