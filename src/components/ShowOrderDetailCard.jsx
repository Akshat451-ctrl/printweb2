import React, { useEffect, useState } from 'react';

const ShowOrderDetailCard = ({ order, onClose }) => {
  // Map backend statuses to user-friendly names
  const orderStatusSteps = [
    { key: 'placed', label: 'Order Placed' },
    { key: 'orderAcceptedByVendor', label: 'Accepted by Vendor' },
    { key: 'orderPrinted', label: 'Printed' },
    { key: 'delivered', label: 'Delivered' },
  ];

  const [progress, setProgress] = useState(0); // State to handle animated progress

  // Determine the progress percentage based on the current order status
  const calculateProgressPercentage = () => {
    const currentIndex = orderStatusSteps.findIndex(
      (status) => status.key.toLowerCase() === order.orderStatus.toLowerCase()
    );
    return ((currentIndex + 1) / orderStatusSteps.length) * 100;
  };

  useEffect(() => {
    const progressPercentage = calculateProgressPercentage();
    setTimeout(() => setProgress(progressPercentage), 100); // Add a slight delay for animation
  }, [order]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <p className="text-sm text-gray-600">
          <strong>Order ID:</strong> {order.orderId}
        </p>
        <p className="text-sm text-gray-600">
          <strong>PDF File:</strong> {order.pdfFile}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Print Type:</strong> {order.printType}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Page Count:</strong> {order.pageCount}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Payment Status:</strong> {order.paymentStatus}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>OTP:</strong> {order.otp}
        </p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            {orderStatusSteps.map((step, index) => (
              <span
                key={index}
                className={`${
                  step.key.toLowerCase() === order.orderStatus.toLowerCase()
                    ? 'text-green-600 font-bold'
                    : ''
                }`}
              >
                {step.label}
              </span>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-green-500 rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrderDetailCard;