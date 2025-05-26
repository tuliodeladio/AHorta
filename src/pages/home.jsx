import React from 'react';
import { Hero, HeroOverlay, HeroContent, Btnlg, Display3, Lead } from '../styles/home'

const Home = () => {
    return (
        <Hero>
            <HeroOverlay></HeroOverlay>
            <HeroContent className={`d-flex flex-column align-items-center justify-content-center`}>
                <Display3 className={`display-3`}>AHorta</Display3>
                <p className={`lead col-md-9 p-5 text-center`}>Conectamos pessoas, empresas e produtores para transformar cidades com hortas urbanas, sustentabilidade e alimentação saudável.</p>
                <Btnlg to="solutions" className={`btn btn-lg w-10`}>Ver mais informações</Btnlg>
            </HeroContent>
        </Hero>
    );
};

export default Home;
