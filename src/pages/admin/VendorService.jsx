import React, { useState, useEffect } from 'react';
import VendorLiveDashboard from '../../components/VendorLiveDashboard';
import VendorAcceptDashboard from '../../components/VendorAcceptDashboard';
import { fetchOrders, onVerifyOtp, markOrderAsPrinted, getOrdersByvendorId } from '../../services/orderService';

const VendorService = () => {
  const [serviceOn, setServiceOn] = useState(true); // State to track if the service is ON or OFF
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [acceptedOrders, setAcceptedOrders] = useState([]); // State to store accepted orders
  const [orders, setOrders] = useState([]); // State to store pending orders

  // Helper function to check if an order is unique
  const isOrderUnique = (order, prevOrders) => {
    return !prevOrders.some((prevOrder) => prevOrder.orderId === order.orderId);
  };

        (order) => isOrderUnique(order, prevOrders)
  const loadOrders = async () => {
    const newOrders = await fetchOrders();
    setOrders((prevOrders) => {
      const uniqueOrders = newOrders.filter(
        (order) => isOrderUnique(order, prevOrders)
      );
      return [...uniqueOrders.reverse(), ...prevOrders]; // Add new unique orders to the top of the list
    });
  };

  // Function to fetch orders using the `getOrdersByvendorId` API
  const refreshOrders = async () => {
    try {
      const vendorOrders = await getOrdersByvendorId(); // Fetch orders from the API
      if (Array.isArray(vendorOrders)) {
        setAcceptedOrders(vendorOrders.reverse()); // Reverse the orders to put the newest on top
      } else {
        console.error('Invalid response from API:', vendorOrders);
        setAcceptedOrders([]); // Set to an empty array if the response is invalid
      }
    } catch (error) {
      console.error('Error fetching vendor orders:', error);
      setAcceptedOrders([]); // Set to an empty array if the API call fails
    }
  };

  // Effect to load orders periodically when the service is ON
  useEffect(() => {
    let interval;
    if (serviceOn) {
      loadOrders(); // Initial load
      interval = setInterval(loadOrders, 5000); // Fetch orders every 5 seconds
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount or service OFF
  }, [serviceOn]);

  // Function to toggle the service ON/OFF
  const toggleService = () => setServiceOn(!serviceOn);

  // Function to handle accepting an order
  const handleAcceptOrder = (order) => {
    setAcceptedOrders((prev) => [...prev, order]); // Add order to accepted orders
    setOrders((prev) => prev.filter((o) => o.orderId !== order.orderId)); // Remove order from pending orders
  };

  // Function to handle OTP verification for an order
  const handleVerifyOtp = async (orderId, otp) => {
    const success = await onVerifyOtp(orderId, otp);
    if (success) {
      setAcceptedOrders((prev) => prev.filter((order) => order.orderId !== orderId)); // Remove verified order
      alert('OTP verified successfully!');
    } else {
      alert('Failed to verify OTP.');
    }
  };

  // Filter accepted orders based on the search term
  const filteredAcceptedOrders = acceptedOrders.filter((order) =>
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen flex font-sans bg-gray-100">
      {/* Left panel: Vendor Dashboard */}
      <VendorLiveDashboard
        serviceOn={serviceOn}
        toggleService={toggleService}
        orders={orders}
        handleAcceptOrder={handleAcceptOrder}
      />

      {/* Right panel: Accepted Orders */}
      <VendorAcceptDashboard
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        refreshOrders={refreshOrders}
        filteredAcceptedOrders={filteredAcceptedOrders}
        handleVerifyOtp={handleVerifyOtp}
        markOrderAsPrinted={markOrderAsPrinted}
      />
    </div>
  );
};

export default VendorService;
