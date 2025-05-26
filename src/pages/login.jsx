import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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

const loginSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

const recoverySchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
});

function Login() {
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const {
    register: registerRecovery,
    handleSubmit: handleSubmitRecovery,
    formState: { errors: errorsRecovery },
    reset: resetRecovery,
  } = useForm({ resolver: yupResolver(recoverySchema) });

  const onSubmitLogin = (data) => {
    console.log('Login data:', data);
  };

  const onSubmitRecovery = (data) => {
    console.log('Recuperação de senha com e-mail:', data.email);
    setShowPopup(false);
    resetRecovery();
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
              <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Digite aqui o seu e-mail"
                    {...register('email')}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Senha</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    placeholder="Insira aqui a sua senha"
                    {...register('password')}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>

                <RegisterFormBtn type="submit" className="mb-4">Entrar</RegisterFormBtn>
                <RegisterFormBtn4 type="button" className="mb-4" onClick={() => setShowPopup(true)}>
                  Esqueci minha senha
                </RegisterFormBtn4>

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
            <form onSubmit={handleSubmitRecovery(onSubmitRecovery)}>
              <div className="mb-4">
                <label htmlFor="emailRecuperacao" className="form-label">E-mail</label>
                <input
                  type="email"
                  className={`form-control ${errorsRecovery.email ? 'is-invalid' : ''}`}
                  id="emailRecuperacao"
                  placeholder="Digite aqui o seu e-mail"
                  {...registerRecovery('email')}
                />
                {errorsRecovery.email && <div className="invalid-feedback">{errorsRecovery.email.message}</div>}
              </div>
              <RegisterFormBtn type="submit">Enviar</RegisterFormBtn>
              <RegisterFormBtn2 type="button" className="mt-2" onClick={() => setShowPopup(false)}>Cancelar</RegisterFormBtn2>
            </form>
          </Popup>
        </PopupOverlay>
      )}
    </Base>
  );
}

export default Login;
