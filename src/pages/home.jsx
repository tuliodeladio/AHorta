import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroOverlay}></div>
            <div className={`${styles.container} ${styles.heroContent} d-flex flex-column align-items-center justify-content-center`}>
                <h1 className={`display-3 ${styles.display3}`}>AHorta</h1>
                <p className={`lead col-md-9 p-5 text-center`}>Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                <Link to="solutions" className={`btn btn-lg w-10 ${styles.btnlg}`}>Ver mais informações</Link>
            </div>
        </div>
    );
};

export default Home;
