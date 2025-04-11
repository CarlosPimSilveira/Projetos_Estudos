// Função para verificar as credenciais do usuário
function verificar() {
    // Obtém os valores digitados pelo usuário
    const inputLogin = document.getElementById("id_login").value;
    const inputSenha = document.getElementById("id_senha").value;

    // Recupera os dados armazenados no "banco de dados" local
    const storedLogin = localStorage.getItem("stored_login");
    const storedSenha = localStorage.getItem("stored_senha");

    // Verifica se os dados informados correspondem aos armazenados
    if (inputLogin === storedLogin && inputSenha === storedSenha) {
        // Credenciais corretas: continua o fluxo de login
        logar();
    } else {
        // Credenciais incorretas: exibe mensagem de erro
        alert("Login ou senha incorretos!");
    }
}

// Função para efetuar o login (redirecionar, por exemplo)
function logar() {
    document.getElementById('overlay').style.display = 'flex';
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 1500);
}

// Defina as credenciais padrão na inicialização, se não houver nenhum cadastro
if (!localStorage.getItem("stored_login") || !localStorage.getItem("stored_senha")) {
    localStorage.setItem("stored_login", "admin"); // login fixo
    localStorage.setItem("stored_senha", "admin123"); // senha fixa
}
