import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Service from './pages/Service';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import Upload from './pages/user/Upload';
import AdminDashboard from './pages/admin/Dashboard';
import VendorService from './pages/admin/VendorService';
import Tracker from './pages/user/Tracker';
import Order from './pages/user/Order';
import PrivateRoute from './components/PrivateRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="mt-[80px]"> {/* Adjust for navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />

          {/* Protected Upload Route */}
          <Route 
            path="/upload" 
            element={
              <PrivateRoute>
                <Upload />
              </PrivateRoute>
            } 
          />


<Route
  path="/vendorservice"
  element={
    <AdminProtectedRoute>
      <VendorService />
    </AdminProtectedRoute>
  }
/>

          {/* Auth Routes */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />

          {/* Other Routes */}
          <Route path="/vendorservice" element={<VendorService />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
