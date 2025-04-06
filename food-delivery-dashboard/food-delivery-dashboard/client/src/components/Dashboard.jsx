import {
  ShoppingCart,
  Users,
  Boxes,
  IndianRupee,
  Truck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import "../styles/Dashboard.css";
import RevenueChart from "../data/RevenueChart.jsx";
import TopItems from "../data/TopItems.jsx";
import RecentOrders from "../data/RecentOrders.jsx";
import LowStockItems from "../data/LowStockItems.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        {/* Orders */}
        <div className="card">
          <div className="card-header">
            <div className="icon orders-icon">
              <ShoppingCart size={24} />
            </div>
            <div className="trend up">
              <TrendingUp size={16} />
              <span>12%</span>
            </div>
          </div>
          <h3>Orders</h3>
          <p>1,204</p>
        </div>

        {/* Customers */}
        <div className="card">
          <div className="card-header">
            <div className="icon customers-icon">
              <Users size={24} />
            </div>
            <div className="trend down">
              <TrendingDown size={16} />
              <span>5%</span>
            </div>
          </div>
          <h3>Customers</h3>
          <p>832</p>
        </div>

        {/* Inventory */}
        <div className="card">
          <div className="card-header">
            <div className="icon inventory-icon">
              <Boxes size={24} />
            </div>
            <div className="trend up">
              <TrendingUp size={16} />
              <span>8%</span>
            </div>
          </div>
          <h3>Inventory</h3>
          <p>120 Items</p>
        </div>

        {/* Revenue */}
        <div className="card">
          <div className="card-header">
            <div className="icon revenue-icon">
              <IndianRupee size={24} />
            </div>
            <div className="trend up">
              <TrendingUp size={16} />
              <span>18%</span>
            </div>
          </div>
          <h3>Revenue</h3>
          <p>₹2,45,000</p>
        </div>

        {/* Deliveries */}
        <div className="card">
          <div className="card-header">
            <div className="icon delivery-icon">
              <Truck size={24} />
            </div>
            <div className="trend up">
              <TrendingUp size={16} />
              <span>10%</span>
            </div>
          </div>
          <h3>Total Deliveries</h3>
          <p>980</p>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard-cards">{/* your existing cards */}</div>
          <div className="dashboard-chart">
            <RevenueChart />
            <TopItems />
          </div>
          <div className="last">
            <RecentOrders />
            <LowStockItems/>
          </div>
      </div>
      
      

    </div>
  );
};

export default Dashboard;
