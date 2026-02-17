import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: it.qty + 1 } : it
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((it) =>
          it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
        )
        .filter((it) => it.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const formatPrice = (n) => `$${(n || 0).toFixed(2)}`;

  const total = cartItems.reduce(
    (acc, it) => acc + (it.price || 0) * (it.qty || 0),
    0
  );

  const handleViewCart = () => {
    onClose();
    navigate("/viewcart", { state: { cartItems, total } });
  };

  const handleCheckout = () => {
    onClose();
    navigate("/checkout", { state: { cartItems, total } });
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div
        className="cart-drawer shadow"
        style={{
          width: "420px",
          right: 0,
          top: 0,
          bottom: 0,
          position: "fixed",
          background: "#fff",
          zIndex: 2000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="cart-header p-3 d-flex justify-content-between align-items-center"
          style={{ borderBottom: "1px solid #eee" }}
        >
          <strong>Shopping Cart</strong>

          <button
            className="btn btn-sm"
            onClick={onClose}
            style={{ background: "transparent", border: "none", fontSize: 20 }}
          >
            ✕
          </button>
        </div>

        <div
          className="cart-body p-3"
          style={{
            overflowY: "auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {cartItems.length === 0 ? (
            <p className="text-center text-muted">No items in cart.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between pb-3"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <img
                  src={item.img}
                  alt={item.text}
                  width="70"
                  height="70"
                  style={{
                    objectFit: "cover",
                    borderRadius: 8,
                    marginRight: "15px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div className="fw-bold mb-2">{item.text}</div>

                  <div className="d-flex align-items-center" style={{ gap: "8px" }}>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <div
                      style={{
                        width: "40px",
                        textAlign: "center",
                        border: "1px solid #ddd",
                        padding: "5px 0",
                        borderRadius: "4px",
                      }}
                    >
                      {item.qty}
                    </div>

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-end" style={{ minWidth: "90px", marginLeft: "10px" }}>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#999",
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>

                  <div className="fw-bold mt-2">
                    {formatPrice(item.price * item.qty)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer p-3" style={{ borderTop: "1px solid #eee" }}>
          <div className="d-flex justify-content-between mb-3">
            <strong>Subtotal</strong>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button
            className="btn btn-outline-dark w-100 mb-2"
            onClick={handleViewCart}
          >
            View Cart
          </button>

          <button
            className="btn btn-dark w-100"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
