import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance.js';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [vendor, setVendor] = useState('');
  const [printType, setPrintType] = useState('single-sided');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setError(''); // Clear error on file selection
  };

  const handleVendorSelect = (e) => {
    setVendor(e.target.value);
    setError(''); // Clear error on vendor selection
  };

  const handlePrintTypeSelect = (type) => {
    setPrintType(type);
  };

  const handlePlaceOrder = async () => {
    if (selectedFiles.length === 0) {
      setError('Please upload at least one file');
      return;
    }

    if (!vendor) {
      setError('Please select a vendor');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      const orderData = {
        printType,
        pdfFile: selectedFiles[0]?.name || '', // Assuming only one file is uploaded
      };

      console.log('Order Data:', orderData);
      console.log('authorization:', token); // Check the token value

      const endpoint = '/order/';
      const response = await axiosInstance.post(endpoint, orderData, {
        headers: {
          'Content-Type': 'application/json',
          authorization: token, // Use 'token' as the key in the header
        },
      });

      console.log('Order Response:', response.data);
      navigate('/tracker', { state: { message: 'Order Placed Successfully!' } });
      alert('Order Placed Successfully!');
      setSelectedFiles([]);
      setVendor('');
      setPrintType('single-sided');
    } catch (error) {
      console.error('Error placing order:', error);
      setError('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full space-y-6">
        {/* File Upload, Print Type, and Vendor Selection Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Print Type Buttons */}
          <div className="flex flex-row items-center justify-center space-x-4">
            <button
              className={`hover:bg-gray-400 font-semibold py-2 px-4 rounded ${
                printType === 'single-sided' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => handlePrintTypeSelect('single-sided')}
            >
              Single-sided
            </button>
            <button
              className={`hover:bg-gray-400 font-semibold py-2 px-4 rounded ${
                printType === 'double-sided' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => handlePrintTypeSelect('double-sided')}
            >
              Double-sided
            </button>
          </div>

          {/* Vendor Selection */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full">
              <label htmlFor="vendorSelect" className="text-white mb-2 font-semibold block">
                Select Vendor:
              </label>
              <select
                id="vendorSelect"
                value={vendor}
                onChange={handleVendorSelect}
                className="w-full p-2 bg-gray-300 rounded text-black"
              >
                <option value="">Choose Vendor</option>
                <option value="vendor1">Vendor 1</option>
                <option value="vendor2">Vendor 2</option>
                <option value="vendor3">Vendor 3</option>
              </select>
            </div>

            {/* Upload Button */}
            <div className="w-full">
              <button
                className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2"
                onClick={() => document.getElementById('fileInput').click()}
              >
                <span>📄</span>
                <span>Upload</span>
              </button>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                multiple
                onChange={handleFileSelect}
              />
            </div>
          </div>
        </div>

        {/* Selected Files Section */}
        <div className="bg-gray-300 text-black p-3 rounded h-48 overflow-auto">
          <p className="font-medium">Selected file list:</p>
          <ul>
            {selectedFiles.length === 0 ? (
              <li>No files selected</li>
            ) : (
              selectedFiles.map((file) => <li key={file.name}>{file.name}</li>)
            )}
          </ul>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 font-semibold">{error}</p>}

        {/* Place Order Button */}
        <div className="flex justify-center">
          <button
            onClick={handlePlaceOrder}
            disabled={loading || selectedFiles.length === 0 || !vendor}
            className={`w-full md:w-auto py-3 px-6 font-semibold rounded-lg ${
              loading
                ? 'bg-gray-500 text-white'
                : selectedFiles.length > 0 && vendor
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-400 text-black cursor-not-allowed'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              'Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
