import { useState } from 'react';
import {
  Base,
  Hero,
  HeroContent,
  LoginForm,
  StyledButton,
  Display3,
  Lead
} from '../styles/contact';

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

    if (!validarFormulario()) return;

    console.log('Formulário válido:', { nome, email, telefone, mensagem });
  };

  const validarFormulario = () => {
    let valido = true;

    if (!nome || nome.split(/\s+/).length < 2) {
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
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nome" className="form-label">Nome Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite aqui o seu nome completo"
                    required
                  />
                  {erroNome && (
                    <small className="text-danger">
                      O nome completo é obrigatório e deve conter pelo menos dois nomes.
                    </small>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite aqui o seu e-mail"
                    required
                  />
                  {erroEmail && (
                    <small className="text-danger">
                      Por favor, insira um e-mail válido.
                    </small>
                  )}
                </div>

                <div>
                  <label htmlFor="telefone" className="form-label">Número de telefone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="XX XXXXX-XXXX"
                    required
                  />
                  {erroTelefone && (
                    <small className="text-danger">
                      Por favor, insira um número de telefone válido no formato XX XXXXX-XXXX.
                    </small>
                  )}
                </div>

                <div>
                  <label htmlFor="mensagem" className="form-label">Mensagem</label>
                  <textarea
                    className="form-control"
                    id="mensagem"
                    rows="3"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite aqui a sua mensagem"
                    required
                  ></textarea>
                  {erroMensagem && (
                    <small className="text-danger">
                      A mensagem deve ter entre 30 e 500 caracteres.
                    </small>
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
