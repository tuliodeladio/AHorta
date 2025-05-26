import styled from 'styled-components';
import backgroundImage from '../assets/IMG/imagem101.jpg';

export const StyledContainerFluid = styled.div`
  padding: 0;
  background: #f9f9f9;
  min-height: 100vh;
`;

export const BannerTop = styled.div`
  height: 300px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.048), rgba(0, 0, 0, 0.721)),
    url(${backgroundImage});
  background-size: cover;
  background-position: 10% 80%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BannerText = styled.p`
  font-weight: 200;
  text-align: center;
  font-size: 72px;
  line-height: 72px;
`;

export const BannerTextSpan = styled.span`
  font-weight: 700;
  font-size: 72px;
  line-height: 72px;
`;

export const MapBox = styled.div`
  position: relative;
  z-index: 1;
  height: 70vh;
  border-radius: 12px;
  border: 5px solid #55773b;
  overflow: hidden;
  padding: 0;

  .leaflet-container {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
  }

  .leaflet-popup-content {
    margin: 12px;
    line-height: 1.4;
    min-width: 250px;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    border: 2px solid #709A4F;
  }
`;

export const PopupContent = styled.div`
  h5 {
    color: #709A4F;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.98rem;
    margin-bottom: 1rem;
  }
`;

export const RegisterFormBtn = styled.button`
  background: #709A4F;
  border: none;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #55773b;
  }
`;
