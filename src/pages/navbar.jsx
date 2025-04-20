import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/IMG/Logo_header.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo AHorta" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/solutions">Soluções</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Quem nós somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Entre em contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/map">Mapa</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Cadastre-se</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
