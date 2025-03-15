import React, { useState } from 'react';
import styles from '../styles/register.module.css';

function Register() {
    const [tipoCadastro, setTipoCadastro] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroNome, setErroNome] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);
    const [erroTelefone, setErroTelefone] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);

    const handleNomeChange = (e) => {
        const partesNome = e.target.value.trim().split(/\s+/);
        if (partesNome.length >= 2 && partesNome.every(parte => parte.length > 0)) {
            setErroNome(false);
        } else {
            setErroNome(true);
        }
        setNome(e.target.value);
    };

    const validarEmail = () => {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!padraoEmail.test(email)) {
            setErroEmail('O e-mail inserido não é válido.');
        } else if (email !== confirmarEmail) {
            setErroEmail('Os e-mails não coincidem.');
        } else {
            setErroEmail(false);
        }
    };

    const validarTelefone = (e) => {
        const padraoTelefone = /^\d{2}\s\d{5}-\d{4}$/;
        if (padraoTelefone.test(e.target.value)) {
            setErroTelefone(false);
        } else {
            setErroTelefone(true);
        }
        setTelefone(e.target.value);
    };

    const validarSenha = () => {
        if (senha.length < 8) {
            setErroSenha('A senha deve ter pelo menos 8 caracteres.');
        } else if (senha !== confirmarSenha) {
            setErroSenha('As senhas não coincidem.');
        } else {
            setErroSenha(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validarEmail();
        validarSenha();
    };

    return (
        <div className={styles.base}>
            <div className="container-fluid h-100 w-100 min-vh-100">
                <div className="row w-100 h-100 min-vh-100">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 h-100">
                        <div className={styles.registerForm}>
                            <h3>Cadastre-se</h3>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label for="tipoCadastro" className="form-label">Tipo de cadastro</label>
                                    <select className="form-select" id="tipoCadastro" value={tipoCadastro} onChange={(e) => setTipoCadastro(e.target.value)} required>
                                        <option value="" disabled selected>Selecione uma opção</option>
                                        <option value="donoHorta">Dono de Horta</option>
                                        <option value="voluntario">Voluntário</option>
                                        <option value="cliente">Cliente</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="nome" className="form-label">Nome Completo</label>
                                    <input type="text" className="form-control" id="nome" value={nome} onChange={handleNomeChange} placeholder="Insira aqui o seu nome completo" required />
                                    {erroNome && <small className="text-danger">O nome completo é obrigatório e deve conter pelo menos dois nomes.</small>}
                                </div>
                                <div>
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira aqui o seu e-mail" required />
                                    {erroEmail && <small className="text-danger">{erroEmail}</small>}
                                </div>
                                <div>
                                    <label for="confirmarEmail" className="form-label">Digite novamente o seu E-mail</label>
                                    <input type="email" className="form-control" id="confirmarEmail" value={confirmarEmail} onChange={(e) => setConfirmarEmail(e.target.value)} placeholder="Insira aqui o seu e-mail" required />
                                </div>
                                <div>
                                    <label for="telefone" className="form-label">Número de telefone</label>
                                    <input type="tel" className="form-control" id="telefone" value={telefone} onChange={validarTelefone} placeholder="XX XXXXX-XXXX" required />
                                    {erroTelefone && <small className="text-danger">Por favor, insira um número de telefone válido.</small>}
                                </div>
                                <div>
                                    <label for="senha" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Insira aqui a sua senha" required />
                                </div>
                                <div>
                                    <label for="confirmarSenha" className="form-label">Digite novamente a sua Senha</label>
                                    <input type="password" className="form-control" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} placeholder="Insira aqui a sua senha" required />
                                    {erroSenha && <small className="text-danger">{erroSenha}</small>}
                                </div>
                                <button type="submit" className="mb-3 btn btn-success w-100" style={{ backgroundColor: '#709A4F', border: 'none' }}>Confirmar</button>
                                <button type="button" className="voltar mb-3 btn btn-success w-100" style={{ color: '#709A4F', backgroundColor: 'white', border: 'solid 1px #709A4F' }} onClick={() => window.history.back()}>Voltar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Register;
