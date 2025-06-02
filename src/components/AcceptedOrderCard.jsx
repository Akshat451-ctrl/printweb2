import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const AcceptedOrderCard = ({ order, markOrderAsPrinted, onVerifyOtp }) => {
  const [otp, setOtp] = useState('');
  const [isPrinted, setIsPrinted] = useState(false);

  const handleMarkAsPrinted = async () => {
    const success = await markOrderAsPrinted(order.orderId);
    if (success) {
      setIsPrinted(true);
      alert('Order marked as printed!');
    } else {
      alert('Failed to mark order as printed.');
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert('Please enter the OTP.');
      return;
    }
    await onVerifyOtp(order.orderId, otp); // Call the onVerifyOtp function passed as a prop
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h4 className="text-lg font-semibold">
        Order ID: {order.orderId} <span className="text-sm text-gray-500">| Total Pages: {order.pageCount}</span>
      </h4>
      <button
        className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm"
        onClick={() => alert(`Downloading ${order.pdfFile}`)}
      >
        <FaDownload /> {order.pdfFile}
      </button>
      {/* OTP Verification and Mark as Printed Section */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border px-3 py-1 rounded-md w-40"
        />
        <button
          onClick={handleVerifyOtp}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
        >
          Verify OTP
        </button>
        <button
          onClick={handleMarkAsPrinted}
          className={`px-4 py-1 rounded-md text-white ${
            isPrinted ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isPrinted ? 'Printed' : 'Mark as Printed'}
        </button>
      </div>
    </div>
  );
};

export default AcceptedOrderCard;