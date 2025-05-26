import styled from "styled-components";
import { Link } from 'react-router-dom';

import backgroundBannerTop from "../assets/IMG/about/background-banner-top.jpg";
import backgroundBannerBottom from "../assets/IMG/about/background-banner-bottom.jpg";

export const BannerTop = styled.div`
  height: 300px;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.721)),
    url(${backgroundBannerTop});

  background-size: cover;
  background-position: center;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BannerBottom = styled.div`
  height: 300px;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.448), rgba(0, 0, 0, 1.921)),
    url(${backgroundBannerBottom});

  background-size: cover;
  background-position: center;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BannerText = styled.p`
  font-weight: 200;
  font-size: 72px;
  line-height: 72px;
`;

export const BannerTextSpan = styled.span`
  font-weight: 700;
  font-size: 72px;
  line-height: 72px;
`;

export const TextSection = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const RegisterFormBtn = styled(Link)`
  display: block;
  width: 100%;
  border: 1px solid #709A4F;
  background-color: #709A4F;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 4px;  
  
  &:hover {
    background-color: #ffffff;
    color: #709A4F ;
  }
`;