import React, { useEffect, useState } from "react";
import api from "../../api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = () => {
      api
        .get("/orders")
        .then((res) => setOrders(Array.isArray(res.data) ? res.data : []))
        .catch(console.error)
        .finally(() => setLoading(false));
    };

    fetchOrders();

    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/orders/status/${id}`, {
        orderStatus: status,
      });

      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, orderStatus: status } : o)),
      );
    } catch (err) {
      console.error(err);
      alert("Status update failed");
    }
  };

  if (loading) return <h4 className="text-center mt-5">Loading Orders...</h4>;

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Admin Orders Dashboard</h2>

      {orders.map((order) => (
        <div key={order._id} className="card shadow-sm border-0 rounded-4 mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-semibold mb-1">
                Order #{order._id.slice(-10)}
              </h6>
              <small className="text-muted">
                {new Date(order.createdAt).toLocaleDateString()}
              </small>

              <div className="mt-2">
                {order.items.map((item, i) => (
                  <div key={i} className="small">
                    {item.name} × {item.qty}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ width: 200 }}>
              <select
                className="form-select form-select-sm"
                value={order.orderStatus}
                onChange={(e) => updateStatus(order._id, e.target.value)}
              >
                <option value="PENDING">PENDING</option>
                <option value="SHIPPED">SHIPPED</option>

                <option value="PLACED">PLACED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>

              <div className="fw-bold mt-2 text-end">₹{order.total}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
