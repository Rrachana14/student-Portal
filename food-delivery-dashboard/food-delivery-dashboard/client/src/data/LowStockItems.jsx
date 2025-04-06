import React from 'react';
import '../styles/LowStockItems.css';

const LowStockItems = () => {
  const items = [
    {
      id: 1,
      name: 'Sugar',
      stock: 4,
      category: 'Sweeteners',
    },
    {
      id: 2,
      name: 'Jaggary',
      stock: 2,
      category: 'Sweeteners',
    },
    {
      id: 3,
      name: 'Salt',
      stock: 1,
      category: 'Spices & Seasonings',
    },
  ];

  return (
    <div className="low-stock-container">
      <h2 className="low-stock-title">Low Stock Items</h2>
      <div className="low-stock-list">
        {items.map((item) => (
          <div key={item.id} className="stock-item-card">
            <div className="stock-item-details">
              <div className="stock-item-name">{item.name}</div>
              <div className="stock-item-category">{item.category}</div>
            </div>
            <div className="stock-level">
              <span className="stock-count">{item.stock} left</span>
              <span className="low-stock-tag">Low</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStockItems;
