import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/about.module.css';
import img1 from '../assets/img/about/image-1.jpg';

const About = () => {
    return (
        <div>
            <div className={styles.bannerTop}>
                <p className={styles.bannerText}>Facilitar é cultivar o</p>
                <span className={styles.bannerTextSpan}>crescimento</span>
            </div>

            <div className={styles.textSection}>
                <div className="container d-flex flex-column justify-content-center">
                    <div className="row d-flex justify-content-between mb-5">
                        <img src={img1} height="305px" width="418px" className="col-md-5" />
                        <div className="w-50 col-md-5">
                            <h3 className="atual mt-4">Plataforma de Soluções</h3>
                            <p>Somos uma plataforma de busca conectar o produtor com o público que tem interesse em hortas dentro dos centros urbanos. O público pode ser tanto pessoas físicas que buscam mais informações quanto empresas que querem patrocinar a operação de uma horta em troca de maior visibilidade na comunidade.</p>

                            <Link className="btn" to="login">Ver Plataforma</Link>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center my-5">
                        <div className="w-50">
                            <h3 className="atual">Fome de Startup</h3>
                            <p>Somos uma empresa com o objetivo de alcançar parcerias para beneficiar o meio ambiente, as pessoas e as empresas de forma sustentável. Esse projeto é somente uma forma de conectar pessoas e insumos para que a informação flua de forma assertiva e rápida.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bannerBottom}>
                <p className={styles.bannerText}>Sua <span className={styles.bannerTextSpan}>agrotech</span></p>
                <p className={styles.bannerText}>na palma da sua mão</p>
            </div>
        </div>
    );
};

export default About;
