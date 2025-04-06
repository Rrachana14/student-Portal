// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   ShoppingCart,
//   Users,
//   BarChart3,
//   Boxes,
//   Settings,
//   User,
//   X,
//   Menu,
// } from "lucide-react"; // Single import for all icons

// import "./App.css";
// import TopNav from "./components/TopNav";
// import Dashboard from "./components/Dashboard";
// import Orders from "./components/Orders";
// import Customers from "./components/Customers";
// import Analytics from "./components/Analytics";
// import Inventory from "./components/Inventory";
// import SettingsPage from "./components/Settings";
// import Profile from "./components/Profile";
// import OrderDetails from "./data/orderDetails";

// const tabs = [
//   { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
//   { name: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
//   { name: "Customers", icon: <Users size={20} />, path: "/customers" },
//   { name: "Analytics", icon: <BarChart3 size={20} />, path: "/analytics" },
//   { name: "Inventory", icon: <Boxes size={20} />, path: "/inventory" },
//   { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
//   { name: "Profile", icon: <User size={20} />, path: "/profile" },
// ];

// function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//       {/* Mobile menu icon */}
//       <div
//         className={`mobile-menu-btn ${isSidebarOpen ? "shifted" : ""}`}
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//       </div>

//       <h2 className="logo">KiranaLink .</h2>
//       <nav className="nav">
//         {tabs.map((tab) => (
//           <button
//             key={tab.name}
//             onClick={() => {
//               navigate(tab.path);
//               setIsSidebarOpen(false); // close on mobile
//             }}
//             className={`tab-button ${location.pathname === tab.path ? "active" : ""}`}
//           >
//             {tab.icon}
//             <span>{tab.name}</span>
//           </button>
//         ))}
//       </nav>
//       <footer className="footer">© 2025 KiranaLink Admin</footer>
//     </aside>
//   );
// }

// function MainContent() {
//   const location = useLocation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedOrderId, setSelectedOrderId] = useState(null);

//   const getTitle = () => {
//     const match = tabs.find((tab) => tab.path === location.pathname);
//     return match?.name || "Dashboard";
//   };

//   return (
//     <>
//       <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//       <main className="main-content">
//         <TopNav title={getTitle()} onMenuClick={() => setIsSidebarOpen(true)} />
//         <div className="page-content">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route
//   path="/orders"
//   element={
//     selectedOrderId ? (
//       <OrderDetails
//         orderId={selectedOrderId}
//         onBack={() => setSelectedOrderId(null)}
//       />
//     ) : (
//       <Orders onDetails={(id) => setSelectedOrderId(id)} />
//     )
//   }
// />

//             <Route path="/customers" element={<Customers />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/inventory" element={<Inventory />} />
//             <Route path="/settings" element={<SettingsPage />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//         </div>
//       </main>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <MainContent />
//       </div>
//     </Router>
//   );
// }

// function App() {
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="app-container">
//   {/* Sidebar and Mobile Menu Icon */}
//   <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//     {/* Mobile menu icon (inside sidebar) */}
//     <div
//       className={`mobile-menu-btn ${isSidebarOpen ? "shifted" : ""}`}
//       onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//     >
//       {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//     </div>

//     <h2 className="logo">KiranaLink .</h2>
//     <nav className="nav">
//       {tabs.map((tab) => (
//         <button
//           key={tab.name}
//           onClick={() => {
//             setActiveTab(tab.name);
//             setIsSidebarOpen(false); // close on mobile
//           }}
//           className={`tab-button ${activeTab === tab.name ? "active" : ""}`}
//         >
//           {tab.icon}
//           <span>{tab.name}</span>
//         </button>
//       ))}
//     </nav>
//     <footer className="footer">© 2025 KiranaLink Admin</footer>
//   </aside>

//   {/* Main Content */}
//   <main className="main-content">
//         {/* ✅ Top Navigation Bar */}
//         <TopNav title={activeTab} />

//         {/* Page Content */}
//         <div className="page-content">
//           {activeTab === "Dashboard" && <Dashboard />}
//           {activeTab === "Orders" && <Orders />}
//           {activeTab === "Customers" && <Customers />}
//           {activeTab === "Analytics" && <Analytics />}
//           {activeTab === "Inventory" && <Inventory />}
//           {activeTab === "Settings" && <Settings />}
//           {activeTab === "Profile" && <Profile />}
//         </div>
//       </main>
// </div>

//   );
// }

// export default App;

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart3,
  Boxes,
  Settings,
  User,
  X,
  Menu,
} from "lucide-react";

import "./App.css";
import TopNav from "./components/TopNav";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import Analytics from "./components/Analytics";
import Inventory from "./components/Inventory";
import SettingsPage from "./components/Settings";
import Profile from "./components/Profile";
import OrderDetails from "./data/OrderDetails";

const tabs = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
  { name: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
  { name: "Customers", icon: <Users size={20} />, path: "/customers" },
  { name: "Analytics", icon: <BarChart3 size={20} />, path: "/analytics" },
  { name: "Inventory", icon: <Boxes size={20} />, path: "/inventory" },
  { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  { name: "Profile", icon: <User size={20} />, path: "/profile" },
];

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div
        className={`mobile-menu-btn ${isSidebarOpen ? "shifted" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </div>

      <h2 className="logo">KiranaLink .</h2>
      <nav className="nav">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => {
              navigate(tab.path);
              setIsSidebarOpen(false); // close on mobile
            }}
            className={`tab-button ${
              // Active check for both the exact match and any /order/:id route
              location.pathname === tab.path ||
              (tab.path === "/orders" && location.pathname.startsWith("/order"))
                ? "active"
                : ""
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
      <footer className="footer">© 2025 KiranaLink Admin</footer>
    </aside>
  );
}

function MainContent() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null); 

  const getTitle = () => {
    const match = tabs.find((tab) => tab.path === location.pathname);
    if (!match && location.pathname.startsWith("/order")) {
      return "Orders";  // Set "Orders" as the title if on any /order/:id route
    }
    return match?.name || "Dashboard";
  };

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="main-content">
        <TopNav title={getTitle()} onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetails />} />

            <Route path="/customers" element={<Customers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <MainContent />
      </div>
    </Router>
  );
}
