import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroOverlay}></div>
            <div className={`${styles.container} ${styles.heroContent} d-flex flex-column align-items-center justify-content-center`}>
                <h1 className={`display-3 ${styles.display3}`}>AHorta</h1>
                <p className={`lead col-md-9 p-5 text-center`}>Conectamos pessoas, empresas e produtores para transformar cidades com hortas urbanas, sustentabilidade e alimentação saudável.</p>
                <Link to="solutions" className={`btn btn-lg w-10 ${styles.btnlg}`}>Ver mais informações</Link>
            </div>
        </div>
    );
};

export default Home;
