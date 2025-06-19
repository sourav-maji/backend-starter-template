# 📦 Backend Starter Template (Node.js + MongoDB + JWT + ES Modules)

A robust, modular, and production-ready backend boilerplate built with Node.js, Express, and MongoDB, using ES6 module syntax. Designed to accelerate backend development with built-in authentication, role-based access control, request validation, logging, error handling, and testing support.

## ✨ Features
✅ JWT Authentication with Access + Refresh token support

🔒 Role-Based Access Control (RBAC)

⚙️ Modular folder structure using services and controllers

🔁 ES6 module support (import/export)

🧾 Joi-based request validation

📄 Custom API response & error classes

🔐 Secure headers (Helmet) & rate limiting

🌍 MongoDB integration with error handling

📋 Centralized error handling middleware

📊 Logging with Winston + Morgan

🧪 Jest + Supertest for testing

💅 Prettier + ESLint + Husky for clean code and commits

🚑 Health check route at /health

🔧 Environment-based config with .env.example

🐳 Dockerfile included for containerization (optional)

📚 Swagger/Postman-ready structure for easy documentation

## Getting Started

### 1. Clone the repo
```bash
git clone 
cd backend-starter-template
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.example .env
```

### 4. Start the app
```bash
npm run dev
```

### 5. Run tests
```bash
npm test
```

### 6. Build Docker image (optional)
```bash
docker build -t backend-starter .

docker run -p 5000:5000 backend-starter
```

--- 

## Folder Structure
```
src/
├── config
├── controllers
├── middlewares
├── models
├── routes
├── services
├── utils
└── app.js
```

## 🛡 Example Auth Routes
- POST /api/register – Create a new user

- POST /api/login – Login and get tokens

- POST /api/refresh-token – Get a new access token

- GET /health – Server health check


## 🧰 Tech Stack
- Node.js + Express.js
- MongoDB + Mongoose
- JWT for authentication
- Joi for validation
- Winston + Morgan for logging
- Jest + Supertest for testing


## 🙋‍♂️ Maintainer & 👨‍💻 Author
Sourav Maji — AI Automation Engineer & Backend Developer

[**GitHub**](https://github.com/sourav-maji) | [**Linkedin**](https://www.linkedin.com/in/souravmajiwb/)