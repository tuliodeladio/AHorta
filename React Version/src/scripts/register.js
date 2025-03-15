// Validação do nome
document.getElementById('nome').addEventListener('input', function () {
    const entradaNome = this.value.trim();
    const erroNome = document.getElementById('erroNome');
    const partesNome = entradaNome.split(/\s+/);
    
    if (partesNome.length >= 2 && partesNome.every(parte => parte.length > 0)) {
        erroNome.style.display = 'none';
        this.setCustomValidity('');
    } else {
        erroNome.style.display = 'block';
        this.setCustomValidity('Por favor, preencha com seu nome completo.');
    }
});

// Validação do e-mail
// Validação do e-mail
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('confirmarEmail').addEventListener('input', validarEmail);

function validarEmail() {
    const email = document.getElementById('email').value.trim();
    const confirmarEmail = document.getElementById('confirmarEmail').value.trim();
    const erroEmail = document.getElementById('erroConfirmarEmail');
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validação básica de formato de e-mail

    if (!padraoEmail.test(email)) {
        erroEmail.textContent = 'O e-mail inserido não é válido.';
        erroEmail.style.display = 'block';
        document.getElementById('confirmarEmail').setCustomValidity('O e-mail inserido não é válido.');
    } else if (email !== confirmarEmail) {
        erroEmail.textContent = 'Os e-mails não coincidem.';
        erroEmail.style.display = 'block';
        document.getElementById('confirmarEmail').setCustomValidity('Os e-mails não coincidem.');
    } else {
        erroEmail.style.display = 'none';
        document.getElementById('confirmarEmail').setCustomValidity('');
    }
}


// Validação do telefone
document.getElementById('telefone').addEventListener('input', function () {
    const entradaTelefone = this.value.trim();
    const erroTelefone = document.getElementById('erroTelefone');
    const padraoTelefone = /^\d{2}\s\d{5}-\d{4}$/;

    if (padraoTelefone.test(entradaTelefone)) {
        erroTelefone.style.display = 'none';
        this.setCustomValidity('');
    } else {
        erroTelefone.style.display = 'block';
        this.setCustomValidity('Por favor, insira um número de telefone válido.');
    }
});


// Validação da senha
document.getElementById('senha').addEventListener('input', validarSenha);
document.getElementById('confirmarSenha').addEventListener('input', validarSenha);

function validarSenha() {
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();
    const erroSenha = document.getElementById('erroConfirmarSenha');

    if (senha.length < 8) {
        erroSenha.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        erroSenha.style.display = 'block';
        document.getElementById('confirmarSenha').setCustomValidity('A senha deve ter pelo menos 8 caracteres.');
    } else if (senha !== confirmarSenha) {
        erroSenha.textContent = 'As senhas não coincidem.';
        erroSenha.style.display = 'block';
        document.getElementById('confirmarSenha').setCustomValidity('As senhas não coincidem.');
    } else {
        erroSenha.style.display = 'none';
        document.getElementById('confirmarSenha').setCustomValidity('');
    }
}
