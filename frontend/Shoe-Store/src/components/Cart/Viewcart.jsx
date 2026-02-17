import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function Viewcart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const items =
      location.state?.cartItems ||
      JSON.parse(localStorage.getItem("cart")) ||
      [];

    setCartItems(items);
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.qty || 0),
      0
    );
  };

  const goToCheckout = () => {
    navigate("/checkout", {
      state: { cartItems, total: getTotal() },
    });
  };

  return (
    <>
      <Navbar />

      <section className="container py-5 mt-5">
        <h2 className="text-center fw-bold mb-5">View Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <h5>No products in the cart.</h5>
            <Link to="/" className="btn btn-dark mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="text-start">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.img}
                            alt={item.text}
                            width="70"
                            className="rounded me-3"
                            style={{ objectFit: "cover" }}
                          />
                          <span className="fw-semibold">{item.text}</span>
                        </div>
                      </td>

                      <td>${item.price}</td>

                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => decreaseQty(item.id)}
                          >
                            −
                          </button>

                          <span className="mx-3 fs-5">{item.qty}</span>

                          <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="fw-bold">${item.price * item.qty}</td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row justify-content-end mt-5">
              <div className="col-lg-4 col-md-6">
                <div className="border bg-light p-4 rounded">
                  <h5 className="fw-bold mb-3">Cart Total</h5>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>${getTotal()}</span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                    <span>Total</span>
                    <span>${getTotal()}</span>
                  </div>

                  <button
                    className="btn btn-dark w-100 mb-2"
                    onClick={goToCheckout}
                  >
                    Proceed to Checkout
                  </button>

                  <Link to="/" className="btn btn-outline-dark w-100">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Viewcart;
