import React from 'react';
import styles from '../styles/login.module.css';

function Login() {
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
                            <h3>Login</h3>
                            <form>
                                <div>
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" placeholder="Digite aqui o seu e-mail" required />
                                </div>
                                <div>
                                    <label for="password" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="password" placeholder="Insira aqui a sua senha" required />
                                </div>
                                <button type="submit" className="btn btn-success w-100" style={{ backgroundColor: '#709A4F', border: 'none' }}>Entrar</button>
                                <button type="submit" className="esqueci_senha mb-3 btn btn-success w-100" style={{ backgroundColor: 'white', border: 'solid 1px #709A4F', color: '#709A4F' }}>Esqueci minha senha</button>
                                <p className="text-center mt-3">Não tem cadastro ainda? <strong><a className={styles.cliqueAqui} href="register.html">Clique aqui</a></strong> e faça parte dessa comunidade orgânica!</p>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
