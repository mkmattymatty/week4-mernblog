Content:
# 📰 MERN Blog Application
Front end https://week4-mernblog.vercel.app/
Backend:https://week4-mernblog-server.vercel.app/
A full-stack blog app built using the MERN stack — MongoDB, Express.js, React.js, and Node.js — with authentication, image uploads, category filters, and comments.

📝 Assignment Submission Summary – MERN Blog Project

Project Title: MERN Blog Application
Stack Used: MongoDB, Express.js, React.js, Node.js (MERN)
Hosting:

Frontend: Deployed on Vercel

Backend/API: Deployed on Vercel

Database: MongoDB Atlas (cloud-hosted, production-ready)


## 🚀 Features
User registration and login (JWT authentication)

Dynamic fetching and display of blog posts

Category-based filtering

Responsive design with modern UI

Deployed frontend & backend connected to MongoDB Atlas
- User authentication (register/login)
- Create, read, update, delete posts
- Categories and filtering
- Image upload for posts
- Comment system
- Responsive UI with Tailwind CSS
- Dark/Light mode toggle
ENV.
VITE_API_URL=https://week4-mernblog-server.vercel.app/api
MONGO_URI=<your MongoDB Atlas connection string>
JWT_SECRET=<secret key>
NODE_ENV=production



## 🏗️ Project Setup

### 🖥️ Server Setup
cd server
npm install
npm run dev

Client Setup
cd client
npm install
npm run dev

⚙️ Environment Variables
Create .env files in both server and client
MONGO_URI=mongodb://localhost:27017/mernmatty
JWT_SECRET=secret byaok
PORT=5000

📡 API Endpoints
| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/posts`     | Get all posts   |
| GET    | `/api/posts/:id` | Get single post |
| POST   | `/api/posts`     | Create post     |
| PUT    | `/api/posts/:id` | Update post     |
| DELETE | `/api/posts/:id` | Delete post     |

Categories


| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/categories` | Get all categories |
| POST   | `/api/categories` | Create category    |


Tech Stack

Frontend: React, Tailwind CSS, Axios, React Router
Backend: Node.js, Express.js, Mongoose
Database: MongoDB
Authentication: JWT

Author
Mathias Mwaro
Full Stack Web Developer (PLP Cohort VIII - 2025)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

