import React from 'react';
import { Label, Input, ErrorMessage } from '../styles/styleLogin';

const FormGroup = ({ label, type, name, value, onChange, error, isAdmin }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
        isAdmin={isAdmin}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default FormGroup;
