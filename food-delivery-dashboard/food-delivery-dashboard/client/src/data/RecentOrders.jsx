import React from "react";
import "../styles/RecentOrders.css";


const orders = [
  {
    id: "#10234",
    items: "Basmati ricie",
    time: "Today, 12:30 PM",
    amount: "₹520",
    status: "Delivered",
  },
  {
    id: "#10233",
    items: "Cheese",
    time: "Today, 11:45 AM",
    amount: "₹270",
    status: "In Process",
  },
  {
    id: "#10232",
    items: "grains",
    time: "Yesterday, 7:15 PM",
    amount: "₹360",
    status: "Cancelled",
  },
];

export default function RecentOrders() {
  return (
    <div className="orders-container">
      <h2 className="orders-title">Recent Orders</h2>
      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-details">
              <div className="order-id">{order.id}</div>
              <div className="order-time">{order.time}</div>
              <div className="order-items">{order.items}</div>
            </div>
            <div className="order-meta">
              <div className="order-amount">{order.amount}</div>
              <div className={`order-status ${order.status.replace(" ", "").toLowerCase()}`}>
                {order.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
