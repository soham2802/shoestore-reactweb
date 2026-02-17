import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import axios from "axios";

function Checkout() {
  const location = useLocation();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [billing, setBilling] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pin: "",
  });

  const handleBilling = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const cartItems =
    location.state?.cartItems || JSON.parse(localStorage.getItem("cart")) || [];

  const total =
    location.state?.total ||
    cartItems.reduce((acc, it) => acc + (it.price || 0) * (it.qty || 0), 0);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("ORDER INVOICE", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["CUSTOMER DETAILS"]],
      body: [
        [`Name: ${billing.first} ${billing.last}`],
        [`Email: ${billing.email}`],
        [`Phone: ${billing.phone}`],
        [`Address: ${billing.address}, ${billing.city}, ${billing.pin}`],
      ],
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Product", "Qty", "Price", "Subtotal"]],
      body: cartItems.map((item) => [
        item.text,
        item.qty,
        `$${item.price}`,
        `$${(item.price * item.qty).toFixed(2)}`,
      ]),
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Total Paid"]],
      body: [[`$${(total + 50).toFixed(2)}`]],
    });

    doc.save("invoice.pdf");
  };

  const handleOrder = async () => {
    if (!cartItems.length) {
      alert("Your cart is empty.");
      return;
    }

    for (let key in billing) {
      if (!billing[key].trim()) {
        alert("Please fill all billing details.");
        return;
      }
    }

    try {
      const token = localStorage.getItem("accessToken");
      console.log("ACCESS TOKEN:", localStorage.getItem("accessToken"));

      await axios.post(
        "http://localhost:5000/api/orders",
        {
          customer: billing,
          items: cartItems.map((item) => ({
            name: item.text,
            price: item.price,
            qty: item.qty,
            image: item.img,
          })),
          subtotal: total,
          total: total + 50,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      generatePDF();
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("cartUpdated"));
      setOrderPlaced(true);
    } catch (error) {
      console.error(
        "FRONTEND ORDER ERROR:",
        error.response?.data || error.message,
      );
      alert(
        error.response?.data?.message || "Failed to place order. Try again.",
      );
    }
  };

  return (
    <>
      <Navbar />

      {orderPlaced ? (
        <section className="py-5 text-center">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">
              Order Placed Successfully 🎉
            </h2>
            <p>Your invoice has been downloaded.</p>
            <h4>Total Paid: ${(total + 50).toFixed(2)}</h4>
            <button
              className="btn btn-dark mt-3"
              onClick={() => (window.location.href = "/")}
            >
              Continue Shopping
            </button>
          </div>
        </section>
      ) : (
        <section className="py-5 checkout-bg">
          <div className="container">
            <div className="row">
              {/* Billing Form */}
              <div className="col-lg-7 mb-4">
                <div className="checkout-card">
                  <h4 className="mb-4 fw-bold">Billing Details</h4>

                  <form>
                    <div className="row">
                      {[
                        "first",
                        "last",
                        "email",
                        "phone",
                        "address",
                        "city",
                        "pin",
                      ].map((field) => (
                        <div
                          key={field}
                          className={`mb-3 ${
                            field === "address" ? "col-12" : "col-md-6"
                          }`}
                        >
                          <label className="form-label">
                            {field === "first"
                              ? "First Name"
                              : field === "last"
                                ? "Last Name"
                                : field === "pin"
                                  ? "Pin Code"
                                  : field.charAt(0).toUpperCase() +
                                    field.slice(1)}
                          </label>

                          {field === "phone" ? (
                            <input
                              name={field}
                              type="tel"
                              maxLength={10}
                              className="form-control custom-input"
                              placeholder="Enter phone"
                              value={billing.phone}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                setBilling({ ...billing, phone: value });
                              }}
                            />
                          ) : field === "address" ? (
                            <textarea
                              name={field}
                              rows="2"
                              className="form-control custom-input"
                              placeholder="Street address"
                              onChange={handleBilling}
                            />
                          ) : (
                            <input
                              name={field}
                              type={field === "email" ? "email" : "text"}
                              className="form-control custom-input"
                              placeholder={`Enter ${field}`}
                              onChange={handleBilling}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="checkout-card">
                  <h4 className="mb-4 fw-bold">Your Order</h4>

                  {cartItems.map((item, i) => (
                    <div
                      className="cart-item d-flex align-items-center mb-4"
                      key={i}
                    >
                      <img
                        src={item.img}
                        alt={item.text}
                        className="cart-img"
                        style={{
                          width: 80,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />

                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1">{item.text}</h6>
                        <small className="text-muted">Qty: {item.qty}</small>
                      </div>

                      <span className="fw-bold">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <hr />

                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <strong>$50</strong>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-4 fs-5">
                    <strong>Total</strong>
                    <strong>${(total + 50).toFixed(2)}</strong>
                  </div>

                  <button
                    className="btn btn-dark w-100 py-2 rounded-pill place-btn"
                    onClick={handleOrder}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

export default Checkout;
