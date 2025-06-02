import React from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import SearchBar from './SearchBar';
import AcceptedOrderCard from './AcceptedOrderCard';

const VendorAcceptDashboard = ({
  searchTerm,
  setSearchTerm,
  refreshOrders,
  filteredAcceptedOrders,
  handleVerifyOtp,
  markOrderAsPrinted,
}) => {
  return (
    <div className="w-1/2 p-4 overflow-auto bg-gray-50">
      {/* Search bar and Refresh button */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-grow">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <button
          onClick={refreshOrders}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md font-semibold"
        >
          <FaSyncAlt /> Refresh
        </button>
      </div>
      {/* Display accepted orders or a message if none exist */}
      {filteredAcceptedOrders.length === 0 ? (
        <p className="text-center text-gray-400 mt-16">No accepted orders yet</p>
      ) : (
        <div className="space-y-4">
          {filteredAcceptedOrders.map((order) => (
            <AcceptedOrderCard
              key={order.orderId}
              order={order}
              onVerifyOtp={handleVerifyOtp}
              markOrderAsPrinted={markOrderAsPrinted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorAcceptDashboard;