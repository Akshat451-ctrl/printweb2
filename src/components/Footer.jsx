// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Shop Name and Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Smart Print & Stationery</h3>
          <p>Your trusted partner for online printing and stationery services.</p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p>Location: 123 Print St., City, Country</p>
          <p>Email: info@smartprint.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
