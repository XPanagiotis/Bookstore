/*Calculate the total products and the total value of the cart*/
function countTotalOrder(cart) {
  let totalQuantity = 0;
  let totalPrice = 0;

  for (const item of cart) {
    totalQuantity += item.quantity;
    totalPrice = totalPrice + item.price * item.quantity;
  }

  return { totalQuantity, totalPrice };
}

export default countTotalOrder;
