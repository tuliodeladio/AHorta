import styled from "styled-components";
import backgroundImage from "../assets/IMG/solution1.jpg";

export const Base = styled.div`
  margin: 0;
  padding: 0;
`;

export const Hero = styled.div`
  background: 
    linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(0, 0, 0, 0.609) 80%),
    url(${backgroundImage}) no-repeat center center;

  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const HeroContent = styled.div`
  z-index: 2;
`;

export const LoginForm = styled.div`
  background-color: white;
`;

export const RegisterFormBtn = styled.button`
  border: 1px solid #709A4F;
  background-color: #709A4F;
  color: white;
  width: 100%;

  &:hover {
    background-color: #ffffff;
    color: #709A4F;
  }
`;

export const RegisterFormBtn2 = styled.button`
  border: 1px solid #d4484f;
  background-color: #d4484f;
  color: white;
  width: 100%;

  &:hover {
    background-color: #ffffff;
    color: #d4484f;
  }
`;

export const RegisterFormBtn4 = styled.button`
  border: 1px solid #709A4F;
  background-color: #ffffff;
  color: #709A4F;
  width: 100%;

  &:hover {
    background-color: #709A4F;
    color: white;
  }
`;

export const CliqueAqui = styled.a`
  color: #709A4F;
  text-decoration: none;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popup = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 500px;
`;
