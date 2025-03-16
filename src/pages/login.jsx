import React, { useState } from 'react';
import styles from '../styles/login.module.css';

function Login() {
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState('');

    const handleEsqueciSenha = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitEmail = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar o e-mail
        console.log('E-mail enviado:', email);
        setShowPopup(false);
    };

    return (
        <div className={styles.base}>
            <div className="container-fluid h-100 w-100 min-vh-100">
                <div className="row w-100 h-100 min-vh-100">
                    <div className={`${styles.hero} col-md-6 min-vh-100`}>
                        <div className={styles.heroContent}>
                            <h1 className="display-3">AHorta</h1>
                            <p className="lead">A maior comunidade orgânica do Brasil</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 row">
                        <div className={`${styles.loginForm} w-100 p-5 min-vh-100 col-md-5`}>
                            <h3 className="mb-4">Login</h3>
                            <form>
                                <div className="mb-4">
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" placeholder="Digite aqui o seu e-mail" required />
                                </div>
                                <div className="mb-4">
                                    <label for="password" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="password" placeholder="Insira aqui a sua senha" required />
                                </div>
                                <button type="submit" className="btn btn-success w-100 mb-4" style={{ backgroundColor: '#709A4F', border: 'none' }}>Entrar</button>
                                <button type="button" className="esqueci_senha mb-4 btn btn-success w-100" style={{ backgroundColor: 'white', border: 'solid 1px #709A4F', color: '#709A4F' }} onClick={handleEsqueciSenha}>Esqueci minha senha</button>
                                <p className="text-center mt-4">Não tem cadastro ainda? <strong><a className={styles.cliqueAqui} href="register.html">Clique aqui</a></strong> e faça parte dessa comunidade orgânica!</p>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <h3 className="mb-4">Recuperar Senha</h3>
                        <form onSubmit={handleSubmitEmail}>
                            <div className="mb-4">
                                <label for="emailRecuperacao" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="emailRecuperacao" value={email} onChange={handleEmailChange} placeholder="Digite aqui o seu e-mail" required />
                            </div>
                            <button type="submit" className="btn btn-success w-100" style={{ backgroundColor: '#709A4F', border: 'none' }}>Enviar</button>
                            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={handleClosePopup}>Cancelar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
