import axiosInstance from '../utils/axiosInstance';

export const login = async (formData, isAdmin, setLoading, navigate) => {
  try {
    setLoading(true); // Show loading state

    // Determine API endpoint based on role
    const endpoint = isAdmin ? '/auth/login/vendor' : '/auth/login/user';

    // Send login request
    const { data } = await axiosInstance.post(endpoint, formData);

    // Store token and role in localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', isAdmin ? 'admin' : 'user');

    // Navigate to the appropriate page based on role
    navigate(isAdmin ? '/vendorservice' : '/tracker');
  } catch (err) {
    // Show error message if login fails
    alert('Login failed: ' + (err.response?.data?.message || 'Please try again.'));
  } finally {
    setLoading(false); // Hide loading state
  }
};

export const fetchOrders = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.get('/order/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

export const markOrderAsPrinted = async (orderId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.put(
      '/order/orderPrinted/orderid',
      { orderId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (error) {
    console.error('Error marking order as printed:', error);
    return false;
  }
};

export const orderAccept = async (orderId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.put(
      '/order/orderid',
      { orderId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response from accepting order:', response);
    return true;
  } catch (error) {
    console.error('Error in accepting order:', error);
    return false;
  }
};

export const onVerifyOtp = async (orderId, otp) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.post(
      '/order/otp/orderid',
      { orderId, otp },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response from verifying OTP:', response);
    return true;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return false;
  }
};

export const getOrdersByUserId = async () => {
  try {
    const role = localStorage.getItem('role');
    if (role !== 'user') {
      console.error('Access denied: Only users can fetch orders by user ID.');
      return [];
    }

    const token = localStorage.getItem('token');
    const response = await axiosInstance.get('/order/userid', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders by user ID:', error);
    return [];
  }
};

//only fetch order which have order status either order placed or order printed
export const getOrdersByvendorId = async () => {
  try {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      console.error('Access denied: Only vendors can fetch orders by vendor ID.');
      return [];
    }

    const token = localStorage.getItem('token');
    const response = await axiosInstance.get('/order/vendorid', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders by vendor ID:', error);
    return [];
  }
};
