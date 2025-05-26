import styled from "styled-components";
import backgroundImg from "../assets/IMG/background_home.png"
import { Link } from 'react-router-dom';

export const Hero = styled.div`
	background-image: 
		linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0) 40%),
		url(${backgroundImg});
	background-size: cover;
	background-position: center;
	color: white;
	text-shadow: 1px 1px 5px black;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const HeroOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

export const HeroContent = styled.div`
	z-index: 2;
	text - align: center;
`;

export const Btnlg = styled(Link)`
	background-color: #709A4F;
	border: 1px solid #709A4F;
	border-radius: 4px;
	padding-left: 5%;
	padding-right: 5%;
	color: white;
	
	&:hover {
		color: #709A4F;
		border: 1px solid #709A4F;
	}
`;

export const Display3 = styled.h1`
	font weight: 700;
	font-size: 4.5rem;;
`;