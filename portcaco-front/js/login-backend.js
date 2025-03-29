// Inicializar o Parse com as chaves da sua aplicação Back4App
Parse.initialize("XbWp0BHJ1nLCEjQBk2AaKzJzC30y3zof1e7JqzB3", "KuBJUnq37PavJZ4L7KiBJFAe3sO88IckmdMQEz0m");  // Substitua com suas credenciais
Parse.serverURL = 'https://parseapi.back4app.com/';  // URL da sua API no Back4App

// Quando o formulário de login for enviado
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();  // Impede que a página seja recarregada

  // Captura os dados inseridos no formulário
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Chama a função para realizar o login
  loginUser(email, password);
});

// Função para fazer o login do usuário
function loginUser(email, password) {
  Parse.User.logIn(email, password).then((user) => {
    alert("Login bem-sucedido!");
    window.location.href = "projetos.html";  // Redireciona para a página de projetos após o login
  }).catch((error) => {
    console.error("Erro ao fazer login: ", error);
    alert("Erro ao fazer login: " + error.message);
  });
}
