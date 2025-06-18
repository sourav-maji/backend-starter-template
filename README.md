# Backend Starter Template (Node.js + MongoDB)

A modular, production-ready Node.js backend boilerplate with JWT auth, RBAC, validation, and logging.

## Features
- JWT Auth with Access + Refresh Tokens
- Role-Based Access Control
- Mongoose ODM
- Centralized Error Handling
- Winston Logger + Morgan HTTP logging
- Joi Input Validation
- Environment Config
- Modular Folder Structure
- Jest + Supertest Testing
- Docker Support
- Prettier + ESLint + Husky

## Getting Started

### 1. Clone the repo
\`\`\`bash
git clone https://github.com/yourname/backend-starter-template.git
cd backend-starter-template
`\`\`

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
\`\`\`
src/
├── config
├── controllers
├── middlewares
├── models
├── routes
├── services
├── utils
└── app.js
\`\`\`

## License
MIT