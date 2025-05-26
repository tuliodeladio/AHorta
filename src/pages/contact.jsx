import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Base,
  Hero,
  HeroContent,
  LoginForm,
  StyledButton,
  Display3,
  Lead
} from '../styles/contact';

const phoneRegex = /^\d{2}\s\d{5}-\d{4}$/;

const schema = yup.object().shape({
  nome: yup
    .string()
    .test('full-name', 'O nome completo é obrigatório e deve conter pelo menos dois nomes.', value => {
      if (!value) return false;
      const partes = value.trim().split(/\s+/);
      return partes.length >= 2 && partes.every(p => p.length > 0);
    })
    .required('Nome é obrigatório'),
  email: yup.string().email('Por favor, insira um e-mail válido.').required('E-mail é obrigatório'),
  telefone: yup
    .string()
    .matches(phoneRegex, 'Por favor, insira um número de telefone válido no formato XX XXXXX-XXXX.')
    .required('Telefone é obrigatório'),
  mensagem: yup
    .string()
    .min(30, 'A mensagem deve ter entre 30 e 500 caracteres.')
    .max(500, 'A mensagem deve ter entre 30 e 500 caracteres.')
    .required('Mensagem é obrigatória'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Formulário válido:', data);
  };

  return (
    <Base>
      <div className="container-fluid h-100 w-100 min-vh-100">
        <div className="row w-100 h-100 min-vh-100">
          <div className="col-md-6">
            <Hero className="h-100 w-100">
              <HeroContent>
                <Display3>AHorta</Display3>
                <Lead>Seja um parceiro da maior comunidade orgânica do Brasil</Lead>
              </HeroContent>
            </Hero>
          </div>

          <div className="col-md-1" />

          <div className="col-md-4">
            <LoginForm>
              <h6 className="mb-4">
                AHorta proporciona a plataforma para a interação entre hortas comunitárias e grandes empresas que podem contribuir com o crescimento do cultivo orgânico em troca de maior visibilidade nas próprias hortas. Entre em contato e entenda melhor essa oportunidade.
              </h6>
              <h3>Fale com a gente</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="nome" className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Digite aqui o seu nome completo"
                    {...register('nome')}
                  />
                  {errors.nome && (
                    <small className="text-danger">{errors.nome.message}</small>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Digite aqui o seu e-mail"
                    {...register('email')}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
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
                  {errors.telefone && (
                    <small className="text-danger">{errors.telefone.message}</small>
                  )}
                </div>

                <div>
                  <label htmlFor="mensagem" className="form-label">Mensagem</label>
                  <textarea
                    className="form-control"
                    id="mensagem"
                    rows="3"
                    placeholder="Digite aqui a sua mensagem"
                    {...register('mensagem')}
                  />
                  {errors.mensagem && (
                    <small className="text-danger">{errors.mensagem.message}</small>
                  )}
                </div>

                <StyledButton type="submit">Enviar</StyledButton>
              </form>
            </LoginForm>
          </div>

          <div className="col-md-1" />
        </div>
      </div>
    </Base>
  );
};

export default Contact;
