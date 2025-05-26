import React, { useState } from 'react';
import {
  Base,
  Hero,
  HeroContent,
  LoginForm,
  RegisterFormBtn,
  RegisterFormBtn2,
  RegisterFormBtn4,
  CliqueAqui,
  PopupOverlay,
  Popup
} from '../styles/login';

function Login() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleEsqueciSenha = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log('E-mail enviado:', email);
    setShowPopup(false);
  };

  return (
    <Base>
      <div className="container-fluid h-100 w-100 min-vh-100">
        <div className="row w-100 h-100 min-vh-100">
          <div className="col-md-6 p-0">
            <Hero>
              <HeroContent>
                <h1 className="display-3">AHorta</h1>
                <p className="lead">A maior comunidade orgânica do Brasil</p>
              </HeroContent>
            </Hero>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-4 row">
            <LoginForm className="w-100 p-5 min-vh-100 col-md-5">
              <h3 className="mb-4">Login</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="email" placeholder="Digite aqui o seu e-mail" required />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Senha</label>
                  <input type="password" className="form-control" id="password" placeholder="Insira aqui a sua senha" required />
                </div>

                <RegisterFormBtn type="submit" className="mb-4">Entrar</RegisterFormBtn>
                <RegisterFormBtn4 type="button" className="mb-4" onClick={handleEsqueciSenha}>Esqueci minha senha</RegisterFormBtn4>

                <p className="text-center mt-4">
                  Não tem cadastro ainda? <strong><CliqueAqui href="/register">Clique aqui</CliqueAqui></strong> e faça parte dessa comunidade orgânica!
                </p>
              </form>
            </LoginForm>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

      {showPopup && (
        <PopupOverlay>
          <Popup>
            <h3 className="mb-4">Recuperar Senha</h3>
            <form onSubmit={handleSubmitEmail}>
              <div className="mb-4">
                <label htmlFor="emailRecuperacao" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="emailRecuperacao" value={email} onChange={handleEmailChange} placeholder="Digite aqui o seu e-mail" required />
              </div>
              <RegisterFormBtn type="submit">Enviar</RegisterFormBtn>
              <RegisterFormBtn2 type="button" className="mt-2" onClick={handleClosePopup}>Cancelar</RegisterFormBtn2>
            </form>
          </Popup>
        </PopupOverlay>
      )}
    </Base>
  );
}

export default Login;
