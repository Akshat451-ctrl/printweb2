import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: ${({ isAdmin }) =>
    isAdmin
      ? 'linear-gradient(135deg, #ff5f6d, #ffc371)' // Admin theme
      : 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'}; // User theme
  transition: background 0.5s ease;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border: ${({ isAdmin }) => (isAdmin ? '2px solid #ff8a65' : 'none')};
`;

export const Title = styled.h2`
  text-align: center;
  background: ${({ isAdmin }) =>
    isAdmin
      ? 'linear-gradient(135deg, #ff5f6d, #ffc371)' // Admin title matches the admin gradient
      : 'none'}; // No gradient for user title
  color: ${({ isAdmin }) => (isAdmin ? 'transparent' : 'ocean blue')};
  -webkit-background-clip: text;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;

  ${({ isAdmin }) =>
    !isAdmin &&
    `
    color: #0077be; /* Ocean Blue color for User login */
  `}
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;

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

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;