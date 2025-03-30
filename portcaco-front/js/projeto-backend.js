// backend.js - Funções de backend

// Inicializando o Parse
Parse.initialize("XbWp0BHJ1nLCEjQBk2AaKzJzC30y3zof1e7JqzB3", "KuBJUnq37PavJZ4L7KiBJFAe3sO88IckmdMQEz0m");  // Substitua com suas credenciais
Parse.serverURL = 'https://parseapi.back4app.com/';  // URL da sua API no Back4App

// Função para criar projeto
async function createProjectInBackend(title, description, imageUrl) {
  const Project = Parse.Object.extend("Project");
  const project = new Project();
  
  project.set("title", title);
  project.set("description", description);
  project.set("imageUrl", imageUrl);  // Adicionando a URL da imagem
  
  try {
    await project.save();
    console.log('Projeto criado com sucesso!');
    return project;
  } catch (error) {
    console.error('Erro ao criar o projeto: ', error);
    return null;
  }
}

// Função para obter todos os projetos
async function getProjects() {
  const Project = Parse.Object.extend("Project");
  const query = new Parse.Query(Project);
  
  try {
    const results = await query.find();
    return results;
  } catch (error) {
    console.error('Erro ao obter projetos: ', error);
    return [];
  }
}

// Função para obter um projeto por ID
async function getProjectById(id) {
  const Project = Parse.Object.extend("Project");
  const query = new Parse.Query(Project);

  try {
    const project = await query.get(id);
    return project;
  } catch (error) {
    console.error('Erro ao obter o projeto: ', error);
    return null;
  }
}

// Função para atualizar um projeto
async function updateProjectInBackend(id, title, description, imageUrl) {
  const Project = Parse.Object.extend("Project");
  const query = new Parse.Query(Project);

  try {
    const project = await query.get(id);
    project.set("title", title);
    project.set("description", description);
    project.set("imageUrl", imageUrl);
    await project.save();
    console.log('Projeto atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar o projeto: ', error);
  }
}
