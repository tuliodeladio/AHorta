import styled from 'styled-components';

export const Base = styled.div`
  border-top: 1px #CED4DA solid;
`;

export const RegisterForm = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  input,
  select {
    margin-bottom: 15px;
  }

  .btn {
    background-color: #709A4F;
    border: none;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #709A4F;
  border: none;
  color: white;
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
  font-weight: 500;

  &:hover {
    background-color: #5e8640;
  }
`;

export const VoltarButton = styled.button`
  color: #709A4F;
  background-color: white;
  border: solid 1px #709A4F;
  width: 100%;
  padding: 8px;
  font-weight: 500;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ErrorText = styled.small`
  color: #dc3545;
`;
