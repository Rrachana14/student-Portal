import { useParams } from "react-router-dom";
import "../styles/OrderDetails.css";

function OrderDetails() {
  const { id } = useParams();

  const order = {
    orderId: "ORD-1000",
    status: "Out for Delivery",
    placedOn: "9/15/2023, 8:00:00 PM",
    items: [
      { name: "Biryani", quantity: "2 servings", price: "₹150", total: "₹300" },
      { name: "Butter Chicken", quantity: "1 serving", price: "₹200", total: "₹200" },
      { name: "Garlic Naan", quantity: "2 pieces", price: "₹30", total: "₹60" },
      { name: "Mango Lassi", quantity: "2 glasses", price: "₹50", total: "₹100" },
    ],
    subtotal: "₹660",
    deliveryFee: "₹40",
    discount: "-₹50",
    total: "₹650",
    customer: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "9876543210",
      address: "123, Main Street, City",
    },
    tracking: {
      trackingNumber: "TRACK-1234",
      status: "Out for Delivery",
      estimatedDelivery: "9/15/2023, 9:30 PM",
    },
    trackingSteps: [
      { status: "Order Placed", time: "9/15/2023, 8:00 PM" },
      { status: "Preparing", time: "9/15/2023, 8:30 PM" },
      { status: "Out for Delivery", time: "9/15/2023, 9:00 PM" },
      { status: "Delivered", time: "9/15/2023, 9:30 PM" },
    ],
  };

  const getStageClass = (index, currentStepIndex) => {
    if (index < currentStepIndex) return "completed";
    if (index === currentStepIndex) return "active";
    return "";
  };

  return (
    <div className="order-details-layout">
      <div className="order-summary-customer-summary">
        <div className="purchase-summary">
          <h3>Purchase Summary</h3>
          <table className="order-items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="order-totals">
            <div className="totals-row">
              <span>Subtotal</span>
              <span>{order.subtotal}</span>
            </div>
            <div className="totals-row">
              <span>Delivery Fee</span>
              <span>{order.deliveryFee}</span>
            </div>
            <div className="totals-row">
              <span>Discount</span>
              <span>{order.discount}</span>
            </div>
            <div className="totals-row total">
              <span>Total</span>
              <span>{order.total}</span>
            </div>
          </div>
        </div>

        <div className="customer-summary">
          <h3>Customer Summary</h3>
          <div>
            <strong>Full Name:</strong> <span>{order.customer.fullName}</span>
          </div>
          <div>
            <strong>Email:</strong> <span>{order.customer.email}</span>
          </div>
          <div>
            <strong>Phone:</strong> <span>{order.customer.phone}</span>
          </div>
          <div>
            <strong>Delivery Address:</strong> <span>{order.customer.address}</span>
          </div>
        </div>
      </div>

      <div className="order-tracking">
        <h3>Order Tracking</h3>
        <div className="order-info">
          <div>
            <strong>Tracking Number:</strong>
            <span>{order.tracking.trackingNumber}</span>
          </div>
          <div>
            <strong>Status:</strong>
            <span>{order.tracking.status}</span>
          </div>
          <div>
            <strong>Estimated Delivery:</strong>
            <span>{order.tracking.estimatedDelivery}</span>
          </div>
        </div>

        {/* Tracking Stages with lines */}
        <div className="tracking-stages">
          {order.trackingSteps.map((step, index) => (
            <div key={index} className={`tracking-stage ${getStageClass(index, 2)}`}>
              <div className="stage-circle">
                {index + 1}
              </div>
              <div className="stage-label">{step.status}</div>
              {/* Show time for completed stages */}
              {index <= 2 && (
                <div className="stage-time">
                  <span>{step.time}</span>
                </div>
              )}
              {index < order.trackingSteps.length - 1 && <div className="tracking-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
