function ShipmentDetails({ isFormVisible }) {
  return (
    <>
      {isFormVisible && (
        <div className="form-container">
          <h2>Where do we sent your order?</h2>

          {/* Address Section */}
          <div className="form-section">
            <h3>Address</h3>
            <div className="form-row">
              <input type="text" placeholder="Street" />
              <input type="text" placeholder="Number" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Region" />
              <input type="text" placeholder="Postal Code." />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Bell (optional)" />
              <select>
                <option defaultValue="" disabled>
                  Floor
                </option>
                <option value="0">Ground Floor</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
              </select>
            </div>
          </div>

          {/* Recipient Details Section */}
          <div className="form-section">
            <h3>Recipient Details</h3>
            <div className="form-row">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Surname" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Email" />
            </div>
          </div>

          <button className="check-out-btn" onClick={() => confetti()}>
            Sent the Order
          </button>
        </div>
      )}
    </>
  );
}

export default ShipmentDetails;
