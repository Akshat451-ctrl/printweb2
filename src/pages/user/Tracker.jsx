import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";

const Tracker = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden animate-gradient">
      {/* Main Content */}
      <div className="relative flex flex-col space-y-8 z-10">
        <button
          onClick={() => navigate("/upload")}
          className="wet-paint-button w-72 py-5 text-xl font-semibold rounded-2xl text-white transition-all duration-300 transform hover:scale-105"
        >
          Place Order
        </button>

        <button
          onClick={() => navigate("/order")}
          className="wet-paint-button w-72 py-5 text-xl font-semibold rounded-2xl text-white transition-all duration-300 transform hover:scale-105"
        >
          Track Order
        </button>
      </div>`1`


      
    </div>
  );
};

export default Tracker;
