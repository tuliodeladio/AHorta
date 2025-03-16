import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/solutions.module.css';

const Solutions = () => {
    return (
        <div className={styles.containerFluid}>
            <div className={styles.hero}>
                <h1 className={styles.lead}>Conectando<br></br>pessoas e <strong>natureza</strong></h1>
            </div>


            <div className={`row p-5 ${styles.section1}`}>
                <div className="col-md-6 d-flex align-items-center">
                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.lead1Container}`}>
                        <p className={`${styles.lead1} mb-4`}>Conectando pessoas</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <Link className={`btn ${styles.registerFormBtn}`} to="/login">Ver Plataforma</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.hero2}></div>
                </div>
            </div>


            <div className={`row p-5 align-items-center ${styles.section1}`}>
                <div className="col-md-6">
                    <div className={styles.hero3}></div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.lead1Container}`}>
                        <p className={`${styles.lead1} mb-4`}>Informando a comunidade</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <Link className={`btn ${styles.registerFormBtn}`} to="/about">Ver mais informações</Link>
                    </div>
                </div>
            </div>


            <div className={styles.hero4}></div>


            <div className={`row p-5 ${styles.section1} align-items-center justify-content-center`}>
                <div className="col-md-6 d-flex flex-column align-items-center text-center justify-content-between align-items-center">
                    <p className={`${styles.lead1} mb-4`}>Seja um patrocinador:</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                    <Link to="/contact" className={`btn ${styles.registerFormBtn}`}>Entre em contato</Link>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
