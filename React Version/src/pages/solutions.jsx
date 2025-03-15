import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/solutions.module.css';

const Solutions = () => {
    return (
        <div className={styles.containerFluid}>
            <div className={styles.hero}>
                <h1 className={styles.lead}>Conectando<br></br>pessoas e <strong>natureza</strong></h1>
            </div>

            <div className={`${styles.containerFluid} row p-5 ${styles.section1}`}>
                <div className="col-md-6 row pt-5 pb-5">
                    <div className="col-md-3"></div>
                    <div className={`col-md-6 d-flex justify-content-center row ${styles.lead1Container}`}>
                        <p className={`${styles.lead1} mb-4 p-0`}>Conectando pessoas</p>
                        <p className="mb-4 p-0">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <Link className="btn" to="/login">Ver Plataforma</Link>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className={styles.hero2}></div>
            </div>

            <div className={`${styles.containerFluid} row p-5 ${styles.section1}`}>
                <div className={styles.hero3}></div>

                <div className="col-md-6 row pt-5 pb-5">
                    <div className="col-md-3"></div>
                    <div className={`col-md-6 d-flex justify-content-center row ${styles.lead1Container}`}>
                        <p className={`${styles.lead1} mb-4 p-0`}>Informando a comunidade</p>
                        <p className="mb-4 p-0">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <Link className="btn" to="/about">Ver mais informações</Link>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

            <div className={styles.hero4}></div>

            <div className={`${styles.containerFluid} row p-5 ${styles.section1}`}>
                <div className="col-md-12 row pt-5 pb-5">
                    <div className="col-md-3"></div>
                    <div className={`col-md-6 d-flex justify-content-center row ${styles.lead1Container}`}>
                        <p className={`${styles.lead1} mb-4 p-0`}>Seja um patrocinador:</p>
                        <p className="mb-4 p-0">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <Link to="/contact" className="btn btn2">Entre em contato</Link>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
