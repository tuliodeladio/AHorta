import React, { useState } from 'react';
import {
  Base,
  RegisterForm,
  ConfirmButton,
  VoltarButton,
  ErrorText
} from '../styles/register.js';

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
    <Base>
      <div className="container-fluid h-100 w-100 min-vh-100">
        <div className="row w-100 h-100 min-vh-100">
          <div className="col-md-4"></div>
          <div className="col-md-4 h-100">
            <RegisterForm>
              <h3>Cadastre-se</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="tipoCadastro" className="form-label">Tipo de cadastro</label>
                  <select
                    className="form-select"
                    id="tipoCadastro"
                    value={tipoCadastro}
                    onChange={(e) => setTipoCadastro(e.target.value)}
                    required
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="donoHorta">Dono de Horta</option>
                    <option value="voluntario">Voluntário</option>
                    <option value="cliente">Cliente</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nome" className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    value={nome}
                    onChange={handleNomeChange}
                    placeholder="Insira aqui o seu nome completo"
                    required
                  />
                  {erroNome && <ErrorText>O nome completo é obrigatório e deve conter pelo menos dois nomes.</ErrorText>}
                </div>
                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Insira aqui o seu e-mail"
                    required
                  />
                  {erroEmail && <ErrorText>{erroEmail}</ErrorText>}
                </div>
                <div>
                  <label htmlFor="confirmarEmail" className="form-label">Digite novamente o seu E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="confirmarEmail"
                    value={confirmarEmail}
                    onChange={(e) => setConfirmarEmail(e.target.value)}
                    placeholder="Insira aqui o seu e-mail"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="form-label">Número de telefone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefone"
                    value={telefone}
                    onChange={validarTelefone}
                    placeholder="XX XXXXX-XXXX"
                    required
                  />
                  {erroTelefone && <ErrorText>Por favor, insira um número de telefone válido.</ErrorText>}
                </div>
                <div>
                  <label htmlFor="senha" className="form-label">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Insira aqui a sua senha"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmarSenha" className="form-label">Digite novamente a sua Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmarSenha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Insira aqui a sua senha"
                    required
                  />
                  {erroSenha && <ErrorText>{erroSenha}</ErrorText>}
                </div>
                <ConfirmButton type="submit">Confirmar</ConfirmButton>
                <VoltarButton type="button" onClick={() => window.history.back()}>
                  Voltar
                </VoltarButton>
              </form>
            </RegisterForm>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </Base>
  );
}

export default Register;
