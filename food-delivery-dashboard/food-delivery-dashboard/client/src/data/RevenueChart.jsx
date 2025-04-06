import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/RevenueChart.css";

const monthlyData = [
  { month: "Jan", revenue: 24000 },
  { month: "Feb", revenue: 22100 },
  { month: "Mar", revenue: 27800 },
  { month: "Apr", revenue: 18900 },
  { month: "May", revenue: 23900 },
  { month: "Jun", revenue: 34900 },
  { month: "Jul", revenue: 29900 },
  { month: "Aug", revenue: 31900 },
  { month: "Sep", revenue: 37000 },
  { month: "Oct", revenue: 38800 },
  { month: "Nov", revenue: 40200 },
  { month: "Dec", revenue: 42100 },
];

const weeklyData = [
  { week: "Week 1", revenue: 5200 },
  { week: "Week 2", revenue: 4800 },
  { week: "Week 3", revenue: 5300 },
  { week: "Week 4", revenue: 6100 },
];

const RevenueChart = () => {
  const [view, setView] = useState("monthly");

  const handleChange = (e) => {
    setView(e.target.value);
  };

  const data = view === "monthly" ? monthlyData : weeklyData;

  return (
    <div className="revenue-chart-container">
      <div className="chart-header">
        <h2>Revenue Overview</h2>
        <select onChange={handleChange} value={view} className="chart-select">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={view === "monthly" ? "month" : "week"} />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Legend />
          <Bar
            dataKey="revenue"
            fill="#8884d8"
            name="Revenue (INR)"
            barSize={45}
            radius={[3, 3, 0, 0]} // Rounded top corners
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
