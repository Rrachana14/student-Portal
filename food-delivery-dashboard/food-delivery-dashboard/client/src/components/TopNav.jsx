import React, { useState } from "react";
import "../styles/TopNav.css";

const TopNav = ({ title }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    "New order received from Rahul.",
    "Inventory low on Rice - only 10kg left!",
    "New customer feedback submitted.",
  ]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleView = (note) => {
    setSelectedNotification(note);
  };

  const handleDelete = (index) => {
    const updated = [...notifications];
    updated.splice(index, 1);
    setNotifications(updated);
  };

  return (
    <>
      <div className="top-nav">
        <h1 className="page-title"> {title}</h1>

        <div className="top-actions">
          <div
            className="notification-icon"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span className="badge">{notifications.length}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bell-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
              />
            </svg>

            {showNotifications && (
              <div className="notification-dropdown">
                {notifications.length === 0 ? (
                  <p className="empty-note">No new notifications</p>
                ) : (
                  notifications.map((note, idx) => (
                    <div key={idx} className="notification-item">
                      <p>{note}</p>
                      <div className="notification-actions">
                        <button onClick={() => handleView(note)}>👁 View</button>
                        <button onClick={() => handleDelete(idx)}>🗑 Delete</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="profile-info">
            <img
              src="data:image/jpeg;base64,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"
              alt="Vendor"
              className="profile-pic"
            />
            <span className="vendor-name">Rajesh Kumar</span>
          </div>
        </div>
      </div>

      {selectedNotification && (
        <div className="popup-overlay" onClick={() => setSelectedNotification(null)}>
          <div
            className="popup-modal"
            onClick={(e) => e.stopPropagation()} // prevent closing on inside click
          >
            <h2>📨 Notification</h2>
            <p>{selectedNotification}</p>
            <button className="close-btn" onClick={() => setSelectedNotification(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
