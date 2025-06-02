import styled from 'styled-components';

// Toggle Container for Role Selection
export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#667eea' : '#ccc')};
  transition: background 0.3s ease;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:hover {
    background-color: ${({ active }) => (active ? '#5a67d8' : '#bbb')};
  }
`;

// Form Label
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
`;

// Form Input
export const Input = styled.input`
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${({ isAdmin }) => (isAdmin ? '#ff7043' : '#667eea')};
    box-shadow: 0 0 0 3px
      ${({ isAdmin }) =>
        isAdmin ? 'rgba(255, 112, 67, 0.2)' : 'rgba(102, 126, 234, 0.2)'};
    outline: none;
  }

  &.error {
    border-color: #e74c3c;
  }
`;

// Error Message
export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;

// Button
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: ${({ isAdmin }) =>
    isAdmin
      ? 'linear-gradient(to right, #ff6a00, #ee0979)'
      : 'linear-gradient(to right, #667eea, #764ba2)'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;