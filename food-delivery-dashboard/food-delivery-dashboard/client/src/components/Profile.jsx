import { useState } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("store");

  const [storeInfo, setStoreInfo] = useState({
    name: "Krishna Kirana Store",
    category: "Grocery",
    address: "123, Main Street, Powai, Mumbai - 400076",
    phone: "9876543210",
    email: "krishna@example.com",
    gst: "27AADCB2230M1ZT",
    description: "We offer a wide range of grocery items with quick delivery.",
  });

  const [notificationPrefs, setNotificationPrefs] = useState({
    newOrderAlerts: true,
    lowStockAlerts: true,
    paymentNotifications: true,
    dailySummary: true,
  });

  const [paymentSettings, setPaymentSettings] = useState({
    bankName: "HDFC Bank",
    accountNumber: "XXXX XXXX XXXX 4321",
    ifsc: "HDFC0001234",
    accountType: "Current",
    upiId: "krishna@okhdfc",
  });

  const [accountSettings, setAccountSettings] = useState({
    fullName: "Rajesh Kumar",
    username: "rajesh_kirana",
    currentPassword: "••••••••",
    newPassword: "",
    confirmPassword: "",
  });

  const handleStoreInfoChange = (e) => {
    setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value });
  };

  const handleNotificationPrefsChange = (e) => {
    setNotificationPrefs({
      ...notificationPrefs,
      [e.target.name]: e.target.checked,
    });
  };

  const handlePaymentSettingsChange = (e) => {
    setPaymentSettings({ ...paymentSettings, [e.target.name]: e.target.value });
  };

  const handleAccountSettingsChange = (e) => {
    setAccountSettings({ ...accountSettings, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="tab-buttons">
        <button
          className={activeTab === "store" ? "active" : ""}
          onClick={() => setActiveTab("store")}
        >
          Store Information
        </button>
        <button
          className={activeTab === "notifications" ? "active" : ""}
          onClick={() => setActiveTab("notifications")}
        >
          Notification Preferences
        </button>
        <button
          className={activeTab === "payment" ? "active" : ""}
          onClick={() => setActiveTab("payment")}
        >
          Payment Settings
        </button>
        <button
          className={activeTab === "account" ? "active" : ""}
          onClick={() => setActiveTab("account")}
        >
          Account Settings
        </button>
      </div>

      {/* Store Information */}
      {activeTab === "store" && (
        <form className="profile-form">
          <input
            name="name"
            value={storeInfo.name}
            onChange={handleStoreInfoChange}
            placeholder="Store Name"
          />
          <input
            name="category"
            value={storeInfo.category}
            onChange={handleStoreInfoChange}
            placeholder="Store Category"
          />
          <input
            name="address"
            value={storeInfo.address}
            onChange={handleStoreInfoChange}
            placeholder="Store Address"
          />
          <input
            name="phone"
            value={storeInfo.phone}
            onChange={handleStoreInfoChange}
            placeholder="Phone Number"
          />
          <input
            name="email"
            value={storeInfo.email}
            onChange={handleStoreInfoChange}
            placeholder="Email"
          />
          <input
            name="gst"
            value={storeInfo.gst}
            onChange={handleStoreInfoChange}
            placeholder="GST Number"
          />
          <textarea
            name="description"
            value={storeInfo.description}
            onChange={handleStoreInfoChange}
            placeholder="Store Description"
          />
        </form>
      )}

      {/* Notification Preferences */}
      {activeTab === "notifications" && (
        <form className="profile-form">
          <div className="toggle-switch">
            <label>Get notified when you receive a new order</label>
            <label className="switch">
              <input
                type="checkbox"
                name="newOrderAlerts"
                checked={notificationPrefs.newOrderAlerts}
                onChange={handleNotificationPrefsChange}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="toggle-switch">
            <label>Get notified when inventory items are running low</label>
            <label className="switch">
              <input
                type="checkbox"
                name="lowStockAlerts"
                checked={notificationPrefs.lowStockAlerts}
                onChange={handleNotificationPrefsChange}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="toggle-switch">
            <label>Get notified about payment status updates</label>
            <label className="switch">
              <input
                type="checkbox"
                name="paymentNotifications"
                checked={notificationPrefs.paymentNotifications}
                onChange={handleNotificationPrefsChange}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="toggle-switch">
            <label>Receive a daily summary of your store performance</label>
            <label className="switch">
              <input
                type="checkbox"
                name="dailySummary"
                checked={notificationPrefs.dailySummary}
                onChange={handleNotificationPrefsChange}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </form>
      )}
      {activeTab === "payment" && (
        <form className="profile-form">
          <input
            name="bankName"
            value={paymentSettings.bankName}
            onChange={handlePaymentSettingsChange}
            placeholder="Bank Name"
          />
          <input
            name="accountNumber"
            value={paymentSettings.accountNumber}
            onChange={handlePaymentSettingsChange}
            placeholder="Account Number"
          />
          <input
            name="ifsc"
            value={paymentSettings.ifsc}
            onChange={handlePaymentSettingsChange}
            placeholder="IFSC Code"
          />
          <input
            name="accountType"
            value={paymentSettings.accountType}
            onChange={handlePaymentSettingsChange}
            placeholder="Account Type"
          />
          <input
            name="upiId"
            value={paymentSettings.upiId}
            onChange={handlePaymentSettingsChange}
            placeholder="UPI ID"
          />
        </form>
      )}

      {/* Account Settings */}
      {activeTab === "account" && (
        <form className="profile-form">
          <input
            name="fullName"
            value={accountSettings.fullName}
            onChange={handleAccountSettingsChange}
            placeholder="Full Name"
          />
          <input
            name="username"
            value={accountSettings.username}
            onChange={handleAccountSettingsChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="currentPassword"
            value={accountSettings.currentPassword}
            onChange={handleAccountSettingsChange}
            placeholder="Current Password"
          />
          <input
            type="password"
            name="newPassword"
            value={accountSettings.newPassword}
            onChange={handleAccountSettingsChange}
            placeholder="New Password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={accountSettings.confirmPassword}
            onChange={handleAccountSettingsChange}
            placeholder="Confirm Password"
          />
        </form>
      )}

      <button className="save-button" onClick={saveChanges}>
        Save Changes
      </button>
    </div>
  );
}
