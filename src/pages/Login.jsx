import React, { useState } from 'react';
import { Container, Card, Title, Button } from '../styles/styleLogin';
import FormGroup from '../components/FormGroup';
import ToggleRole from '../components/ToggleRole';
import { validateFields } from '../utils/validation';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/orderService'; // Import the login function


const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '', // Include phone for admin validation
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form fields
    const validationErrors = validateFields(formData, isAdmin);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return; // Stop if there are validation errors

    // Use the login function from orderService.js
    await login(formData, isAdmin, setLoading, navigate);
  };

  return (
    <Container isAdmin={isAdmin}>
      <Card isAdmin={isAdmin}>
        <Title isAdmin={isAdmin}>{isAdmin ? 'Admin Login' : 'User Login'}</Title>
        <ToggleRole isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <form onSubmit={handleSubmit}>
          <FormGroup
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            isAdmin={isAdmin}
          />
          <FormGroup
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            isAdmin={isAdmin}
          />
          {isAdmin && (
            <FormGroup
              label="Phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              isAdmin={isAdmin}
            />
          )}
          <Button type="submit" isAdmin={isAdmin} disabled={loading}>
            {loading ? 'Logging in...' : `Login as ${isAdmin ? 'Admin' : 'User'}`}
          </Button>
        </form>
      </Card>
    </Container>
  );
};



export default Login;
