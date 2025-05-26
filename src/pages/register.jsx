import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Base,
  RegisterForm,
  ConfirmButton,
  VoltarButton,
  ErrorText
} from '../styles/register.js';

const phoneRegex = /^\d{2}\s\d{5}-\d{4}$/;

const schema = yup.object().shape({
  tipoCadastro: yup.string().required('Tipo de cadastro é obrigatório'),
  nome: yup
    .string()
    .test('full-name', 'O nome completo é obrigatório e deve conter pelo menos dois nomes.', value => {
      if (!value) return false;
      const partes = value.trim().split(/\s+/);
      return partes.length >= 2 && partes.every(p => p.length > 0);
    })
    .required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  confirmarEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'Os e-mails não coincidem')
    .required('Confirmação de e-mail é obrigatória'),
  telefone: yup
    .string()
    .matches(phoneRegex, 'Por favor, insira um número de telefone válido. Ex: 11 99999-9999')
    .required('Telefone é obrigatório'),
  senha: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('Senha é obrigatória'),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref('senha'), null], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória'),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Dados enviados:', data);
  };

  return (
    <Base>
      <div className="container-fluid h-100 w-100 min-vh-100">
        <div className="row w-100 h-100 min-vh-100">
          <div className="col-md-4"></div>
          <div className="col-md-4 h-100">
            <RegisterForm>
              <h3>Cadastre-se</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="tipoCadastro" className="form-label">Tipo de cadastro</label>
                  <select
                    className="form-select"
                    id="tipoCadastro"
                    {...register('tipoCadastro')}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="donoHorta">Dono de Horta</option>
                    <option value="voluntario">Voluntário</option>
                    <option value="cliente">Cliente</option>
                  </select>
                  {errors.tipoCadastro && <ErrorText>{errors.tipoCadastro.message}</ErrorText>}
                </div>

                <div>
                  <label htmlFor="nome" className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Insira aqui o seu nome completo"
                    {...register('nome')}
                  />
                  {errors.nome && <ErrorText>{errors.nome.message}</ErrorText>}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Insira aqui o seu e-mail"
                    {...register('email')}
                  />
                  {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </div>

                <div>
                  <label htmlFor="confirmarEmail" className="form-label">Digite novamente o seu E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="confirmarEmail"
                    placeholder="Insira aqui o seu e-mail"
                    {...register('confirmarEmail')}
                  />
                  {errors.confirmarEmail && <ErrorText>{errors.confirmarEmail.message}</ErrorText>}
                </div>

                <div>
                  <label htmlFor="telefone" className="form-label">Número de telefone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefone"
                    placeholder="XX XXXXX-XXXX"
                    {...register('telefone')}
                  />
                  {errors.telefone && <ErrorText>{errors.telefone.message}</ErrorText>}
                </div>

                <div>
                  <label htmlFor="senha" className="form-label">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="senha"
                    placeholder="Insira aqui a sua senha"
                    {...register('senha')}
                  />
                  {errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}
                </div>

                <div>
                  <label htmlFor="confirmarSenha" className="form-label">Digite novamente a sua Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmarSenha"
                    placeholder="Insira aqui a sua senha"
                    {...register('confirmarSenha')}
                  />
                  {errors.confirmarSenha && <ErrorText>{errors.confirmarSenha.message}</ErrorText>}
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
