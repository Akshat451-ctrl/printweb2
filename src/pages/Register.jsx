import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { Container, Card, Title, Button } from '../styles/styleRegister';
import FormGroup from '../components/FormGroup';
import ToggleRole from '../components/ToggleRole';
import { validateFields } from '../utils/validation';

const Register = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFields(formData, isAdmin);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      const endpoint = isAdmin ? '/auth/signup/vendor' : '/auth/signup/user';
      const res = await axiosInstance.post(endpoint, formData);

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', isAdmin ? 'admin' : 'user');

      alert('Registration successful!');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.message || 'Please try again.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container isAdmin={isAdmin}>
      <Card isAdmin={isAdmin}>
        <Title isAdmin={isAdmin}>{isAdmin ? 'Admin Registration' : 'User Registration'}</Title>
        <ToggleRole isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <form onSubmit={handleSubmit}>
          <FormGroup
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            isAdmin={isAdmin}
          />
          <FormGroup
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
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
          <FormGroup
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            isAdmin={isAdmin}
          />
          <FormGroup
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            isAdmin={isAdmin}
          />
          <Button type="submit" isAdmin={isAdmin} disabled={loading}>
            {loading ? 'Registering...' : `Register as ${isAdmin ? 'Admin' : 'User'}`}
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
