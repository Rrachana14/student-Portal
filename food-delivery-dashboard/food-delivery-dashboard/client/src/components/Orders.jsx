import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderTabsStyles.css";

const initialOrders = [
  {
    id: 1,
    item: "Bread",
    customer: "Amit",
    status: "pending",
    date: "2025-04-05T14:45",
  },
  {
    id: 2,
    item: "cumin",
    customer: "Riya",
    status: "accepted",
    date: "2025-04-04T11:00",
  },
  {
    id: 3,
    item: "Wheat flour",
    customer: "Raj",
    status: "rejected",
    date: "2025-04-02T10:30",
  },
  {
    id: 4,
    item: "Pizza",
    customer: "Neha",
    status: "delivered",
    date: "2025-04-01T09:15",
  },
  {
    id: 5,
    item: "Fish",
    customer: "Arjun",
    status: "pending",
    date: "2025-04-05T15:20",
  },
  {
    id: 6,
    item: "Pasta",
    customer: "Kiran",
    status: "pending",
    date: "2025-04-05T16:00",
  },
  {
    id: 7,
    item: "Chocolates",
    customer: "Meera",
    status: "delivered",
    date: "2025-04-01T20:00",
  },
  {
    id: 8,
    item: "Cold Coffee",
    customer: "Sunny",
    status: "pending",
    date: "2025-04-05T13:30",
  },
  {
    id: 9,
    item: "Samosa",
    customer: "Deepak",
    status: "accepted",
    date: "2025-04-04T10:00",
  },
  {
    id: 10,
    item: "cooking oil",
    customer: "Preeti",
    status: "rejected",
    date: "2025-04-03T15:15",
  },
  {
    id: 11,
    item: "Milk",
    customer: "Harsh",
    status: "accepted",
    date: "2025-04-04T18:00",
  },
  {
    id: 12,
    item: "Pav Bhaji",
    customer: "Sneha",
    status: "pending",
    date: "2025-04-05T17:45",
  },
  {
    id: 13,
    item: "Masala Dosa",
    customer: "Rakesh",
    status: "rejected",
    date: "2025-04-03T12:30",
  },
  {
    id: 14,
    item: "Fried Rice",
    customer: "Pooja",
    status: "pending",
    date: "2025-04-05T10:45",
  },
  {
    id: 15,
    item: "Tandoori Chicken",
    customer: "Dev",
    status: "accepted",
    date: "2025-04-04T14:15",
  },
  {
    id: 16,
    item: "Idli Sambhar",
    customer: "Tanvi",
    status: "delivered",
    date: "2025-04-02T08:45",
  },
  {
    id: 17,
    item: "Momos",
    customer: "Rahul",
    status: "pending",
    date: "2025-04-05T12:10",
  },
  {
    id: 18,
    item: "Rasgulla",
    customer: "Geeta",
    status: "rejected",
    date: "2025-04-03T19:00",
  },
  {
    id: 19,
    item: "Paneer ",
    customer: "Lakshya",
    status: "accepted",
    date: "2025-04-04T19:00",
  },
  {
    id: 20,
    item: "Tea",
    customer: "Jaya",
    status: "pending",
    date: "2025-04-05T09:00",
  },
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState("pending");
  const [orders, setOrders] = useState(initialOrders);
  const navigate = useNavigate();

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleViewDetails = (id) => {
    const selectedOrder = orders.find((order) => order.id === id);
    navigate(`/order/${id}`, { state: { order: selectedOrder } });
  };

  const getFilteredOrders = () =>
    orders
      .filter((order) => order.status === activeTab)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

  const tabs = ["pending", "accepted", "rejected", "delivered"];

  return (
    <div className="orders-tab">
      <div className="sub-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`sub-tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Orders
            <span className="count">
              ({orders.filter((o) => o.status === tab).length})
            </span>
          </button>
        ))}
      </div>

      {getFilteredOrders().length > 0 ? (
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Customer</th>
                <th>Date & Time</th>
                {activeTab !== "pending" && <th>Status</th>}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredOrders().map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td className="item-col">
                    <img
                      src={`/images/placeholder.png`}
                      alt={order.item}
                      className="item-img"
                    />
                    {order.item}
                  </td>
                  <td>{order.customer}</td>
                  <td>{new Date(order.date).toLocaleString()}</td>
                  {activeTab !== "pending" && (
                    <td>
                      <span className={`status-badge ${activeTab}`}>
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                      </span>
                    </td>
                  )}
                  <td className="actions-cell">
                    {activeTab === "pending" && (
                      <>
                        <button
                          className="btn accept-btn"
                          onClick={() =>
                            updateOrderStatus(order.id, "accepted")
                          }
                        >
                          Accept
                        </button>
                        <button
                          className="btn reject-btn"
                          onClick={() =>
                            updateOrderStatus(order.id, "rejected")
                          }
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      className="btn details-btn"
                      onClick={() => handleViewDetails(order.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-orders">No {activeTab} orders.</p>
      )}
    </div>
  );
}
