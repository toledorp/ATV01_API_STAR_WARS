cat > README.md << 'EOF'
# 🚀 Star Wars API - Fullstack

Sistema fullstack desenvolvido com **Node.js, Express, MongoDB Atlas e React**, permitindo gerenciamento completo (CRUD) dos dados do universo Star Wars com **interface administrativa integrada**.

---

## 📌 Objetivo

Projeto desenvolvido para a disciplina **Desenvolvimento Web III**, com foco na construção de uma aplicação fullstack completa.

✔ API REST estruturada  
✔ Integração com MongoDB Atlas  
✔ Frontend em React consumindo API  
✔ Autenticação com JWT  
✔ Painel administrativo com CRUD completo via interface  
✔ Documentação interativa com Swagger  

---

## 🛠️ Tecnologias utilizadas

### 🔧 Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Dotenv
- JSON Web Token (JWT)
- Swagger UI Express

### 🎨 Frontend
- React
- Vite
- Fetch API

### 🧪 Ferramentas
- Insomnia
- Swagger
- Git e GitHub

---

## 📂 Estrutura do projeto

ATV01_API_STAR_WARS/
├── backend-star-wars/
├── frontend-star-wars/
├── assets/
└── README.md

---

## ⚙️ Como executar o projeto

### 1. Instalar dependências

Backend:
cd backend-star-wars
npm install

Frontend:
cd ../frontend-star-wars
npm install

---

### 2. Configurar .env

backend-star-wars/.env

MONGODB_URI=sua_string
JWTSECRET=sua_chave
PORT=4000

---

### 3. Executar

Backend:
npm run dev

Frontend:
npm run dev

---

## 🌐 Acessos

Backend: http://localhost:4000  
Frontend: http://localhost:5173  
Swagger: http://localhost:4000/api-docs  

---

## 🔐 Autenticação

Sistema com JWT e dois níveis:

Usuário:
- Visualiza dados

Admin:
- Cria
- Edita
- Exclui

---

## 🧩 Funcionalidades

### Backend
- CRUD completo
- API REST
- MongoDB Atlas
- JWT
- Middleware de autorização
- Swagger

### Frontend
- Login
- Painel admin
- CRUD visual
- Paginação
- Controle por perfil

---

## 📚 Entidades

- Films
- Characters
- Planets
- Species
- Vehicles
- Starships

---

## 🔗 Endpoints

Auth:
POST /user  
POST /auth  

Films:
GET /films  
POST /films  
PUT /films/:id  
DELETE /films/:id  

Characters:
GET /persons  
POST /persons  
PUT /persons/:id  
DELETE /persons/:id  

Planets:
GET /planets  
POST /planets  
PUT /planets/:id  
DELETE /planets/:id  

Species:
GET /species  
POST /species  
PUT /species/:id  
DELETE /species/:id  

Vehicles:
GET /vehicles  
POST /vehicles  
PUT /vehicles/:id  
DELETE /vehicles/:id  

Starships:
GET /starships  
POST /starships  
PUT /starships/:id  
DELETE /starships/:id  

---

## 🧪 Testes

- Insomnia  
- Swagger  
- Frontend  

---

## ☁️ Banco

MongoDB Atlas

---

## 🧠 Desafios

- MongoDB Atlas
- JWT
- Integração front/back
- CRUD completo
- Controle de acesso
- Paginação
- Swagger

---

## 📘 Swagger

http://localhost:4000/api-docs

---

## 🎨 Painel Admin

Permite:

- Criar
- Editar
- Excluir
- Paginar dados

Tudo via interface gráfica.

---

## 👨‍💻 Autores

- Camila Machado de Souza  
- Ricardo Sugano  
- Rogerio Pupo Toledo  

---

## 📄 Licença

Projeto acadêmico sem fins comerciais.