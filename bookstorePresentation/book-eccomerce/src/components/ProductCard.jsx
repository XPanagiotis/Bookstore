import cartIcon from "../assets/cart.svg";

import { Link } from "react-router-dom";
function ProductCard({ book, addToCart }) {
  return (
    <>
      <li className="product-card">
        <Link to={`/product/${book.id}`}>
          <img src={book.image} alt="" className="card-image" />
        </Link>
        <h2>{book.title}</h2>
        <p>
          <strong>Author: </strong>
          {book.author}
        </p>
        <div className="empty-div"></div>
        <span className="price">{book.price}€</span>

        <button className="add-to-cart-button" onClick={() => addToCart(book)}>
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </li>
    </>
  );
}

export default ProductCard;
