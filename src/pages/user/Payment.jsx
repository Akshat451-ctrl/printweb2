import React, { useState } from 'react';
import { 
  BanknotesIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState('bank');
  const [isProcessing, setIsProcessing] = useState(false);

  const upiOptions = [
    {
      id: 'bank',
      name: 'Bank Account',
      icon: <BanknotesIcon className="h-6 w-6 text-blue-600" />,
      description: 'Pay directly from your bank account',
    },
    {
      id: 'upi',
      name: 'UPI ID',
      icon: <CreditCardIcon className="h-6 w-6 text-blue-600" />,
      description: 'Pay using your UPI ID (example@upi)',
    },
    {
      id: 'mobile',
      name: 'Mobile Number',
      icon: <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600" />,
      description: 'Pay using your mobile number',
    },
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment initiated via ${selectedOption}`);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">PQM</h1>
          <h2 className="text-2xl font-bold text-gray-800">Payment Summary</h2>
          <p className="text-gray-500 mt-1">Select UPI mode to complete your payment</p>
        </div>

        {/* Payment Options */}
        <div className="space-y-3 mb-6">
          {upiOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 border rounded-xl transition-all duration-200 flex items-start ${
                selectedOption === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                {option.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={option.id}
                    name="paymentMethod"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor={option.id} className="ml-2 block text-sm font-medium text-gray-700">
                    {option.name}
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-6">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full flex items-center justify-center py-3 px-4 rounded-xl text-white font-medium ${
            isProcessing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors duration-200`}
        >
          {isProcessing ? (
            'Processing...'
          ) : (
            <>
              PAY
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;