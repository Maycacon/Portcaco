Parse.initialize("XbWp0BHJ1nLCEjQBk2AaKzJzC30y3zof1e7JqzB3", "KuBJUnq37PavJZ4L7KiBJFAe3sO88IckmdMQEz0m");  
Parse.serverURL = 'https://parseapi.back4app.com/'; 

// Quando o formulário de login for enviado
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();  

 
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  
  loginUser(email, password);
});

// Função para fazer o login do usuário
function loginUser(email, password) {
  Parse.User.logIn(email, password).then((user) => {
    alert("Login bem-sucedido!");
    window.location.href = "projetos.html";  
  }).catch((error) => {
    console.error("Erro ao fazer login: ", error);
    alert("Erro ao fazer login: " + error.message);
  });
}
