import { ContainerFluid, Hero, Hero2, Hero3, Hero4, Lead, Lead1, Lead1Container, Section1, RegisterFormBtn } from "../styles/solutions"

const Solutions = () => {
    return (
        <ContainerFluid>
            <Hero>
                <Lead>Conectando<br></br>pessoas e <strong>natureza</strong></Lead>
            </Hero>

            <Section1 className={`row p-5`}>
                <div className="col-md-6 d-flex align-items-center">
                    <Lead1Container className={`d-flex flex-column align-items-center justify-content-center`}>
                        <Lead1 className={`mb-4`}>Conectando pessoas</Lead1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <RegisterFormBtn className={`btn`} to="/login">Ver Plataforma</RegisterFormBtn>
                    </Lead1Container>
                </div>
                <div className="col-md-6">
                    <Hero2></Hero2>
                </div>
            </Section1>

            <Section1 className={`row p-5 align-items-center`}>
                <div className="col-md-6">
                    <Hero3></Hero3>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Lead1Container className={`d-flex flex-column align-items-center justify-content-center`}>
                        <Lead1 className={`mb-4`}>Informando a comunidade</Lead1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                        <RegisterFormBtn className={`btn`} to="/about">Ver mais informações</RegisterFormBtn>
                    </Lead1Container>
                </div>
            </Section1>

            <Hero4></Hero4>

            <Section1 className={`row p-5 align-items-center justify-content-center`}>
                <div className="col-md-6 d-flex flex-column align-items-center text-center justify-content-between align-items-center">
                    <Lead1 className={`mb-4`}>Seja um patrocinador:</Lead1>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Molestie massa dignissim amet est elementum quam facilisi. Sem duis iaculis diam dolor mi tristique dolor. Vel ut risus adipiscing augue justo luctus sit justo. Turpis nunc pharetra augue pellentesque dolor adipiscing ipsum nullam sit.</p>
                    <RegisterFormBtn to="/contact" className={`btn`}>Entre em contato</RegisterFormBtn>
                </div>
            </Section1>
        </ContainerFluid>
    );
};

export default Solutions;
