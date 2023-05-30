import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:7000/api/carts/find/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setCartData(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-page">
      <h3>Cart</h3>
      {cartData.length === 0 ? (
        <p>No products in the cart.</p>
      ) : (
        <ul>
          {cartData.map((product) => (
            <li key={product._id}>
              <p>Quantity: {product.quantity}</p>
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
