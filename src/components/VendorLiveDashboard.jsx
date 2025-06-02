import React from 'react';
import PropTypes from 'prop-types';
import { FaPowerOff } from 'react-icons/fa';
import OrderCard from './OrderCard';

const VendorLiveDashboard = ({ serviceOn, toggleService, orders, handleAcceptOrder }) => {
  return (
    <div className="w-1/2 border-r overflow-auto p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        {/* Button to toggle service ON/OFF */}
        <button
          onClick={toggleService}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md text-white font-semibold transition-all ${
            serviceOn ? 'bg-green-600' : 'bg-red-600'
          }`} 
        >
          <FaPowerOff /> {serviceOn ? 'Service ON' : 'Service OFF'}
        </button>
      </div>
      {/* Display orders if service is ON */}
      {serviceOn ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.orderId} order={order} onAccept={handleAcceptOrder} />
          ))}
        </div>
      ) : (
        // Message when service is OFF
        <div className="text-center text-gray-600 mt-20">
          <p className="text-lg">🚫 Service is currently OFF</p>
          <p>Turn it ON to see incoming requests</p>
        </div>
      )}
    </div>
  );
};
VendorLiveDashboard.propTypes = {
  serviceOn: PropTypes.bool.isRequired,
  toggleService: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.string.isRequired,
      // Add other order properties here if needed
    })
  ).isRequired,
  handleAcceptOrder: PropTypes.func.isRequired,
};

export default VendorLiveDashboard;
