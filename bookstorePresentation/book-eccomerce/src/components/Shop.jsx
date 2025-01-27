import ProductList from "./ProductList";
function Shop({ books, addToCart }) {
  return (
    <div style={{ maxWidth: "fit-content", margin: "auto" }}>
      <h1 style={{ fontSize: "24px", padding: "15px 0" }}>
        Find all the books you are searching
      </h1>
      <ProductList books={books} addToCart={addToCart} />
    </div>
  );
}

export default Shop;
