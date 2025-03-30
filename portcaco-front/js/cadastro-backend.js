// backend.js

// Inicializando o Parse SDK com as credenciais fornecidas pelo Back4App
Parse.initialize("XbWp0BHJ1nLCEjQBk2AaKzJzC30y3zof1e7JqzB3", "KuBJUnq37PavJZ4L7KiBJFAe3sO88IckmdMQEz0m");  // Substitua com suas credenciais
Parse.serverURL = 'https://parseapi.back4app.com/';  // URL da sua API no Back4App

document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Impede que a página seja recarregada
  
    // Captura os dados inseridos no formulário
    const username = document.getElementById("name").value;  // Usando o nome completo para o campo de usuário
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Chama a função para criar o usuário
    createUser(username, password, email);
  });
  
  // Função para criar o usuário
  function createUser(username, password, email) {
    const User = Parse.Object.extend("User");
    const user = new User();
  
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
  
    // Criando o usuário no Back4App
    user.signUp().then((user) => {
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "login.html"; // Redireciona para a página de login após o cadastro
    }).catch((error) => {
      console.error("Erro ao cadastrar usuário: ", error);
      alert("Erro ao cadastrar usuário: " + error.message);
    });
  }