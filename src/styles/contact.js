// styles/contact.js
import styled from "styled-components";
import backgroundContato from "../assets/IMG/background_contato.jpg";

export const Base = styled.div`
  border-top: 2px solid #CED4DA;
  border-bottom: 2px solid #CED4DA;
`;

export const Hero = styled.div`
  background-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(0, 0, 0, 0.721) 100%),
    url(${backgroundContato});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`;

export const HeroContent = styled.div`
  z-index: 2;
  text-align: center;
`;

export const LoginForm = styled.div`
  background-color: white;
  padding: 3rem;
  min-height: 100vh;

  h6 {
    font-weight: 500;
  }

  input,
  textarea,
  .text-danger {
    margin-bottom: 10px;
  }

  .forgot-password {
    color: #709A4F;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: #709A4F;
  color: white;
  border: 1px solid #709A4F;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: white;
    color: #709A4F;
    border: 1px solid #709A4F;
  }
`;

export const Display3 = styled.h1`
  font-weight: 700;
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const Lead = styled.p`
  font-weight: 100;
  font-size: xx-large;
`;
