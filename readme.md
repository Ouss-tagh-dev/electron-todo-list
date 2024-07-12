# Ouss-Todo

Welcome to Ouss-Todos! This application is designed to manage todos using Electron with Vue.js for the frontend and NestJS with MongoDB for the backend.

## Project Overview

- **Frontend (Electron with Vue.js):**
  - Explore the `client` directory for Electron main and renderer processes.
  - Install dependencies with `npm install`.

- **Backend (NestJS with MongoDB):**
  - Navigate to the `api` directory for NestJS controllers, services, and models.
  - Install dependencies using `npm install`.

## Getting Started

### Clone the Repository and Setup

#### Clone the repository
```bash
  git clone https://github.com/Ouss-tagh-dev/electron-todo-list.git
```

#### Change directory
```bash
  cd electron-todo-list
```

#### Frontend Setup
```bash
cd client
npm install
```

#### Frontend Setup
```bash
cd ../api
npm install
```

#### Configure MongoDB

Update the MongoDB URI in app.module.ts to match your database configuration:

```bash
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ousstodo')],
```

## Running the Application

#### Start the backend server

```bash
  cd api
  npm run start:dev
```
#### Start the frontend Electron app

```bash
  cd client
  npm start
```

## Contributing

We welcome contributions to improve Ouss-Todo! Follow these steps to contribute:

1. **Fork** the repository on GitHub.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. **Stage** your changes: `git add .`.
4. **Commit** your changes: `git commit -m "Add new feature"`.
5. **Push** to the branch: `git push origin feature/my-feature`.
6. Submit a **pull request** on GitHub.

Thank you for helping to make Ouss-Todo better!

---
Made with ❤ by [Oussama](https://github.com/ouss-tagh-dev)