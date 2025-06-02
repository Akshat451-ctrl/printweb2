import React, { useEffect, useState } from 'react';
import { getOrdersByUserId } from '../../services/orderService';
import ShowOrderDetailCard from '../../components/ShowOrderDetailCard';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to track the selected order

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrdersByUserId(); // Fetch orders using the API
        const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort orders by date
        setOrders(sortedOrders);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">My Orders</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : orders.length === 0 ? (
          <div className="text-center text-gray-500">No orders found.</div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedOrder(order)} // Set the selected order on click
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Order ID: {order.orderId}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.orderStatus === 'delivered'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.orderStatus === 'delivered' ? 'Delivered' : 'In Progress'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Order Date:</strong> {formatDate(order.createdAt)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Show the detail card for the selected order */}
      {selectedOrder && (
        <ShowOrderDetailCard
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)} // Close the detail card
        />
      )}
    </div>
  );
};

export default Order;
