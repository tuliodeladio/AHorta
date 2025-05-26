import { BannerTop, BannerBottom, BannerText, BannerTextSpan, TextSection, RegisterFormBtn } from "../styles/about.js"
import img1 from '../assets/IMG/about/image-1.jpg';

const About = () => {
    return (
        <div>
            <BannerTop>
                <BannerText>Facilitar é cultivar o</BannerText>
                <BannerTextSpan>crescimento</BannerTextSpan>
            </BannerTop>

            <TextSection>
                <div className="container d-flex flex-column justify-content-center">
                    <div className="row justify-content-between mb-5">
                        <div className="col-md-5">
                            <img src={img1} className="img-fluid" alt="Descrição" />
                        </div>
                        <div className="w-50 col-md-5">
                            <h3 className="atual mt-4">Plataforma de Soluções</h3>
                            <p>Somos uma plataforma de busca conectar o produtor com o público que tem interesse em hortas dentro dos centros urbanos. O público pode ser tanto pessoas físicas que buscam mais informações quanto empresas que querem patrocinar a operação de uma horta em troca de maior visibilidade na comunidade.</p>

                            <RegisterFormBtn to="/login">Ver Plataforma</RegisterFormBtn>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center my-5">
                        <div className="w-50">
                            <h3 className="atual">Fome de Startup</h3>
                            <p>Somos uma empresa com o objetivo de alcançar parcerias para beneficiar o meio ambiente, as pessoas e as empresas de forma sustentável. Esse projeto é somente uma forma de conectar pessoas e insumos para que a informação flua de forma assertiva e rápida.</p>
                        </div>
                    </div>
                </div>
            </TextSection>

            <BannerBottom>
                <BannerText>Sua <BannerTextSpan>agrotech</BannerTextSpan></BannerText>
                <BannerText>na palma da sua mão</BannerText>
            </BannerBottom>
        </div>
    );
};

export default About;
