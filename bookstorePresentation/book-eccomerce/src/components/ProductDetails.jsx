import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

/* Impor assets */
import cartIcon from "../assets/cart.svg";
import minusIcon from "../assets/minus.svg";
import plusIcon from "../assets/plusIcon.svg";

function ProductDetails({ books, addToCart }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggle() {
    setIsVisible((prev) => !prev);
  }

  const { id } = useParams(); // Get the product ID from the URL
  const book = books.find((b) => b.id === parseInt(id)); // Find the product by ID

  if (!book) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details-container">
      <Link to="/shop">&lt; Back to Shopping</Link>
      <div className="product-details">
        <img src={book.image} alt={book.title} />

        <div className="details-wraper">
          <div className="tite-container">
            <h1>{book.title}</h1>
            <p>{book.price.toFixed(2)}€</p>
          </div>

          <div className="book-info-container">
            <p>Book Details</p>
            <div className="book-info">
              <div className="info-item">
                <p>Title</p>
                <span>{book.title}</span>
              </div>

              <div className="info-item">
                <p>Publisher</p>
                <span>{book.publisher}</span>
              </div>
              <div className="info-item">
                <p>Language</p>
                <span>{book.language}</span>
              </div>
              <div className="info-item">
                <p>Pages</p>
                <span>{book.pages}</span>
              </div>

              <div className="info-item">
                <p>Product id</p>
                <span>{book.id}</span>
              </div>
            </div>
          </div>

          <div className="book-summary-container">
            <button onClick={handleToggle} className="book-summary-button">
              <h2>Book Sumary</h2>
              {isVisible ? <img src={minusIcon} /> : <img src={plusIcon} />}
            </button>

            <div
              className={`book-description-container   ${
                isVisible ? "show" : "hide"
              }`}
            >
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        </div>

        <button className="add-to-cart-button" onClick={() => addToCart(book)}>
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
