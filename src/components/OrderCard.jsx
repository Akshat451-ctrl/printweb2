import React, { useState } from 'react';
import { orderAccept } from '../services/orderService';

const OrderCard = ({ order, onAccept }) => {
  const [isAccepted, setIsAccepted] = useState(false); // State to track if the order is accepted
  const [isFadingOut, setIsFadingOut] = useState(false); // State to handle fade-out animation
  const [hasError, setHasError] = useState(false); // State to track if there was an error

  // Function to handle order acceptance
  const handleAccept = async (orderId) => {
    setHasError(false); // Reset error state before making the API call
    const success = await orderAccept(orderId); // Call the service to accept the order
    if (success) {
      setIsAccepted(true); // Mark the order as accepted
      setIsFadingOut(true); // Start fade-out animation
      setTimeout(() => {
        onAccept(order); // Notify parent component to remove the card
      }, 1000); // Wait for the fade-out animation to complete
    } else {
      setHasError(true); // Set error state if the API call fails
    }
  };

  return (
    <div
      className={`border p-4 rounded-lg shadow-sm bg-gray-50 transition-opacity duration-1000 ${
        isFadingOut ? 'opacity-0' : 'opacity-100' // Apply fade-out effect
      }`}
    >
      <div className="flex justify-between mb-2">
        <div>
          {/* Display order details */}
          <h4 className="text-lg font-semibold">
            Order ID: {order.orderId} {/* Removed userId */}
          </h4>
          <p className="text-sm text-gray-600">{order.pdfFile}</p>
        </div>
        {/* Accept Button */}
        <button
          className={`px-3 py-1 rounded-md text-white ${
            isAccepted
              ? 'bg-green-500'
              : hasError
              ? 'bg-red-500' // Show red color if there's an error
              : 'bg-blue-500 hover:bg-blue-600' // Default button color
          }`}
          onClick={() => handleAccept(order.orderId)} // Handle button click
          disabled={isAccepted} // Disable the button if already accepted
        >
          {isAccepted ? 'Accepted' : hasError ? 'Error' : 'Accept'} {/* Update button text */}
        </button>
      </div>
      {/* Display additional order details */}
      <div className="text-sm text-gray-500">
        {order.printType} | Total Pages: {order.pageCount} | Payment: {order.paymentStatus}
      </div>
    </div>
  );
};

export default OrderCard;
