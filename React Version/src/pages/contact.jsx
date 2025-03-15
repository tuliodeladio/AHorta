import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/contact.module.css';

const Contact = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erroNome, setErroNome] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);
    const [erroTelefone, setErroTelefone] = useState(false);
    const [erroMensagem, setErroMensagem] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lógica para enviar o formulário
        if (!validarFormulario()) {
            return;
        }

        // Enviar formulário aqui
        console.log('Formulário válido:', { nome, email, telefone, mensagem });
    };

    const validarFormulario = () => {
        let valido = true;

        if (!nome || !nome.split(/\s+/).every(parte => parte.length > 0) || nome.split(/\s+/).length < 2) {
            setErroNome(true);
            valido = false;
        } else {
            setErroNome(false);
        }

        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !padraoEmail.test(email)) {
            setErroEmail(true);
            valido = false;
        } else {
            setErroEmail(false);
        }

        const padraoTelefone = /^\d{2}\s\d{5}-\d{4}$/;
        if (!telefone || !padraoTelefone.test(telefone)) {
            setErroTelefone(true);
            valido = false;
        } else {
            setErroTelefone(false);
        }

        if (!mensagem || mensagem.length < 30 || mensagem.length > 500) {
            setErroMensagem(true);
            valido = false;
        } else {
            setErroMensagem(false);
        }

        return valido;
    };

    const handleNomeChange = (e) => {
        setNome(e.target.value);
        if (e.target.value.split(/\s+/).every(parte => parte.length > 0) && e.target.value.split(/\s+/).length >= 2) {
            setErroNome(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (padraoEmail.test(e.target.value)) {
            setErroEmail(false);
        }
    };

    const handleTelefoneChange = (e) => {
        setTelefone(e.target.value);
        const padraoTelefone = /^\d{2}\s\d{5}-\d{4}$/;
        if (padraoTelefone.test(e.target.value)) {
            setErroTelefone(false);
        }
    };

    const handleMensagemChange = (e) => {
        setMensagem(e.target.value);
        if (e.target.value.length >= 30 && e.target.value.length <= 500) {
            setErroMensagem(false);
        }
    };

    return (
        <div className={styles.base}>
            <div className="container-fluid h-100 w-100 min-vh-100">
                <div className="row w-100 h-100 min-vh-100">
                    <div className={`${styles.hero} col-md-6 min-vh-100`}>
                        <div className={styles.heroContent}>
                            <h1 className="display-3">AHorta</h1>
                            <p className="lead">Seja um parceiro da maior comunidade orgânica do Brasil</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 row">
                        <div className={`${styles.loginForm} w-100 p-5 min-vh-100 col-md-5`}>
                            <h6 className="mb-4">AHorta proporciona a plataforma para a interação entre hortas comunitárias e grandes empresas que podem contribuir com o crescimento do cultivo orgânico em troca de maior visibilidade nas próprias hortas. Entre em contato e entenda melhor essa oportunidade.</h6>
                            <h3>Entre em contato</h3>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label for="name" className="form-label">Nome Completo</label>
                                    <input type="text" className="form-control" id="nome" value={nome} onChange={handleNomeChange} placeholder="Digite aqui o seu nome completo" required />
                                    {erroNome && <small className="text-danger">O nome completo é obrigatório e deve conter pelo menos dois nomes.</small>}
                                </div>
                                <div>
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} placeholder="Digite aqui o seu e-mail" required />
                                    {erroEmail && <small className="text-danger">Por favor, insira um e-mail válido.</small>}
                                </div>
                                <div>
                                    <label for="telefone" className="form-label">Número de telefone</label>
                                    <input type="tel" className="form-control" id="telefone" value={telefone} onChange={handleTelefoneChange} placeholder="XX XXXXX-XXXX" required />
                                    {erroTelefone && <small className="text-danger">Por favor, insira um número de telefone válido no formato XX XXXXX-XXXX.</small>}
                                </div>
                                <div>
                                    <label for="msg" className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="mensagem" value={mensagem} onChange={handleMensagemChange} placeholder="Digite aqui a sua mensagem" required rows="3"></textarea>
                                    {erroMensagem && <small className="text-danger">A mensagem deve ter entre 30 e 500 caracteres.</small>}
                                </div>
                                <button type="submit" className="btn btn-success w-100">Enviar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
