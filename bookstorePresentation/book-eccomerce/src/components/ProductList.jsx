import ProductCard from "./ProductCard";

function ProductList({ books, addToCart }) {
  return (
    <div>
      <ul className="product-list-container">
        {books.map((book) => {
          return (
            <ProductCard key={book.id} book={book} addToCart={addToCart} />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
