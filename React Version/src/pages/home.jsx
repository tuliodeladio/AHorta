import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

const Home = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroOverlay}></div>
            <div className={`${styles.container} ${styles.heroContent}`}>
                <h1 className="display-3">AHorta</h1>
                <p className="lead p-5">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                <Link to="solutions" className="btn btn-success btn-lg">Ver mais informações</Link>
            </div>
        </div>
    );
};

export default Home;
