import React, { useEffect, useState } from "react";
import api from "../../api";
import "./MyOrders.css";

const statusSteps = ["PENDING", "SHIPPED", "PLACED"];

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const fetchOrders = () => {
    api
      .get("/orders")
      .then((res) => {
        setOrders(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("ORDER FETCH ERROR:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-warning text-dark";
      case "SHIPPED":
        return "bg-info text-dark";
      case "PLACED":
        return "bg-success";
      case "CANCELLED":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  useEffect(() => {
    fetchOrders();

    const interval = setInterval(() => {
      fetchOrders();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredOrders =
    statusFilter === "ALL"
      ? orders
      : orders.filter((o) => o.orderStatus === statusFilter);

  const cancelOrder = async (id) => {
    try {
      await api.put(`/orders/cancel/${id}`);

      setOrders((prev) =>
        prev.map((o) =>
          o._id === id ? { ...o, orderStatus: "CANCELLED" } : o,
        ),
      );
    } catch (err) {
      console.error(err);
      alert("Cancel failed");
    }
  };

  const renderTimeline = (status) => {
    const currentIndex = statusSteps.indexOf(status);

    return (
      <div className="d-flex justify-content-between mt-3">
        {statusSteps.map((step, index) => (
          <div key={step} className="text-center flex-fill">
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                margin: "0 auto",
                background: index <= currentIndex ? "#000" : "#ccc",
              }}
            />
            <small className="text-muted">{step}</small>
          </div>
        ))}
      </div>
    );
  };

  if (loading)
    return <h4 className="text-center mt-5">Loading your orders...</h4>;

  if (!orders.length)
    return <h4 className="text-center mt-5">No orders yet</h4>;

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-3">My Orders</h2>

      <div className="d-flex gap-2 flex-wrap mb-4">
        {["ALL", "PENDING", "SHIPPED", "PLACED", "CANCELLED"].map((status) => (
          <button
            key={status}
            className={`btn btn-sm ${
              statusFilter === status ? "btn-dark" : "btn-outline-secondary"
            }`}
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {filteredOrders.map((order) => (
        <div key={order._id} className="card border-0 shadow-sm mb-4 rounded-4">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="fw-semibold mb-1">
                  Order #{order._id.slice(-10)}
                </h6>
                <small className="text-muted">
                  {new Date(order.createdAt).toLocaleDateString()}
                </small>
              </div>
              <span
                className={`order-status-badge ${getStatusClass(order.orderStatus)}`}
              >
                {order.orderStatus}
              </span>
            </div>

            {order.orderStatus !== "CANCELLED" &&
              renderTimeline(order.orderStatus)}

            <hr />

            {order.items.map((item, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center py-2"
              >
                <div>
                  <div className="fw-medium">{item.name}</div>
                  <small className="text-muted">Qty: {item.qty}</small>
                </div>

                <div className="fw-semibold">₹{item.price}</div>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0">₹{order.total}</h5>

              {order.orderStatus === "PENDING" && (
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => cancelOrder(order._id)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
