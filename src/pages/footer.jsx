import React from 'react';
import { StyledFooter } from '../styles/footer';

const Footer = () => {
    return (
        <StyledFooter className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p><strong>Endereço</strong><br></br>Avenida de endereço, 123<br></br>Bairro da Empresa - SP - 123456-78</p>
                    </div>
                    <div className="col-md-4">
                        <p><strong>AHorta.sociedade</strong><br></br>CNPJ: 12345-6789/0001-12<br></br>&copy;2024</p>
                    </div>
                    <div className="col-md-4">
                        <p><strong>Contatos</strong><br></br>+55 (11) 12345-7890<br></br>empresa@email.com.br</p>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
