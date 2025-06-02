export const validateFields = (formData, isAdmin) => {
  const errors = {};

  // Ensure email exists and is valid
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Invalid email';
  }

  // Ensure password exists
  if (!formData.password?.trim()) {
    errors.password = 'Password is required';
  }

  // If admin, validate phone number
  if (isAdmin) {
    if (!formData.phone?.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
  }

  // If confirmPassword exists, validate it
  if (formData.confirmPassword !== undefined && formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};