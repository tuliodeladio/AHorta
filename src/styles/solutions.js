import styled from "styled-components";
import { Link } from 'react-router-dom';

import heroBackground from "../assets/IMG/solution1.jpg";
import hero2Background from "../assets/IMG/solution2.jpg";
import hero3Background from "../assets/IMG/solution3.jpg";
import hero4Background from "../assets/IMG/solution4.jpg";


export const ContainerFluid = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

export const Hero = styled.div`
  background: 
    linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(0, 0, 0, 0.609) 80%),
    url(${heroBackground}) no-repeat center center;

  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const Hero2 = styled.div`
  background: 
    linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(0, 0, 0, 0.209) 80%),
    url(${hero2Background}) no-repeat center center;

  min-height: 300px;
`;

export const Hero3 = styled.div`
  background: 
    linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(0, 0, 0, 0.209) 80%),
    url(${hero3Background}) no-repeat center center;

  min-height: 300px;
`;

export const Hero4 = styled.div`
  background: 
    linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(0, 0, 0, 0.609) 80%),
    url(${hero4Background}) no-repeat center center;

  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const Lead = styled.h1`
  font-weight: 200;
  font-size: calc(10vmin);
`;

export const Lead1 = styled.p`
  color: #709A4F;
  font-weight: 600;
  font-size: x-large;
`;

export const Lead1Container = styled.div`
  text-align: center;
`;

export const Section1 = styled.div`
  min-height: 400px;
`;

export const RegisterFormBtn = styled(Link)`
  border: 1px solid #709A4F;
  background-color: #709A4F;
  color: white;
  width: 50%;

  &:hover {
    border: 1px solid #709A4F;
    background-color: #ffffff;
    color: #709A4F ;
    width: 50%;
  }
`;

export const RegisterFormBtn2 = styled(Link)`
  border: 1px solid #709A4F;
  background-color: #709A4F;
  width: 80%;

  &:hover {
    border: 1px solid #709A4F;
    background-color: #ffffff;
    color: #709A4F ;
    width: 80%;
  }
`;
