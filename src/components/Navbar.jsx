import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../public/Logo.png'; // Import the logo

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMenuOpen(false); // Close the menu after logout
  };

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, [isLoggedIn]);

  // Show 'Services' button only when not logged in and on specific pages
  const showServices =
    !isLoggedIn &&
    ['/','/login','/register','/service'].includes(location.pathname);

  return (
    <div className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <nav className="bg-white shadow-md fixed w-full top-0 z-10 h-16">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" /> {/* Add the logo */}
            <Link to="/" className="text-blue-900 text-xl md:text-2xl font-bold truncate">
              PRINTING QUEUE MANAGEMENT
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-xl items-center">
            <Link to="/" className="text-black hover:text-blue-600 transition-colors">Home</Link>

            {isLoggedIn && role === 'admin' && (
              <>
                <Link to="/Dashboard" className="text-black hover:text-blue-600 transition-colors">Dashboard</Link>
                <Link to="/vendorService" className="text-black hover:text-blue-600 transition-colors">Vendor Services</Link>
              </>
            )}

            {isLoggedIn && role !== 'admin' && (
              <>
                <Link to="/upload" className="text-black hover:text-blue-600 transition-colors">Upload</Link>
                <Link to="/about" className="text-black hover:text-blue-600 transition-colors">About</Link>
              </>
            )}

            {showServices && (
              <Link to="/service" className="text-black hover:text-blue-600 transition-colors">Services</Link>
            )}

            {!isLoggedIn && (
              <>
                <Link to="/login" className="text-black hover:text-blue-600 transition-colors">Login</Link>
                <Link to="/register" className="text-black hover:text-blue-600 transition-colors">Register</Link>
              </>
            )}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-300"
              >
                Logout
              </button>
            )}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <FaTimes className="text-black" size={30} />
              ) : (
                <FaBars className="text-black" size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="w-full text-center py-2 text-black hover:text-blue-600"
              onClick={toggleMenu} // Close menu on selection
            >
              Home
            </Link>

            {isLoggedIn && role === 'admin' && (
              <>
                <Link
                  to="/Dashboard"
                  className="w-full text-center py-2 text-black hover:text-blue-600"
                  onClick={toggleMenu} // Close menu on selection
                >
                  Dashboard
                </Link>
                <Link
                  to="/VendorService"
                  className="w-full text-center py-2 text-black hover:text-blue-600"
                  onClick={toggleMenu} // Close menu on selection
                >
                  Vendor Services
                </Link>
              </>
            )}

            {isLoggedIn && role !== 'admin' && (
              <>
                <Link
                  to="/upload"
                  className="w-full text-center py-2 text-black hover:text-blue-600"
                  onClick={toggleMenu} // Close menu on selection
                >
                  Upload
                </Link>
                <Link
                  to="/about"
                  className="w-full text-center py-2 text-black hover:text-blue-600"
                  onClick={toggleMenu} // Close menu on selection
                >
                  About
                </Link>
              </>
            )}

            {showServices && (
              <Link
                to="/service"
                className="w-full text-center py-2 text-black hover:text-blue-600"
                onClick={toggleMenu} // Close menu on selection
              >
                Services
              </Link>
            )}

            {/* New Option */}
            <Link
              to="/tracker"
              className="w-full text-center py-2 text-black hover:text-blue-600"
              onClick={toggleMenu} // Close menu on selection
            >
              Tracker
            </Link>

            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className="w-full text-center py-2 text-black hover:text-blue-600"
                  onClick={toggleMenu} // Close menu on selection
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center py-2 text-black hover:text-blue-600"
                  onClick={toggleMenu} // Close menu on selection
                >
                  Register
                </Link>
              </>
            )}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition-colors duration-300"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Navbar;
