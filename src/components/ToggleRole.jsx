import React from 'react';
import { ToggleContainer, ToggleButton } from '../styles/styleCommon';

const ToggleRole = ({ isAdmin, setIsAdmin }) => {
  return (
    <ToggleContainer>
      <ToggleButton active={!isAdmin} onClick={() => setIsAdmin(false)}>User</ToggleButton>
      <ToggleButton active={isAdmin} onClick={() => setIsAdmin(true)}>Admin</ToggleButton>
    </ToggleContainer>
  );
};

export default ToggleRole;